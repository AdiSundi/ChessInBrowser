//JavaScript - Chess in browser
//Aditya Sundaresan, 2020

function timer(totalTimeinSecs) {
    let t = totalTimeinSecs;
    let lastmove = "";
    let last2move = "";
    let playerturnchange = False;
    while (t > 0) {
        setInterval(checkMove(), 1);
        if (playerturnchange === False) {

        }
    }

    let minutes = Math.floor(t / 60);
    let secs = t % 60;
    return t;
}