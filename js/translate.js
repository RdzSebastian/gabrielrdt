    var dataReload = document.querySelectorAll("[data-reload]");

    var lenguaje = {
      en: {
        home1: "CURRENT GENERAL MANAGER OF RIVER PLATES’S YOUTH DIVISION ",
        home2: "Coach with over 38 years of experience in youth and profesional soccer",
        sobreMi: "ABOUT ME",
        sobreMi2: "Youth soccer coordinator. Trainer and recruiter of players. Manager of AF Parque Chas.",
        sobreMi3: "My main goal is to transmit values, ethical principles and integrity in order to form good human being for the future"
      },
      de: {
        home1: "herzlich willkommen",
        home2: "Coach with over 38 years of experience in youth and profesional soccer",
        sobreMi: "ABOUT ME",
        sobreMi2: "Youth soccer coordinator. Trainer and recruiter of players. Manager of AF Parque Chas.",
        sobreMi3: "My main goal is to transmit values, ethical principles and integrity in order to form good human being for the future "
      },
      fr: {
        home1: "Bienvenue tout le monde",
        home2: "Coach with over 38 years of experience in youth and profesional soccer",
        sobreMi: "ABOUT ME",
        sobreMi2: "Youth soccer coordinator. Trainer and recruiter of players. Manager of AF Parque Chas.",
        sobreMi3: "My main goal is to transmit values, ethical principles and integrity in order to form good human being for the future"
      }
    }

    if(window.location.hash){
      if(window.location.hash === "#en"){
        home1.textContent = lenguaje.en.home1;
        home2.textContent = lenguaje.en.home2;
        sobreMi.textContent = lenguaje.en.sobreMi;
        sobreMi2.textContent = lenguaje.en.sobreMi2;
        sobreMi3.textContent = lenguaje.en.sobreMi3;
      }
    }
    if(window.location.hash){
      if(window.location.hash === "#de"){
        home1.textContent = lenguaje.de.home1;
        home2.textContent = lenguaje.de.home2;
        sobreMi.textContent = lenguaje.de.sobreMi;
        sobreMi2.textContent = lenguaje.de.sobreMi2;
        sobreMi3.textContent = lenguaje.de.sobreMi3;
      }
    }
    if(window.location.hash){
      if(window.location.hash === "#fr"){
        home1.textContent = lenguaje.fr.home1;
        home2.textContent = lenguaje.fr.home2;
        sobreMi.textContent = lenguaje.fr.sobreMi;
        sobreMi2.textContent = lenguaje.fr.sobreMi2;
        sobreMi3.textContent = lenguaje.fr.sobreMi3;
      }
    }

    for(i=0; i<=dataReload.length; i++){
      dataReload[i].onclick = function(){
        location.reload(true);
      }
    }