let tituloComida, tituloBebida, tituloSobremesa;
let precoComida, precoBebida, precoSobremesa;
let sobremesa;


/*seleciona os pratos*/
function selecionarPrato(thisComida){
    /*busca pela classe no html*/
    const selecionar = document.querySelector(".marcaSecaoComida .selecionado");

    if(selecionar !== null) {
        /*remove a class*/
        selecionar.classList.remove("selecionado");
    }
    /*adiciona a classe*/
    thisComida.classList.add("selecionado");
    tituloComida = thisComida.querySelector(".titulo").innerHTML;
    precoComida = thisComida.querySelector(".preço").innerHTML;
    console.log(tituloComida);
    console.log(precoComida)

    ativarBotao();
}

/*seleciona as bebidas*/
function selecionarBebida(thisBebida){
    const selecionar = document.querySelector(".marcaSecaoBebida .selecionado");

    console.log(selecionar);

    if(selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    thisBebida.classList.add("selecionado");
    tituloBebida = thisBebida.querySelector(".titulo").innerHTML;
    precoBebida = thisBebida.querySelector(".preço").innerHTML;

    console.log(tituloBebida);
    console.log(precoBebida);
    ativarBotao();
}


/*seleciona as sobremesas*/
function selecionarSobremesa(thisSobremesa){
    const selecionar = document.querySelector(".marcaSecaoSobremesa .selecionado");

    console.log(selecionar);

    if(selecionar !== null) {
        selecionar.classList.remove("selecionado");
    }

    thisSobremesa.classList.add("selecionado");
    tituloSobremesa = thisSobremesa.querySelector(".titulo").innerHTML;
    precoSobremesa = thisSobremesa.querySelector(".preço").innerHTML;7
    console.log(tituloSobremesa);
    console.log(precoSobremesa);

    ativarBotao();
}

function ativarBotao() {

    if (tituloComida !== undefined && tituloBebida !== undefined && tituloSobremesa !== undefined) {
      const botao = document.querySelector("button");
      botao.innerText = "Fechar pedido";
      botao.removeAttribute('disabled')
      botao.style.backgroundColor = "#32b72f"; 
    }

  }


  function enviarPedidoWPP(){
    //substitue os R$ e "," pelos valores
    precoComida = precoComida.replace ('R$ ', ('')).replace(',','.');
    precoBebida = precoBebida.replace ('R$ ', ('')).replace(',','.');
    precoSobremesa = precoSobremesa.replace('R$ ', '').replace(',','.');
     /*pedido*/
     const finalizarPedido = `Olá, gostaria de fazer o pedido:
     - Prato: ${tituloComida}
     - Bebida: ${tituloBebida}
     - Sobremesa: ${tituloSobremesa}
     Total: R$ ${(Number(precoComida) + Number(precoBebida) + Number(precoSobremesa)).toFixed(2).toString().replace('.', ',')} `;


    /*envia o pedido para o whatsapp*/
    const whatsappMesseger = `https://wa.me/5592993448935?text=`;
    const enviaPedido = whatsappMesseger + encodeURIComponent(finalizarPedido);
    document.location.href = enviaPedido;
    
  }

