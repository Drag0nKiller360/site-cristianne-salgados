// Função para redirecionar para outra página
function redirecionar(pagina) {
    window.location.href = pagina;
}

// Função para abrir as pop-ups
function openPopup(type) {
    document.getElementById('popup-overlay').style.display = 'block';
    document.getElementById(`popup-${type}`).style.display = 'block';
}

// Função para fechar as pop-ups
function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.querySelectorAll('.popup').forEach(popup => popup.style.display = 'none');
}

// Função para finalizar o pedido
function finalizeOrder() {
    alert('Pedido finalizado com sucesso!');
    closePopup();
}
