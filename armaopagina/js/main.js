header = document.getElementById("header");
textHeader = document.getElementById("text-header");
bloque1= document.getElementById("bloque-1");
bloque1text= document.getElementById("bloque-1-text");
bloque2= document.getElementById("bloque-2");
bloque2text= document.getElementById("bloque-2-text");
bloque3= document.getElementById("bloque-3");
bloque3text= document.getElementById("bloque-3-text");
bloquesExtras= document.getElementById("bloques-extras");

function pestañaCargada(){
    alert("pagina cargada");
    let tiempo = 0; 
    setInterval(()=>{  header.classList.add("aparecer-arriba"); }, tiempo);
    tiempo += 300;
    setInterval(()=>{ textHeader.classList.add("aparecer-arriba"); }, tiempo);
    tiempo += 500;
    setInterval(()=>{ bloque1.classList.add("aparecer-izquierda"); }, tiempo);
    tiempo += 300;
    setInterval(()=>{ bloque1text.classList.add("aparecer-izquierda"); }, tiempo);
    tiempo += 500;
    setInterval(()=>{ bloque2.classList.add("aparecer-derecha"); }, tiempo);
    tiempo += 300;
    setInterval(()=>{ bloque2text.classList.add("aparecer-derecha"); }, tiempo);
    tiempo += 500;
    setInterval(()=>{ bloque3.classList.add("aparecer-abajo");  }, tiempo);
    tiempo += 300;
    setInterval(()=>{ bloque3text.classList.add("aparecer-abajo");  }, tiempo);
}

function numeroRamdom(min, max){
    return Math.random() * (max - min) + min;
}

function cambiarColor(elemento){
    let rojo = numeroRamdom(0,255);
    let verde = numeroRamdom(0,255);
    let amarillo = numeroRamdom(0,255);
    estilo = `
        background-color: rgb(${rojo},${verde},${amarillo});
    `;
    elemento.style = estilo;
}

window.addEventListener('scroll', ()=>{

    
    let main = document.querySelectorAll('.bloque-extra');
    for (let i = 0; i < main.length; i++){
        let heightPantalla = window.innerHeight;
        let mainTop = main[i].getBoundingClientRect().top;
        let mostrar = 150;
        if(mainTop < heightPantalla - mostrar){
            main[i].classList.add('active');
            cambiarColor(main[i]);
        }else{
            main[i].classList.remove('active');
        }
    }

    let principal = document.querySelectorAll('.principal');
    for (let i = 0; i < principal.length; i++){
        cambiarColor(principal[i]);
    }

    let bloqueDentro = document.querySelectorAll('.bloque-dentro');
    for (let i = 0; i < bloqueDentro.length; i++){
        let heightPantalla = window.innerHeight;
        let bloqueDentroTop = bloqueDentro[i].getBoundingClientRect().top;
        let mostrar = 150;
        if(bloqueDentroTop < heightPantalla - mostrar){
            bloqueDentro[i].classList.add('active');
        }else{
            bloqueDentro[i].classList.remove('active');
        }
    }
   
});

