import "./Api.css";

const template = () => {
  return `
  <div>
  <p>HOLA</P>
  <input type="text" id="my-input" placeholder="Nombre de la fruta"/>
  <button id="my-btn">Search</button>
  </div>
  <article id="fruta-data"></article>
  `;
};

//ESTA FUNCION SE ENCARGA DE BUSCAR DATOS EN LA API
const getFruit = async (city) => {
  //Hacemos la petición de los datos crudos, y hemos cambiado el valor de location por el argumento que le pasaremos a la función getRealTimeData
  const data = await fetch(
    `https://www.fruityvice.com/api/fruit/all`
  );
  //Parseamos los datos a json
  const dataJSON = await data.json();
  printData(dataJSON);
};

//ESTA FUNCION SE ENCARGA DE PINTAR LOS DATOS
const printData = (data) => {
  //Recuperamos el contendor
  const container = document.querySelector("#fruta-data");
 
  container.innerHTML = `
  <h2>${name}</h2>
  <h2>${id}</h2> 
  <h2>${family}</h2>
  <h2>${order}</h2>
  <h2>${genus}</h2>
  <h2>${nutritions.calories}</h2>
  <h2>${nutritions.fat}</h2>
  <h2>${nutritions.sugar}</h2>
  <h2>${nutritions.carbohydrates}</h2>
  <h2>${nutritions.protein}</h2>
  `;
};

const Api = () => {
  document.querySelector("main").innerHTML = template();
  //Recuperamos el input y el boton
  const myBtn = document.querySelector("#my-btn");
  const myInput = document.querySelector("#my-input");
  //Le damos funcionalidad al botón
  myBtn.addEventListener("click", () => {
    getFruit(myInput.value)
  })
};



export default Api;