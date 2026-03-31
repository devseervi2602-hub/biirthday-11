let score = 0;

// 🎮 GAME
function addScore(){
    score++;
    document.getElementById("score").innerHTML = "Score: " + score;

    if(score === 26){
        showPopup();
    }
}

// 🎉 SHOW POPUP
function showPopup(){
    document.getElementById("popup").style.display="flex";
    launchConfetti();
    typeMessage();
}

// 🎊 CONFETTI
function launchConfetti(){
    for(let i=0;i<120;i++){
        let c = document.createElement("div");
        c.className="confetti";

        c.style.left=Math.random()*100+"vw";
        c.style.background=`hsl(${Math.random()*360},100%,50%)`;
        c.style.animationDuration=(Math.random()*2+2)+"s";

        document.body.appendChild(c);

        setTimeout(()=>{c.remove();},3000);
    }
}

// 💌 MESSAGE
const message = [
"BIRTHDAYYYYYYYY MONTH!!!!!!!! 💗💗 bandar bhaiiiii 🐒",
"A legend and fool *my fool born in this month 😎",
"It's your birthdayyy month but mine too a festival 😉🎀",
"Babajii bless youuu with happiness you deserve ✨",
"Be happy and healthy always 😌",
"From your annoying gurl 🎀💗"
];

let i=0,j=0;

function typeMessage(){
    if(i<message.length){
        if(j<message[i].length){
            document.getElementById("msg").innerHTML += message[i][j];
            j++;
            setTimeout(typeMessage,40);
        } else {
            document.getElementById("msg").innerHTML += "<br>";
            i++;
            j=0;
            setTimeout(typeMessage,500);
        }
    }
}

