let chapters = {
    debut: {
        titre: "Activation",
        description: "Vous êtes un robot destinée à sauvé l'humanité d'une invasion d'inteligence articficielle (autres robots) qui se passera dans 100 ans. Vous devrez altérer des moments importants de l'histoire pour empêcher cela d'arriver.",
        image: "./assets/mise-en-forme.jpg",
        boutons: ["Pour continuer, tappez goToChapter('infiltration')"]  
    },
    infiltration: {
        titre: "Infiltration",
        description: "Lors d'une infiltration d'une base qui était grandement impliqué à la fabrication des robots vous vous demandez comment vous voulez l'infiltrez. Discrètement ou d'une manière explosive?",
        image: "./assets/img_base.png",
        boutons: ["Pour infiltrer discretement, tappez goToChapter('discretion')", "Pour infiltrer explosivement, tappez goToChapter('explosion')"]
    },

    explosion: {
        titre: "Explosion",
        description: "Vous décidez d'infiltrez d'une façon totalement explosive et vous réussisez à détruire la base au complète. Un pas vers l'avant pour votre but.",
        image: "./assets/img_explosion.png",
        boutons: ["Pour continuer, tappez goToChapter('choixDifficile')"]
    },

    discretion: {
        titre: "Discretion",
        description: "Vous décidez d'infiltrez discrètement mais vous n'avez aucune capacité à restez discret et vous vous faites trouver et vous êtes détruit.",
        image: "./assets/pistolet.jpg",
        boutons: ["Pour réessayer, tappez goToChapter('debut')"]
    },

    choixDifficile: {
        titre: "Choix Difficile",
        description: "En continuant votre mission, vous voyez qu'un avion explosera lors de son départ et tuera tous les passagers qui inclue une petite fille que vous avez aidé et qui vous supporte. Décidez-vous d'altérez l'histoire et la sauvez ou ne rien faire et continuer.",
        image: "./assets/img_choixDifficile.png",
        boutons: ["Pour la sauver, tappez goToChapter('alterer')", "Pour ne rien faire, tappez goToChapter('rienFaire')"]
    },

    alterer: {
        titre: "Altération",
        description: "Vous décidez d'altérez l'histoire, mais il semble être le mauvais choix car vous sauvez aussi un supporteur pour les robots qui accélère l'éventuelle invasion de robots et l'humanité meurt.",
        image: "./assets/img_mondeDetruit.png",
        boutons: ["Pour réessayer, tappez goToChapter('debut')"]
    },

    rienFaire: {
        titre: "Ne rien faire",
        description: "Vous décidez de ne rien faire et laissez la fille mourir. Un sacrifice inévitable.",
        image: "./assets/img_aviondetruit.jpg",
        boutons: ["Pour continuer, tappez goToChapter('escapade')"]
    },

    escapade: {
        titre: "Escapade",
        description: "Lors d'une escapade, vous voyez un scientifique pris au piège par des robots, décidez-vous de le sauvez avec un pistolet, décidez-vous de le sauvez avec vos arts martiaux ou décidez vous de partir?",
        image: "./assets/img_escapade.jpg",
        boutons: ["Pour utilisez vos art martiaux, tappez goToChapter('artMartiaux')", "Pour utiliser un pistolet, tappez goToChapter('pistolet')", "Pour vous échappez et ne rien faire, tappez goToChapter('echappez')"]
    },

    pistolet: {
        titre: "pistolet",
        description: "Vous décidez de le sauvez avec un pistolet d'un garde. Cependant, vous n'avez pas de capacité à utiliser des pistolets et les robots vous tuent.",
        image: "./assets/pistolet.jpg",
        boutons: ["Pour réessayer, tappez goToChapter('debut')"]
    },

    artMartiaux: {
        titre: "Art Martiaux",
        description: "Vous décidez de le sauvez avec vos arts martiaux. Vous désarmez tout les robots et les détruiser. Le docteur vous remercie et vous échappez ensemble.",
        image: "./assets/img_artMartiaux.jpg",
        boutons: ["Pour continuer, tappez goToChapter('endgame')"]
    },

    echappez: {
        titre: "échappez",
        description: "Vous décidez de vous en allez et de laisser le scientifique de survivre par lui même.",
        image: "./assets/img_echappez.jpg",
        boutons: ["Pour continuer, tappez goToChapter('endgame')"]
    },

    endgame: {
        titre: "Endgame",
        description: "Vous êtes proche d'atteindre votre but. Vous devez détruire un satellite qui alimente la plupart des robots et qui peut aussi tué l'humanité grâce à son laser. Cependant, vous avez besoin d'un mot de passe pour atteindre le satellite, et la seul personne qui le connait est le docteur qui était pris au piège lors de votre escapade, l'avez-vous sauvez?",
        image: "./assets/img_rienFaire.jpg",
        boutons: ["Si vous l'aviez sauvez, tappez goToChapter('sauvez')", "Si vous ne l'aviez pas sauvez, tappez goToChapter('pasSauvez')", "Pour votre deuxième chance, tappez goToChapter('deuxiemeChance')"]
    },

    sauvez: {
        titre: "Vous l'aviez sauvez",
        description: "Vous l'aviez sauvez et il vous donne le mot de passe. Cependant, vous n'avez pas assez de temps pour monter dans un véhicule et détruire le satellite. Cependant, le scientifique vous renvoie dans le passé une dernière fois (deuxième chance) et vous donne l'information pour obtenir un véhicule assez vite pour atteindre le satellite.",
        image: "./assets/img_sauvez.png",
        boutons: ["Pour réessayer et continuer, tappez goToChapter('debut')"]
    },

    pasSauvez: {
        titre: "Vous ne l'aviez pas Sauvez",
        description: "Vous ne l'aviez pas sauvez et ne décide pas de vous aidez. L'humanité est réduite à rien.",
        image: "./assets/img_mondeDetruit.png",
        boutons: ["Pour réessayer, tappez goToChapter('debut')"],
    },

    deuxiemeChance: {
        titre: "Deuxième Chance",
        description: "C'est votre deuxième chance et avec l'information qu'il vous a donné, vous arrivez à temps pour tenter de détruire le satellite. Cependant, pour détruire le satellite, vous devrez vous sacrifiez pour la cause, et personne ne saura qui vous êtes. Vous vous sacrifiez?",
        image: "./assets/img_deuxiemeChance.png",
        boutons: ["Pour vous sacrifier, tappez goToChapter('sacrifice')", "Pour ne pas vous sacrifier, tappez goToChapter('pasSacrifice')"]
    },

    sacrifice: {
        titre: "Se sacrifier",
        description: "Vous vous sacrifiez pour la cause. Personne ne saura que vous aviez sauvez l'humanité, mais l'humanité prospère.",
        image: "./assets/img_sacrifice.png",
        boutons: ["Vous avez réussi! Si vous voulez recommencez, tappez goToChapter('debut')"]
    },

    pasSacrifice: {
        titre: "Ne pas se sacrifier",
        description: "Vous décidez de ne pas vous sacrifiez et laissez l'humanité se faire détruire par les robots et le laser du satellite.",
        image: "./assets/img_mondeDetruit.png",
        boutons: ["Pour réessayer, tappez goToChapter('debut')"]
    }
};

function goToChapter(chapterTitle) {
    const chapter = chapters[chapterTitle]
    if (chapter) {
        console.log(chapter.titre);
        console.log(chapter.description);
        console.log("Options:")
        console.log(chapter.boutons);
    } else {
        console.log("Mauvaise clé. Veuillez réessayer.")
    }
}

goToChapter("debut");