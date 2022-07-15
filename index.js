let five= document.getElementById("5");
let one = document.getElementById("1");
let mul = document.getElementById("mul");
let add = document.getElementById("add");
let typex = document.getElementById("txtpge")

let btn = document.querySelectorAll('.btn');
let nums  = document.querySelectorAll('.num');

let y;
let z;
let text;

function symbol() {
    btn.forEach((g) => {
    let presebtn = g;
    presebtn.onclick = function(g) {
        typex.value = presebtn.textContent;
        text = presebtn.textContent;  
        num2();
        } 
})
}


function number1(val) {
    y = val;
    symbol();
}

function number2(val) {
   z  =  val;
}


function num2() {
    nums.forEach((number) => {
        let presentnum = number;
        presentnum.onclick = () => {
         let content2 = presentnum.textContent;
         typex.value = content2;
            number2(content2);
            equal();
        }
    });
}


let content1;

function num1() {

    nums.forEach((number) => {
    let presentnum = number;
    presentnum.onclick = () => {
     content1 = presentnum.textContent;
     typex.value = content1;
      number1(content1);
    }
});
}


function clear(){
    y = undefined;
    z = undefined;
    text = null; 
    num1();
}

function equal(){
console.log("x:" +y)
console.log("Y:"+z)
console.log("text:" +text);
let a = parseInt(y);
let b = parseInt(z);

if (text === "+") {

     typex.value= `SUM= ${a+b}`;
    console.log(`${a+b}`)

} else if (text === "*") {
    typex.value= `MUL= ${a*b}`;
    console.log(`${a*b}`)

}else if (text === "-") {
    typex.value= `MIN= ${a-b}`
    console.log((`${a-b}`))

}else if (text === "/") {
    typex.value= `DIV= ${a/b}`
    console.log(`${a/b}`);
    
}else if(text === "%") {
    typex.value= `PER= ${a%b}`
    console.log(`${a%b}`);
}

clear();
}

num1();




