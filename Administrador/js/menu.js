window.onload = check;
function check() {
    document.getElementById("todos").checked = true;
}

var tds = document.querySelectorAll('#produtos h5[data-tipo]');
document.querySelector('.btn-group').addEventListener('click', function (e) {
    var tipo = e.target.id;

    if (tipo != 'container-filtros') {
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

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function (event) {
        const img = event.target.closest('.card').querySelector('img');
        const nome = event.target.closest('.card').querySelector('h5');
        const preco = event.target.closest('.card').querySelector('.preco');

        document.querySelector('.products-preview').style.display = 'block';
        document.querySelector('.preview img').src = img.getAttribute('src');
        document.querySelector('.preview h3').textContent = nome.textContent;
        document.querySelector('.preview .preco').textContent = preco.textContent;

        const cabecalho = document.getElementById("cabecalho");
        cabecalho.className = "navbar bg-body-tertiary";

    });
})

/*Fechar pop-ups*/
document.querySelector('.preview span').onclick =  () =>{
    document.querySelector('.products-preview').style.display = 'none';
    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary fixed-top";
}

document.querySelector('.login span').onclick =  () =>{
    document.querySelector('.login-background').style.display = 'none';
    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary fixed-top";
}

document.querySelector('.cadastro span').onclick =  () =>{
    document.querySelector('.cadastro-background').style.display = 'none';
    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary fixed-top";
}

document.querySelector('.remover span').onclick =  () =>{
    document.querySelector('.remover-background').style.display = 'none';
    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary fixed-top";
}
/*Fim fechar pop-ups*/

function exibirPopUpLogin() {
    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary";
    document.querySelector('.login-background').style.display = 'block';
}

function exibirPopUpCadastro() {
    const cabecalho = document.getElementById("cabecalho");
    document.querySelector('.login-background').style.display = 'none';
    document.querySelector('.cadastro-background').style.display = 'block';
}

function exibirPopUpRemover() {
    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary";

    document.querySelector('.remover-background').style.display = 'block';
}