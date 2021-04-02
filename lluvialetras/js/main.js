const texto = document.getElementById("texto");
const textNuevo = document.getElementById("text-nuevo");
const letras = texto.innerText.split("");
const main = document.querySelector("main")


function numeroRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function cambiarColor(elemento){
    let rojo = numeroRandom(0, 255);
    let verde = numeroRandom(0, 255);
    let amarillo = numeroRandom(0, 255);
    let x = numeroRandom(0,100);
    let y = numeroRandom(0,100);
    elemento.style = `
        color: rgb(${rojo}, ${verde}, ${amarillo});
        position: absolute;
        top: ${x}%;
        left: ${y}%;
    `;
}

function mostrarLetras(letra){
    letra = document.getElementById(letra);
    letra.addEventListener("click", ()=>{
        contador2=0;
        const intervalo2 = setInterval(() =>{
            if (contador2 < 109){
                console.log(letra);
                main.innerHTML += `
                    <div id="lluvia-${contador2}" class="lluvia"> ${letra.id} </div>
                `;
                lluvia = document.getElementById("lluvia-"+contador2);
                cambiarColor(lluvia);
                lluvia.classList.add('efecto-lluvia');
                contador2 += 1;
            }
            else{
                clearInterval(intervalo2);
            }
        });
    });
}

contador = 0;
const intervalo = setInterval(() =>{
    
    if (contador < texto.innerHTML.length){
        textNuevo.innerHTML += `
        <div id="${letras[contador]}" class="animacion">
            <span> ${letras[contador]} </span>
        </div>
        ` ;
        mostrarLetras(letras[contador]);
        contador += 1;
        
    }
    else{
        for (var i = 0; i < contador; i++) {
            mostrarLetras(letras[i]);
        }

        clearInterval(intervalo);
    }

}, 500);


