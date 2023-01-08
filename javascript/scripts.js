
/*seleciona os pratos*/
function selecionarPrato(thisComida){
    /*busca pela classe no html*/
    const selecionar = document.querySelector(".marcaSecaoComida .selecionado");

    console.log(selecionar);

    if(selecionar !== null) {
        /*remove a class*/
        selecionar.classList.remove("selecionado");
    }
    /*adiciona a classe*/
    thisComida.classList.add("selecionado");
}

/*seleciona as bebidas*/
function selecionarBebida(thisBebida){
    const selecionar = document.querySelector(".marcaSecaoBebida .selecionado");

    console.log(selecionar);

    if(selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    thisBebida.classList.add("selecionado");
}


/*seleciona as sobremesas*/
function selecionarSobremesa(thisSobremesa){
    const selecionar = document.querySelector(".marcaSecaoSobremesa .selecionado");

    console.log(selecionar);

    if(selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    thisSobremesa.classList.add("selecionado");
}