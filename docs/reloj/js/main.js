var clock = document.getElementById("clock");
var mover = document.getElementById("mover");
var letras;
for(var i = 10; i >= 0; i--){
    clock.innerHTML += `<div id="num-${i}" class="num"> <div> ${i} </div> </div>`;
}
 
var nums = document.querySelectorAll(".num");
top = 0;
contador = 0;
var ultima = parseInt(nums.length) - 1;
const intervalo = setInterval(() =>{
    if (contador < nums.length){
        top +=  100;
        nums.forEach( (num)=> {
            num.style = `
            transform: translateX(-${contador*200}px);`;
        });
        contador += 1;
    }
    else{
        clearInterval(intervalo);
    }

}, 1000);

