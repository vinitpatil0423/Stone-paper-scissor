let yourscore=0;
let compscore=0;

let rpschoice=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let yourscorepara=document.querySelector("#yourscore");
let compscorepara=document.querySelector("#compscore");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randix=Math.floor(Math.random()*3);
    return options[randix];
}

const gamedraw=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw, Play Ggain..";
    msg.style.backgroundColor="black";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        yourscore++;
        yourscorepara.innerText=yourscore;
        msg.innerText=`You Win!! Your ${userchoice} Beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lose.. ${compchoice} Beats Your ${userchoice}`;;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    console.log("userchoice is",userchoice);
    const compchoice=gencompchoice();
    console.log("compchoice is",compchoice);

    if(userchoice===compchoice){
        gamedraw();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
        
    }
};

rpschoice.forEach((choice)=>{
    choice.addEventListener( "click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})

