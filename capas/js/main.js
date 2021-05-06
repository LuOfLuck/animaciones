var bloques = document.querySelectorAll("body > div");
bloques.forEach(function(bloque, index) {
    console.log(`${index} : ${bloque}`);

    botonSubir = document.querySelector(`.${bloque.classList.value} > .subir `);
    botonSubir.addEventListener("click", ()=>{
        bloque.style = " transform: translateY(-100%);"
    })

    subCapas = document.querySelectorAll(`.${bloque.classList.value} > .sub-capa `);
    subCapas.forEach((subCapa, value)=>{
        subCapa.addEventListener("click", ()=>{
            console.log(subCapa.classList.value);
            subCapa.style = `
                transform: translateY(-100px);
            `;
        })
    })
});