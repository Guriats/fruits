import "./Api.css";

const template = () => {
  return `
  <p id="practicar">Esta vez te toca practicar tu inglés</p>
  <p id="favorita">Piensa en tu fruta favorita y mira cuanto bien te hace!!!</p>
  <p id="recuerda">Recuerda: escríbelo en ingles!!!</p>
  <div id="botones">
  <input type="text" id="m-input" placeholder="Choose your Fruit"/>
  <button id="m-btn">Search</button>
  </div>
  <article id="fruta-data"></article>
  `;
};

//ESTA FUNCION SE ENCARGA DE BUSCAR DATOS EN LA API
const getFruit = async (fruitName) => {
 // const getFruit = async (fruitName) => {
  //Hacemos la petición de los datos crudos, y hemos cambiado el valor de location por el argumento que le pasaremos a la función getRealTimeData
  const data = await fetch(
   //`https://www.fruityvice.com/api/fruit/all`
  `https://www.fruityvice.com/api/fruit/${fruitName}`
  );
  //Parseamos los datos a json
  const dataJSON = await data.json();
  printData(dataJSON);

};


//const { name, id, family, order, genus, nutritions } = data

//ESTA FUNCION SE ENCARGA DE PINTAR LOS DATOS
const printData = (data) => {
  console.log(data);
  //Recuperamos el contendor
  const container = document.querySelector("#fruta-data");
 
  container.innerHTML = `
  <h2>${data.name}</h2>
  <h3 id="calories">Calories: ${data.nutritions.calories}</h3>
  <h3>Fat: ${data.nutritions.fat} </h3>
  <h3>Sugar: ${data.nutritions.sugar}</h3>
  <h3>Carbohydrates: ${data.nutritions.carbohydrates}</h3>
  <h3>Protein: ${data.nutritions.protein}</h3>
  `;
};

const Api = () => {
  document.querySelector("main").innerHTML = template();
  //Recuperamos el input y el boton
  const myBtn = document.querySelector("#m-btn");
  const myInput = document.querySelector("#m-input");
  //Le damos funcionalidad al botón
  myBtn.addEventListener("click", () => {
    getFruit(myInput.value)
  })
};



export default Api;