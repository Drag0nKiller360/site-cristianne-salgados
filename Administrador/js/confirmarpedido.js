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

function alerta(type) {
    alert(`${type}`);
}