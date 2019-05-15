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
        sobreMi1: "ABOUT ME",
        sobreMi2: "Youth soccer coordinator. Trainer and recruiter of players. Manager of AF Parque Chas.",
        sobreMi3: "My main goal is to transmit values, ethical principles and integrity in order to form good human being for the future",
        sobreMi4: "38 years",
        sobreMi5: "of experience",
        sobreMi6: "championships",
        sobreMi7: "subchampionships",
        sobreMi8: "First division (A.F.A)",
        sobreMi9: "River 20 Years",
        sobreMi10: "San Lorenzo 14 Years",
        sobreMi11: "Independiente 2 Years",
        sobreMi12: "Estrella de Maldonado 6 Years",
        sobreMi13: "Parque Chas 28 Years",
        trayectoria1: "My Carrerpath",
        trayectoria2: "First Division",
        trayectoria3: "Technical director lower division",
        trayectoria4: "Technical director lower division.",
        trayectoria5: "Coordinator of the lower division.",
        trayectoria6: "Technical director reserve(U-21) division.",
        trayectoria7: "Coordinator of the Child and youth division.",
        trayectoria8: "Coordinator of the Child division.",
        trayectoria9: "2014 - - currently",
        trayectoria10: "Coordinator of the Child and youth division.",
        trayectoria11: "Technical director.",
        trayectoria12: "1991 - - currently",
        trayectoria13: "Technical director.",
        trayectoria14: "Round 14",
        trayectoria15: "Rounds 10 to 20",
        trayectoria16: "Rounds 15 to 19",
        jugador: "Players Signings",
        galeria1: "PHOTO GALLERY",
        galeria2: "A small walkthough through my career, travels and recognitions",
        galeria3: "ALL",
        galeria4: "TRIPS AND CONGRESSES",
        galeria5: "RECOGNITIONS",
        galeria6: "RIVER PLATE",
        galeria7: "SAN LORENZO ",
        galeria8: "Real Madrid and River Plate’s staff",
        galeria9: "Dallas, USA 2017",
        galeria10: "Campus Grasshopper, with president Erich Vogel",
        galeria11: "Zurich, Switzerland 2008",
        galeria12: "Directing first division",
        galeria13: "Leverkusen, Germany 2001",
        galeria14: "International congress",
        galeria15: "Sheraton hotel ACG Congress",
        galeria16: "Dallas, USA 2017",
        galeria17: "Drug abuse prevention program",
        galeria18: "Campus PSV with Guus Hiddink",
        galeria19: "Eindhoven, Netherlands 2005",
        galeria20: "Barcelona, Spain 2016",
        galeria21: "Champions for kids",
        galeria22: "With the president of PSV, Rob Westerkof",
        galeria23: "Eindhoven, Netherlands 2005",
        entrevistas1: "Interviews",
        entrevistas2: "Notes and reports from journalists."
      },
      de: {
		bh: "Startseite",
        bs: "Über",
		bt: "Karriereweg",
        bj: "Spieler-Unterschriften",
        bi: "Bilder",
        be: "Interviews",
        home1: "DERZEITIGER GENERALKOORDINATOR FÜR KINDER UND JUGENDLICHE DES RIVER PLATE CLUBS",
        home2: "Technischer Direktor mit mehr als 38 Jahren Erfahrung im Jugend- und Profifußball",
        home3: "Der 30. Januar 1960",
        sobreMi1: "Über",
        sobreMi2: "Koordinator für Kinder- und Jugendfußball. Trainer und Rekrutierer von Spielern. Fußballdirektor von AF Parque Chas.",
        sobreMi3: "Mein Hauptziel ist es, Werte, Ethik und Ehrlichkeit zu vermitteln, um gute Menschen für morgen zu bilden",
        sobreMi4: "38 Jahre",
        sobreMi5: "von Erfahrung",
        sobreMi6: "Meisterschaften",
        sobreMi7: "Zweitplatzierte",
        sobreMi8: "ERSTE DIVISION (A.F.A)",
        sobreMi9: "River 20 Jahre",
        sobreMi10: "San Lorenzo 14 Jahre",
        sobreMi11: "Independiente 2 Jahre",
        sobreMi12: "Estrella de Maldonado 6 Jahre",
        sobreMi13: "Parque Chas 28 Jahre",
		trayectoria1: "Karriereweg",
        trayectoria2: "Erste Division",
        trayectoria3: "Technischer Direktor der unteren Divisionen",
        trayectoria4: "Technischer Direktor der unteren Divisionen",
        trayectoria5: "Koordinator der unteren Divisionen",
        trayectoria6: "Koordinator die reserve abteilung(U-21)",
        trayectoria7: "Koordinator für Kinder- und Jugendkategorien",
        trayectoria8: "Fußballkoordinator für Kinder",
		trayectoria9: "2014 - - heute",
        trayectoria10: "Koordinator für Kinder- und Jugendkategorien",
        trayectoria11: "Technischer Direktor",
		trayectoria12: "1991 - - heute",
        trayectoria13: "Technischer Direktor",
        trayectoria14: "Spiel 14",
        trayectoria15: "Spiele 10 bis 20",
        trayectoria16: "Spiele 15 bis 19",
        jugador: "Spieler-Unterschriften",
        galeria1: "Bilder",
        galeria2: "Ein kleiner Überblick über meine Karriere, Reisen und Anerkennungen",
        galeria3: "Alles",
        galeria4: "Reisen und Tagungen",
        galeria5: "Anerkennungen",
        galeria6: "RIVER PLATE",
        galeria7: "SAN LORENZO ",
        galeria8: "Personal von Real Madrid und River Plate",
		galeria9: "Dallas, USA 2017",
		galeria10: "Grasshopper Campus. Mit präsident Erich Vogel",
		galeria11: "Zurich, Schweiz 2008",
        galeria12: "Technische Richtung zur ersten Liga",
		galeria13: "Leverkusen,  Deutschland 2001",
        galeria14: "International Tagung",
        galeria15: "Tagung, Sheraton Hotel ACG",
		galeria16: "Dallas, USA 2017",
        galeria17: "Programm zur Verhinderung von Drogenmissbrauch",
        galeria18: "PSV Campus mit Guus Hiddink",
		galeria19: "Eindhoven, Niederlande 2005",
		galeria20: "Barcelona, Spanien 2016",
        galeria21: "Meister für die Kinder",
        galeria22: "Mit dem präsidenten von PSV, Rob Westerkof",
        galeria23: "Eindhoven, Niederlande 2005",
        entrevistas1: "Interviews",
        entrevistas2: "Notizen in Zeitungs- und Journalistenrezensionen"
      },
      fr: {
        bh: "",
        bs: "",
        bt: "",
        bj: "",
        bi: "",
        be: "",
        home1: "",
        home2: "",
        home3: "",
        sobreMi1: "",
        sobreMi2: "",
        sobreMi3: "",
        sobreMi4: "",
        sobreMi5: "",
        sobreMi6: "",
        sobreMi7: "",
        sobreMi8: "",
        sobreMi9: "",
        sobreMi10: "",
        sobreMi11: "",
        sobreMi12: "",
        sobreMi13: "",
        trayectoria1: "",
        trayectoria2: "",
        trayectoria3: "",
        trayectoria4: "",
        trayectoria5: "",
        trayectoria6: "",
        trayectoria7: "",
        trayectoria8: "",
        trayectoria9: "",
        trayectoria10: "",
        trayectoria11: "",
        trayectoria12: "",
        trayectoria13: "",
        trayectoria14: "",
        trayectoria15: "",
        trayectoria16: "",
        jugador: "",
        galeria1: "",
        galeria2: "",
        galeria3: "",
        galeria4: "",
        galeria5: "",
        galeria6: "",
        galeria7: "",
        galeria8: "",
        galeria9: "",
        galeria10: "",
        galeria11: "",
        galeria12: "",
        galeria13: "",
        galeria14: "",
        galeria15: "",
        galeria16: "",
        galeria17: "",
        galeria18: "",
        galeria19: "",
        galeria20: "",
        galeria21: "",
        galeria22: "",
        galeria23: "",
        entrevistas1: "",
        entrevistas2: ""
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
        sobreMi1.textContent = lenguaje.en.sobreMi1;
        sobreMi2.textContent = lenguaje.en.sobreMi2;
        sobreMi3.textContent = lenguaje.en.sobreMi3;
        sobreMi4.textContent = lenguaje.en.sobreMi4;
        sobreMi5.textContent = lenguaje.en.sobreMi5;
        sobreMi6.textContent = lenguaje.en.sobreMi6;
        sobreMi7.textContent = lenguaje.en.sobreMi7;
        sobreMi8.textContent = lenguaje.en.sobreMi8;
        sobreMi9.textContent = lenguaje.en.sobreMi9;
        sobreMi10.textContent = lenguaje.en.sobreMi10;
        sobreMi11.textContent = lenguaje.en.sobreMi11;
        sobreMi12.textContent = lenguaje.en.sobreMi12;
        sobreMi13.textContent = lenguaje.en.sobreMi13;
        trayectoria1.textContent = lenguaje.en.trayectoria1;
        trayectoria2.textContent = lenguaje.en.trayectoria2;
        trayectoria3.textContent = lenguaje.en.trayectoria3;
        trayectoria4.textContent = lenguaje.en.trayectoria4;
        trayectoria5.textContent = lenguaje.en.trayectoria5;
        trayectoria6.textContent = lenguaje.en.trayectoria6;
        trayectoria7.textContent = lenguaje.en.trayectoria7;
        trayectoria8.textContent = lenguaje.en.trayectoria8;
        trayectoria9.textContent = lenguaje.en.trayectoria9;
        trayectoria10.textContent = lenguaje.en.trayectoria10;
        trayectoria11.textContent = lenguaje.en.trayectoria11;
        trayectoria12.textContent = lenguaje.en.trayectoria12;
        trayectoria13.textContent = lenguaje.en.trayectoria13;
        trayectoria14.textContent = lenguaje.en.trayectoria14;
        trayectoria15.textContent = lenguaje.en.trayectoria15;
        trayectoria16.textContent = lenguaje.en.trayectoria16;
        jugador.textContent = lenguaje.en.jugador;
        galeria1.textContent = lenguaje.en.galeria1;
        galeria2.textContent = lenguaje.en.galeria2;
        galeria3.textContent = lenguaje.en.galeria3;
        galeria4.textContent = lenguaje.en.galeria4;
        galeria5.textContent = lenguaje.en.galeria5;
        galeria6.textContent = lenguaje.en.galeria6;
        galeria7.textContent = lenguaje.en.galeria7;
        galeria8.textContent = lenguaje.en.galeria8;
        galeria9.textContent = lenguaje.en.galeria9;
        galeria10.textContent = lenguaje.en.galeria10;
        galeria11.textContent = lenguaje.en.galeria11;
        galeria12.textContent = lenguaje.en.galeria12;
        galeria13.textContent = lenguaje.en.galeria13;
        galeria14.textContent = lenguaje.en.galeria14;
        galeria15.textContent = lenguaje.en.galeria15;
        galeria16.textContent = lenguaje.en.galeria16;
        galeria17.textContent = lenguaje.en.galeria17;
        galeria18.textContent = lenguaje.en.galeria18;
        galeria19.textContent = lenguaje.en.galeria19;
        galeria20.textContent = lenguaje.en.galeria20;
        galeria21.textContent = lenguaje.en.galeria21;
        galeria22.textContent = lenguaje.en.galeria22;
        galeria23.textContent = lenguaje.en.galeria23;
        entrevistas1.textContent = lenguaje.en.entrevistas1;
        entrevistas2.textContent = lenguaje.en.entrevistas2;
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
        sobreMi1.textContent = lenguaje.de.sobreMi1;
        sobreMi2.textContent = lenguaje.de.sobreMi2;
        sobreMi3.textContent = lenguaje.de.sobreMi3;
        sobreMi4.textContent = lenguaje.de.sobreMi4;
        sobreMi5.textContent = lenguaje.de.sobreMi5;
        sobreMi6.textContent = lenguaje.de.sobreMi6;
        sobreMi7.textContent = lenguaje.de.sobreMi7;
        sobreMi8.textContent = lenguaje.de.sobreMi8;
        sobreMi9.textContent = lenguaje.de.sobreMi9;
        sobreMi10.textContent = lenguaje.de.sobreMi10;
        sobreMi11.textContent = lenguaje.de.sobreMi11;
        sobreMi12.textContent = lenguaje.de.sobreMi12;
        sobreMi13.textContent = lenguaje.de.sobreMi13;
        trayectoria1.textContent = lenguaje.de.trayectoria1;
        trayectoria2.textContent = lenguaje.de.trayectoria2;
        trayectoria3.textContent = lenguaje.de.trayectoria3;
        trayectoria4.textContent = lenguaje.de.trayectoria4;
        trayectoria5.textContent = lenguaje.de.trayectoria5;
        trayectoria6.textContent = lenguaje.de.trayectoria6;
        trayectoria7.textContent = lenguaje.de.trayectoria7;
        trayectoria8.textContent = lenguaje.de.trayectoria8;
        trayectoria9.textContent = lenguaje.de.trayectoria9;
        trayectoria10.textContent = lenguaje.de.trayectoria10;
        trayectoria11.textContent = lenguaje.de.trayectoria11;
        trayectoria12.textContent = lenguaje.de.trayectoria12;
        trayectoria13.textContent = lenguaje.de.trayectoria13;
        trayectoria14.textContent = lenguaje.de.trayectoria14;
        trayectoria15.textContent = lenguaje.de.trayectoria15;
        trayectoria16.textContent = lenguaje.de.trayectoria16;
        jugador.textContent = lenguaje.de.jugador;
        galeria1.textContent = lenguaje.de.galeria1;
        galeria2.textContent = lenguaje.de.galeria2;
        galeria3.textContent = lenguaje.de.galeria3;
        galeria4.textContent = lenguaje.de.galeria4;
        galeria5.textContent = lenguaje.de.galeria5;
        galeria6.textContent = lenguaje.de.galeria6;
        galeria7.textContent = lenguaje.de.galeria7;
        galeria8.textContent = lenguaje.de.galeria8;
        galeria9.textContent = lenguaje.de.galeria9;
        galeria10.textContent = lenguaje.de.galeria10;
        galeria11.textContent = lenguaje.de.galeria11;
        galeria12.textContent = lenguaje.de.galeria12;
        galeria13.textContent = lenguaje.de.galeria13;
        galeria14.textContent = lenguaje.de.galeria14;
        galeria15.textContent = lenguaje.de.galeria15;
        galeria16.textContent = lenguaje.de.galeria16;
        galeria17.textContent = lenguaje.de.galeria17;
        galeria18.textContent = lenguaje.de.galeria18;
        galeria19.textContent = lenguaje.de.galeria19;
        galeria20.textContent = lenguaje.de.galeria20;
        galeria21.textContent = lenguaje.de.galeria21;
        galeria22.textContent = lenguaje.de.galeria22;
        galeria23.textContent = lenguaje.de.galeria23;
        entrevistas1.textContent = lenguaje.de.entrevistas1;
        entrevistas2.textContent = lenguaje.de.entrevistas2;
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
        sobreMi1.textContent = lenguaje.fr.sobreMi1;
        sobreMi2.textContent = lenguaje.fr.sobreMi2;
        sobreMi3.textContent = lenguaje.fr.sobreMi3;
        sobreMi4.textContent = lenguaje.fr.sobreMi4;
        sobreMi5.textContent = lenguaje.fr.sobreMi5;
        sobreMi6.textContent = lenguaje.fr.sobreMi6;
        sobreMi7.textContent = lenguaje.fr.sobreMi7;
        sobreMi8.textContent = lenguaje.fr.sobreMi8;
        sobreMi9.textContent = lenguaje.fr.sobreMi9;
        sobreMi10.textContent = lenguaje.fr.sobreMi10;
        sobreMi11.textContent = lenguaje.fr.sobreMi11;
        sobreMi12.textContent = lenguaje.fr.sobreMi12;
        sobreMi13.textContent = lenguaje.fr.sobreMi13;
        trayectoria1.textContent = lenguaje.fr.trayectoria1;
        trayectoria2.textContent = lenguaje.fr.trayectoria2;
        trayectoria3.textContent = lenguaje.fr.trayectoria3;
        trayectoria4.textContent = lenguaje.fr.trayectoria4;
        trayectoria5.textContent = lenguaje.fr.trayectoria5;
        trayectoria6.textContent = lenguaje.fr.trayectoria6;
        trayectoria7.textContent = lenguaje.fr.trayectoria7;
        trayectoria8.textContent = lenguaje.fr.trayectoria8;
        trayectoria9.textContent = lenguaje.fr.trayectoria9;
        trayectoria10.textContent = lenguaje.fr.trayectoria10;
        trayectoria11.textContent = lenguaje.fr.trayectoria11;
        trayectoria12.textContent = lenguaje.fr.trayectoria12;
        trayectoria13.textContent = lenguaje.fr.trayectoria13;
        trayectoria14.textContent = lenguaje.fr.trayectoria14;
        trayectoria15.textContent = lenguaje.fr.trayectoria15;
        trayectoria16.textContent = lenguaje.fr.trayectoria16;
        jugador.textContent = lenguaje.fr.jugador;
        galeria1.textContent = lenguaje.fr.galeria1;
        galeria2.textContent = lenguaje.fr.galeria2;
        galeria3.textContent = lenguaje.fr.galeria3;
        galeria4.textContent = lenguaje.fr.galeria4;
        galeria5.textContent = lenguaje.fr.galeria5;
        galeria6.textContent = lenguaje.fr.galeria6;
        galeria7.textContent = lenguaje.fr.galeria7;
        galeria8.textContent = lenguaje.fr.galeria8;
        galeria9.textContent = lenguaje.fr.galeria9;
        galeria10.textContent = lenguaje.fr.galeria10;
        galeria11.textContent = lenguaje.fr.galeria11;
        galeria12.textContent = lenguaje.fr.galeria12;
        galeria13.textContent = lenguaje.fr.galeria13;
        galeria14.textContent = lenguaje.fr.galeria14;
        galeria15.textContent = lenguaje.fr.galeria15;
        galeria16.textContent = lenguaje.fr.galeria16;
        galeria17.textContent = lenguaje.fr.galeria17;
        galeria18.textContent = lenguaje.fr.galeria18;
        galeria19.textContent = lenguaje.fr.galeria19;
        galeria20.textContent = lenguaje.fr.galeria20;
        galeria21.textContent = lenguaje.fr.galeria21;
        galeria22.textContent = lenguaje.fr.galeria22;
        galeria23.textContent = lenguaje.fr.galeria23;
        entrevistas1.textContent = lenguaje.fr.entrevistas1;
        entrevistas2.textContent = lenguaje.fr.entrevistas2;
      }
    }

    for(let i=0; i<dataReload.length; i++){
        dataReload[i].onclick = function(){
            window.location.hash = dataReload[i].hash;
            window.location.reload(true);
        }
    }