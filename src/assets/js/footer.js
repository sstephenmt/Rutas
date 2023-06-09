function cambiarFooter (opcion) {
  const contenidoFooter = document.getElementsByClassName('contenido-footer')
  for (let i = 0; i < contenidoFooter.length; i++) {
    const elemento = contenidoFooter[i]
    if (parseInt(elemento.dataset.opcion) === parseInt(opcion)) {
      console.log('mostrando elemento con opción ' + opcion)
      elemento.style.display = 'block'
    } else {
      elemento.style.display = 'none'
    }
  }
}

window.onload = function () {
  cambiarFooter(2)
}
