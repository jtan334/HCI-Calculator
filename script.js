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

function click0(){
    console.log("0")
    let num = "0";

    display += num;
    
        totalNum +=parseInt(num)
        updateDisplay(num);
        console.log(totalNum);
}

function click1(){
    console.log("1")
    let num = "1";

    display += num;
    
        totalNum +=parseInt(num)
        updateDisplay(num);
        console.log(totalNum);

    
    
}

function click2(){
    console.log("2")
    let num = "2";

    display += num;
    
        totalNum +=parseInt(num)
        updateDisplay(num);
        console.log(totalNum);
 
}

function updateDisplay(display){
    let displayValue = document.getElementById("typed");
    
        displayValue.innerHTML+=display;

    
}