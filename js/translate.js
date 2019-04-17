    var dataReload = document.querySelectorAll("[data-reload]");

    var lenguaje = {
      es: {
        welcome: "home"
      },
      en: {
        welcome: "enhome"
      },
      de: {
        welcome: "dehome"
      },
      fr: {
        welcome: "frhome"
      }
    }

    if(window.location.hash){
      if(window.location.hash === "#en"){
        textContent = lenguaje.es.welcome;
      }
    }
    if(window.location.hash){
      if(window.location.hash === "#de"){
        home.textContent = lenguaje.es.welcome;
      }
    }
    if(window.location.hash){
      if(window.location.hash === "#fr"){
        home.textContent = lenguaje.es.welcome;
      }
    }

    for(i=0; i<=dataReload.length; i++){
      dataReload[i].onclick = function(){
        location.reload(true);
      }
    }