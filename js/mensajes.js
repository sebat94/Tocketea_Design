(function(){
  "use strict";


  window.addEventListener('load', function() {

    // BOTONES
    let nuevoMensaje = document.getElementById('nuevoMensaje');

    // SECCIONES
    let sectionVerMensaje = document.querySelectorAll('.info_mensaje');
    let sectionCrearMensaje = document.getElementById('crearMensaje');
    let sectionResponderMensaje = document.getElementById('responderMensaje');

    nuevoMensaje.addEventListener('click', function() {
      for (let i = 0; i < sectionVerMensaje.length; i++) {
        sectionVerMensaje[i].style.display = 'none';
      }
      sectionResponderMensaje.style.display = 'none';

      sectionCrearMensaje.style.display = 'block';
    });


    let reply = document.querySelectorAll('.reply');
    for (let i = 0; i < reply.length; i++) {
      reply[i].addEventListener('click', function(e) {
        e.cancelBubble = true;
        e.stopPropagation();

        for (let i = 0; i < sectionVerMensaje.length; i++) {
          sectionVerMensaje[i].style.display = 'none';
        }
        sectionCrearMensaje.style.display = 'none';

        sectionResponderMensaje.style.display = 'block';
      });
    }


    let usuario = document.querySelectorAll('.contacto_mis_mensajes');
    for (let i = 0; i < usuario.length; i++) {
      usuario[i].addEventListener('click', function() {
        sectionCrearMensaje.style.display = 'none';
        sectionResponderMensaje.style.display = 'none';

        for (let i = 0; i < sectionVerMensaje.length; i++) {
          sectionVerMensaje[i].style.display = 'block';
        }
      });
    }



  });// Load Page

})();
