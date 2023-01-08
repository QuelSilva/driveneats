function selecionarPrato(thisComida){
    const selecionar = document.querySelector(".marcaSecaoComida .selecionado");

    console.log(selecionar);

    if(selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    thisComida.classList.add("selecionado");
}