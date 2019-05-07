    var dataReload = document.querySelectorAll("[data-reload]");

    var lenguaje = {
      en: {
        bh: "home",
        bs: "About me",
        bt: "Career path",
        bj: "Players Signings",
        bi: "Photos",
        be: "Interviews",
        home1: "CURRENT GENERAL MANAGER OF RIVER PLATE YOUTH DIVISION",
        home2: "Coach with over 38 years of experience in youth and profesional soccer",
        home3: "January 30th, 1960",
        sobreMi: "ABOUT ME",
        sobreMi2: "Youth soccer coordinator. Trainer and recruiter of players. Manager of AF Parque Chas.",
        sobreMi3: "My main goal is to transmit values, ethical principles and integrity in order to form good human being for the future"
      },
      de: {
        bh: "Startseite",
        bs: "Über mich",
        bt: "Karriereweg",
        bj: "Spieler-Unterschriften",
        bi: "Bilder",
        be: "Interviews",
        home1: "AKTUELLER GENERAL MANAGER DER JUGENDABTEILUNG RIVER PLATE",
        home2: "Technischer Direktor mit mehr als 38 Jahren Erfahrung im Jugend- und Profifußball",
        home3: "30. Januar 1960",
        sobreMi: "Über mich",
        sobreMi2: "Koordinator für Kinder- und Jugendfußball. Trainer und Spieler von Spielern. Fußballdirektor von AF Parque Chas. ",
        sobreMi3: "Mein Hauptziel ist es, Werte, Ethik und Ehrlichkeit zu vermitteln, um gute Menschen für morgen zu bilden "
      },
      fr: {
        bh: "",
        bs: "",
        home1: "",
        home2: "",
        home3: "",
        sobreMi: "",
        sobreMi2: "",
        sobreMi3: ""
      }
    }

    if(window.location.hash){
      if(window.location.hash === "#en"){
        bh.textContent = lenguaje.en.bh;
        bs.textContent = lenguaje.en.bs;
        bt.textContent = lenguaje.en.bt;
        bj.textContent = lenguaje.en.bj;
        bi.textContent = lenguaje.en.bi;
        be.textContent = lenguaje.en.be;
        home1.textContent = lenguaje.en.home1;
        home2.textContent = lenguaje.en.home2;
        home3.textContent = lenguaje.en.home3;
        sobreMi.textContent = lenguaje.en.sobreMi;
        sobreMi2.textContent = lenguaje.en.sobreMi2;
        sobreMi3.textContent = lenguaje.en.sobreMi3;
      }
    }
    if(window.location.hash){
      if(window.location.hash === "#de"){
        bh.textContent = lenguaje.de.bh;
        bs.textContent = lenguaje.de.bs;
        bt.textContent = lenguaje.de.bt;
        bj.textContent = lenguaje.de.bj;
        bi.textContent = lenguaje.de.bi;
        be.textContent = lenguaje.de.be;
        home1.textContent = lenguaje.de.home1;
        home2.textContent = lenguaje.de.home2;
        home3.textContent = lenguaje.de.home3;
        sobreMi.textContent = lenguaje.de.sobreMi;
        sobreMi2.textContent = lenguaje.de.sobreMi2;
        sobreMi3.textContent = lenguaje.de.sobreMi3;
      }
    }
    if(window.location.hash){
      if(window.location.hash === "#fr"){
        bh.textContent = lenguaje.fr.bh;
        bs.textContent = lenguaje.fr.bs;
        bt.textContent = lenguaje.fr.bt;
        bj.textContent = lenguaje.fr.bj;
        bi.textContent = lenguaje.fr.bi;
        be.textContent = lenguaje.fr.be;
        home1.textContent = lenguaje.fr.home1;
        home2.textContent = lenguaje.fr.home2;
        home3.textContent = lenguaje.fr.home3;
        sobreMi.textContent = lenguaje.fr.sobreMi;
        sobreMi2.textContent = lenguaje.fr.sobreMi2;
        sobreMi3.textContent = lenguaje.fr.sobreMi3;
      }
    }

    for(i=0; i<=dataReload.length; i++){
      dataReload[i].onclick = function(){
        window.location.reload(true);
      }
    }