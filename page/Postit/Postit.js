import "./Postit.css";


  const variedadFrutas = [
    {
      nombre: "Manzana",
      foto: "images/manzana.png",
      genero: "Malus",
      familia: "Rosaceae",
      carbohidratos: 13.8,
      grasas: 0.2,
      calorias: 52
    },
    {
      nombre: "Plátano",
      foto: "images/platano.png",
      genero: "Musa",
      familia: "Musaceae",
      carbohidratos: 22,
      grasas: 0.2,
      calorias: 96
    },
    {
      nombre: "Naranja",
      foto: "images/naranja.png",
      genero: "Citrus",
      familia: "Rutaceae",
      carbohidratos: 11.8,
      grasas: 0.2,
      calorias: 47
    },
    {
      nombre: "Mandarina",
      foto: "images/mandarina.png",
      genero: "Citrus",
      familia: "Rutaceae",
      carbohidratos: 12.5,
      grasas: 0.3,
      calorias: 53
    },
    {
      nombre: "Uva",
      foto: "images/uvas.png",
      genero: "Vitis",
      familia: "Vitaceae",
      carbohidratos: 18.1,
      grasas: 0.2,
      calorias: 69
    },
    {
      nombre: "Fresa",
      foto: "images/fresa.png",
      genero: "Fragaria",
      familia: "Rosaceae",
      carbohidratos: 7.7,
      grasas: 0.3,
      calorias: 32
    },
    {
      nombre: "Piña",
      foto: "images/pina.png",
      genero: "Ananas",
      familia: "Bromeliaceae",
      carbohidratos: 13.1,
      grasas: 0.1,
      calorias: 50
    },
    {
      nombre: "Mango",
      foto: "images/mango.png",
      genero: "Mangifera",
      familia: "Anacardiaceae",
      carbohidratos: 15,
      grasas: 0.4,
      calorias: 60
    },
    {
      nombre: "Melón",
      foto: "images/melon.png",
      genero: "Cucumis",
      familia: "Cucurbitaceae",
      carbohidratos: 8.2,
      grasas: 0.2,
      calorias: 34
    },
    {
      nombre: "Sandía",
      foto: "images/sandia.png",
      genero: "Citrullus",
      familia: "Cucurbitaceae",
      carbohidratos: 7.6,
      grasas: 0.2,
      calorias: 30
    },
    {
      nombre: "Albaricoque",
      foto: "images/albaricoque.png",
      genero: "Prunus",
      familia: "Rosaceae",
      carbohidratos: 10.6,
      grasas: 0.1,
      calorias: 39
    },
    {
      nombre: "Cereza",
      foto: "images/cereza.png",
      genero: "Prunus",
      familia: "Rosaceae",
      carbohidratos: 12.2,
      grasas: 0.3,
      calorias: 50
    },
    {
      nombre: "Kiwi",
      foto: "images/kiwi.png",
      genero: "Actinidia",
      familia: "Actinidiaceae",
      carbohidratos: 14.7,
      grasas: 0.6,
      calorias: 61
    },
    {
      nombre: "Limón",
      foto: "images/limon.png",
      genero: "Citrus",
      familia: "Rutaceae",
      carbohidratos: 3,
      grasas: 0.3,
      calorias: 29
    },
    {
      nombre: "Mora",
      foto: "images/mora.png",
      genero: "Rubus",
      familia: "Rosaceae",
      carbohidratos: 4.9,
      grasas: 0.5,
      calorias: 43
    },
    {
      nombre: "Melocotón",
      foto: "images/melocoton.png",
      genero: "Prunus",
      familia: "Rosaceae",
      carbohidratos: 10.5,
      grasas: 0.1,
      calorias: 39
    },
    {
      nombre: "Ciruela",
      foto: "images/ciruela.png",
      genero: "Prunus",
      familia: "Rosaceae",
      carbohidratos: 11.4,
      grasas: 0.3,
      calorias: 46
    },
    {
      nombre: "Pera",
      foto: "images/pera.png",
      genero: "Pyrus",
      familia: "Rosaceae",
      carbohidratos: 15.5,
      grasas: 0.2,
      calorias: 57
    },
    {
      nombre: "Granada",
      foto: "images/granada.png",
      genero: "Punica",
      familia: "Lythraceae",
      carbohidratos: 18.7,
      grasas: 1.2,
      calorias: 83
    },
    {
      nombre: "Higo",
      foto: "images/higo.png",
      genero: "Ficus",
      familia: "Moraceae",
      carbohidratos: 19.2,
      grasas: 0.3,
      calorias: 74
    },
    {
      nombre: "Coco",
      foto: "images/coco.png",
      genero: "Cocos",
      familia: "Arecaceae",
      carbohidratos: 15.2,
      grasas: 33.5,
      calorias: 354
    },
    {
      nombre: "Papaya",
      foto: "images/papaya.png",
      genero: "Carica",
      familia: "Caricaceae",
      carbohidratos: 10.8,
      grasas: 0.1,    calorias: 43
    },
  ];



/*html
<button id="miBoton">Haz clic aquí</button>

<script>
  const boton = document.getElementById('miBoton');

  boton.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      // Aquí puedes colocar la lógica que deseas ejecutar cuando se presione Enter
      console.log('Enter fue presionado');
    }
  });
</script>*/ 

  
  
  
  const Postit = () => {
    const input = document.querySelector("#my-input");
    const button = document.querySelector("#my-btn");
  
    button.addEventListener("click", () => {
      const fruta = input.value;
      let frutaSeleccionada = null;
      for (const frutaActual of variedadFrutas) {
        if (frutaActual.nombre.toLowerCase () === fruta.toLowerCase()) {
          frutaSeleccionada = frutaActual;
          break;
        }
      }
  
      if (frutaSeleccionada) {
        const main = document.querySelector("main");
        main.innerHTML = `
        <div class="fruta">
          <li>
            <img src="${frutaSeleccionada.foto}" alt="${frutaSeleccionada.nombre}"/>
            <h3>${frutaSeleccionada.nombre}</h3>
            <div class = "genero">
            <p> Género:${frutaSeleccionada.genero}</p>
            <p> Familia: ${frutaSeleccionada.familia}</p>
            </div>
            <div class="cualidades">
            <p> Carbohidratos: ${frutaSeleccionada.carbohidratos}</p>
            <p> Grasas: ${frutaSeleccionada.grasas}</p>
            <p> Calorías: ${frutaSeleccionada.calorias}</p>
            </div>
          </li>
        </div>
        `;
      } else {
        const main = document.querySelector("main");
        main.innerHTML = `
        <p id="noExiste">Esta fruta no la tenemos en nuestra base de datos. </p>
        `;
      }
    });
  };
  
  export default Postit;
















  