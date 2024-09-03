let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msg=document.querySelector(".msg");
let win=document.querySelector(".win");
let newb =document.querySelector(".new-btn");

let turnO=true;
 
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
}

const disableBoxes=() =>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}

const enableBoxes=() =>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}


boxes.forEach((box) => {
    box.addEventListener('click',() =>
    {
        console.log("Box clicked");
        if(turnO)
            {
                box.innerHTML="O";
                turnO=false;
            }
            else{
                box.innerHTML="X";
                turnO=true;
            }
            box.disabled=true;
            checkWinner();

    });
    const showWinner=(winner)=>{
        win.innerText=`Congratulations , winner is ${winner}`;
        msg.classList.remove("hide");
        disableBoxes();
    }

    const checkWinner = () =>{
        for(pattern of winPattern){
            let pos1V=boxes[pattern[0]].innerText;
            let pos2V=boxes[pattern[1]].innerText;
            let pos3V=boxes[pattern[2]].innerText;
        
        if(pos1V !="" && pos2V !="" && pos3V !=""){
            if(pos1V===pos2V && pos2V===pos3V){
                console.log("Winner", pos1V);
                showWinner(pos1V);
            }
         }
        }

    }
    
});
reset.addEventListener('click',resetGame);
newb.addEventListener('click',resetGame);