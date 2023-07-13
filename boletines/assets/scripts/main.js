// DOM
// querySelector - querySelectorAll
//
// let links = document.querySelectorAll(".info");
// links.forEach(function(link){
//     console.log(link);
// });

// let celdas = document.querySelectorAll("td");

// celdas.forEach(function (td) {
//   td.addEventListener("click", function () {
//     console.log(this);
//   })
// });

//Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function (link) {
  //Agregar un evento click a cada uno de ellos
  link.addEventListener("click", function(ev) {
    ev.preventDefault();
  });
});



let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star-o");
    icono.classList.add("fa-star");
});
