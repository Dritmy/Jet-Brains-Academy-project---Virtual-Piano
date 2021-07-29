document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA") {
        let audioA = new Audio("A.mp3");
        audioA.play();
    } else if (event.code == "KeyS") {
            let audioS = new Audio("S.mp3");
            audioS.play();
        } else if (event.code == "KeyD") {
            let audioD = new Audio("D.mp3");
            audioD.play();
        } else if (event.code == "KeyF"){
            let audioF = new Audio("F.mp3");
            audioF.play();
        } else if (event.code == "KeyG") {
            let audioG = new Audio("G.mp3");
            audioG.play();
        } else if (event.code == "KeyH") {
            let audioH = new Audio("H.mp3");
            audioH.play();
        } else if (event.code == "KeyJ") {
            let audioJ = new Audio("J.mp3");
            audioJ.play();
        } else if (event.code == "KeyW") {
            let audioW = new Audio("W.mp3");
            audioW.play();
        } else if (event.code == "KeyE"){
            let audioE = new Audio("E.mp3");
            audioE.play();
        } else if (event.code == "KeyT") {
         let audioT = new Audio("T.mp3");
            audioT.play();
        } else if (event.code == "KeyY") {
            let audioY = new Audio("Y.mp3");
            audioY.play();
        } else if (event.code == "KeyU") {
            let audioU = new Audio("U.mp3");
            audioU.play();
        } else {
            console.warn("Key not found");
        }
});
