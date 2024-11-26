//Função pra deixar um método de pagamento já marcado
window.onload = check;
function check() {
    document.getElementById("todos").checked = true;
}

var tds = document.querySelectorAll('#produtos h5[data-tipo]');
document.querySelector('.btn-group').addEventListener('click', function (e) {
    var tipo = e.target.id;

    if (tipo != 'container-filtros' && tipo != 'btn-revisar' && tipo != 'btn-remover') {
        for (var i = 0; i < tds.length; i++) {

            var tr = tds[i].closest('.col-md-4');

            if (tipo != 'todos') {
                tr.style.display = tipo == tds[i].dataset.tipo || !tipo ? '' : 'none';
            } else {
                tr.style.display = '';
            }
        }
    }
});


//Função pra editar card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function (event) {
        const img = event.target.closest('.card').querySelector('img');
        const nome = event.target.closest('.card').querySelector('h5');
        const preco = event.target.closest('.card').querySelector('.preco');

        document.querySelector('.produto-editar-background').style.display = 'block';
        document.querySelector('.produto-editar img').src = img.getAttribute('src');
        document.querySelector('.produto-editar .nome-item').value = nome.textContent;
        document.querySelector('.produto-editar .preco-item').value = preco.textContent;

        const cabecalho = document.getElementById("cabecalho");
        cabecalho.className = "navbar bg-body-tertiary";

    });
})

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