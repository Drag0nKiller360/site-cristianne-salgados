//Função pra deixar um método de pagamento já marcado
window.onload = check;
function check() {
    document.getElementById("dinheiro").checked = true;
}

// Função para redirecionar para outra página
function redirecionar(pagina) {
    window.location.href = pagina;
}

// Função para abrir as pop-ups
function openPopup(type) {
    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary";
    document.querySelector(`.${type}-background`).style.display = 'block';
}

//Função para exibir a pop-up correta
function exibirPopUpPagamento() {
    if(document.getElementById("dinheiro").checked){
        openPopup('dinheiro');
    }else if(document.getElementById("cartao").checked){
        openPopup('cartao');
    }else if(document.getElementById("pix").checked){
        openPopup('pix');
    }
}

// Função para fechar as pop-ups
function closePopup(type) {
    document.querySelector(`.${type}-background`).style.display = 'none';
    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary fixed-top";
}

// Função para finalizar o pedido
function finalizarPedido(type) {
    document.querySelector(`.agradecimento-background`).style.display = 'block';
    document.querySelector(`.${type}-background`).style.display = 'none';
    
    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary";
}
