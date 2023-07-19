import "./Postit.css";

  const variedadFrutas = [
    {
      nombre: "Manzana",
      foto: "public/images/manzana.jpg",
      genero: "Malus",
      familia: "Rosaceae",
      carbohidratos: 13.8,
      grasas: 0.2,
      calorias: 52
    },
    {
      nombre: "Plátano",
      foto: "public/images/platano.jpg",
      genero: "Musa",
      familia: "Musaceae",
      carbohidratos: 22,
      grasas: 0.2,
      calorias: 96
    },
    {
      nombre: "Naranja",
      foto: "public/images/naranja.jpg",
      genero: "Citrus",
      familia: "Rutaceae",
      carbohidratos: 11.8,
      grasas: 0.2,
      calorias: 47
    },
    {
      nombre: "Mandarina",
      foto: "public/images/mandarina.jpg",
      genero: "Citrus",
      familia: "Rutaceae",
      carbohidratos: 12.5,
      grasas: 0.3,
      calorias: 53
    },
    {
      nombre: "Uva",
      foto: "public/images/uvas.jpg",
      genero: "Vitis",
      familia: "Vitaceae",
      carbohidratos: 18.1,
      grasas: 0.2,
      calorias: 69
    },
    {
      nombre: "Fresa",
      foto: "public/images/fresa.jpg",
      genero: "Fragaria",
      familia: "Rosaceae",
      carbohidratos: 7.7,
      grasas: 0.3,
      calorias: 32
    },
    {
      nombre: "Piña",
      foto: "public/images/pina.jpg",
      genero: "Ananas",
      familia: "Bromeliaceae",
      carbohidratos: 13.1,
      grasas: 0.1,
      calorias: 50
    },
    {
      nombre: "Mango",
      foto: "public/images/mango.jpg",
      genero: "Mangifera",
      familia: "Anacardiaceae",
      carbohidratos: 15,
      grasas: 0.4,
      calorias: 60
    },
    {
      nombre: "Melón",
      foto: "public/images/melon.jpg",
      genero: "Cucumis",
      familia: "Cucurbitaceae",
      carbohidratos: 8.2,
      grasas: 0.2,
      calorias: 34
    },
    {
      nombre: "Sandía",
      foto: "public/images/sandia.jpg",
      genero: "Citrullus",
      familia: "Cucurbitaceae",
      carbohidratos: 7.6,
      grasas: 0.2,
      calorias: 30
    },
    {
      nombre: "Albaricoque",
      foto: "public/images/albaricoque.jpg",
      genero: "Prunus",
      familia: "Rosaceae",
      carbohidratos: 10.6,
      grasas: 0.1,
      calorias: 39
    },
    {
      nombre: "Cereza",
      foto: "public/images/cereza.jpg",
      genero: "Prunus",
      familia: "Rosaceae",
      carbohidratos: 12.2,
      grasas: 0.3,
      calorias: 50
    },
    {
      nombre: "Kiwi",
      foto: "public/images/kiwi.jpg",
      genero: "Actinidia",
      familia: "Actinidiaceae",
      carbohidratos: 14.7,
      grasas: 0.6,
      calorias: 61
    },
    {
      nombre: "Limón",
      foto: "public/images/limon.jpg",
      genero: "Citrus",
      familia: "Rutaceae",
      carbohidratos: 3,
      grasas: 0.3,
      calorias: 29
    },
    {
      nombre: "Mora",
      foto: "public/images/mora.jpg",
      genero: "Rubus",
      familia: "Rosaceae",
      carbohidratos: 4.9,
      grasas: 0.5,
      calorias: 43
    },
    {
      nombre: "Melocotón",
      foto: "public/images/melocoton.jpg",
      genero: "Prunus",
      familia: "Rosaceae",
      carbohidratos: 10.5,
      grasas: 0.1,
      calorias: 39
    },
    {
      nombre: "Ciruela",
      foto: "public/images/ciruela.jpg",
      genero: "Prunus",
      familia: "Rosaceae",
      carbohidratos: 11.4,
      grasas: 0.3,
      calorias: 46
    },
    {
      nombre: "Pera",
      foto: "public/images/pera.jpg",
      genero: "Pyrus",
      familia: "Rosaceae",
      carbohidratos: 15.5,
      grasas: 0.2,
      calorias: 57
    },
    {
      nombre: "Granada",
      foto: "public/images/granada.jpg",
      genero: "Punica",
      familia: "Lythraceae",
      carbohidratos: 18.7,
      grasas: 1.2,
      calorias: 83
    },
    {
      nombre: "Higo",
      foto: "public/images/higo.jpg",
      genero: "Ficus",
      familia: "Moraceae",
      carbohidratos: 19.2,
      grasas: 0.3,
      calorias: 74
    },
    {
      nombre: "Coco",
      foto: "public/images/coco.jpg",
      genero: "Cocos",
      familia: "Arecaceae",
      carbohidratos: 15.2,
      grasas: 33.5,
      calorias: 354
    },
    {
      nombre: "Papaya",
      foto: "public/images/papaya.jpg",
      genero: "Carica",
      familia: "Caricaceae",
      carbohidratos: 10.8,
      grasas: 0.1,    calorias: 43
    },
  ];

  const template = () => {
    let content = '';
    for (const fruta of variedadFrutas) {
      content += `
      <div class="fruta">
        <li>
          <img src="${fruta.foto}" alt="${fruta.nombre}"/>
          <h3>${fruta.nombre}</h3>
          <div class = "genero">
          <p> Género:${fruta.genero}</p>
          <p> Familia: ${fruta.familia}</p>
          </div>
          <div class="cualidades">
          <p> Carbohidratos: ${fruta.carbohidratos}</p>
          <p> Grasas: ${fruta.grasas}</p>
          <p> Calorías: ${fruta.calorias}</p>
          </div>
        </li>
        </div>
      `;
    }
    return `<ul>${content}</ul>`;
  };
  
  const Postit = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Postit;