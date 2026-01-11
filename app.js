document.addEventListener("DOMContentLoaded", function () {

  function mostrarMensaje() {
    alert("Gracias por tu interés ");
  }

  // seleccionamos los proyectos y las descripciones
  const items = document.querySelectorAll(".catalogo_item");
  const descs = document.querySelectorAll(".desc");

  // mostrar la descripción 
  function showDesc(id) {
    descs.forEach(desc => {
      desc.classList.remove("active");
    });

    const selected = document.getElementById(id);
    if (selected) {
      selected.classList.add("active");
    }
  }

  //  click en cada proyecto
  items.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-target");
      showDesc(target);
    });
  });

  // mostrar la primera descripción
  showDesc("desc-aina");

});

