let display="";
let totalNum=0;


let btn1 = document.getElementById("1")
btn1.addEventListener("click", click1);

function click1(){
    console.log("1")
    let num = "1";

    display += num;
    if(display.length<=11){
        totalNum +=parseInt(num)
        updateDisplay(num);
        console.log(totalNum);

    }
    
}
function updateDisplay(display){
    let displayValue = document.getElementById("typed");
    
        displayValue.innerHTML+=display;

    
}