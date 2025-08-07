const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras. addEventListener('click', mostrapalavrasChave);

function mostrapalavrasChave(){
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');

    campoResultado.textContent = texto;
}