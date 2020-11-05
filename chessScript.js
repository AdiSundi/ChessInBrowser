//JavaScript - Chess in browser
//Aditya Sundaresan, 2020
let lastmove = "";
let last2move = "";
let GameState = "";
let playerturnchange = False;
function timer(totalTimeinSecs) 
{
    let t = totalTimeinSecs;
    while (t > 0) 
    {
        setInterval(checkMove(), 1);
        if (playerturnchange === False) 
        {
            t--;
        } else 
        {
            break
        }
    }
    if(t===0)
    {
        GameState = "EndByTimeout"
    }
    let minutes = Math.floor(t / 60);
    let secs = t % 60;
    return t;
}

function checkMove()
{
    if (lastmove===last2move) {
        playerturnchange = True;
    } else {
        playerturnchange  = False;
    }
}

