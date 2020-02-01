(function(){
  "use strict";

  window.addEventListener('load', function() {
    /*****************/
    /*-- VARIABLES --*/
    /*****************/
    // VARIABLES MOSTRAR MENU LATERAL FILTROS
    let btn_filtros  = document.querySelector('.cabecera_izq button');
    let menu_filtros = document.getElementById('menu_lateral_filtrar');

    // EN IE9+ CAMBIAMOS LA PROPIEDAD DE PX A % PARA QUE RECONOZCA LA PROPIEDAD
    let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    if(isIE11)
      menu_filtros.style.left = '-100%';

    // MOSTRAR / OCULTAR MENU LATERAL FILTROS
    var estamosEnIndex = document.getElementsByClassName('main_index');
    if(estamosEnIndex.length > 0){
      btn_filtros.addEventListener('click', function(e) {
        e.target.classList.toggle('hamburguesa_activa');
        menu_filtros.classList.toggle('mostrar_filtros');
      });
    }

  });// Load Page

})();
