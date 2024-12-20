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

function adicionarItem() {
    document.querySelector('.products-preview').style.display = 'none';

    const div1 = document.getElementById("itens_adicionados");
    const div2 = document.createElement("div");

    const qtd_total_el = document.getElementById("total_qtd");
    const qtd_total_txt = document.getElementById("total_qtd").textContent;
    const preco_total_el = document.getElementById("total_preco");
    const preco_total_txt = document.getElementById("total_preco").textContent;
    const preco_total_num = parseFloat(preco_total_txt.replace("R$", "").replace(",", "."));

    const nome = document.getElementById("nome_item").textContent;
    const qtd = document.getElementById("item_qtd").value;
    const preco_txt = document.getElementById("preco_item").textContent;
    const preco_num = parseFloat(preco_txt.replace("R$", "").replace(",", "."));

    const valor = Number(qtd) * preco_num;

    const nova_qtd_total = Number(qtd_total_txt) + Number(qtd);
    const novo_preco_total = valor + preco_total_num;

    div2.className = "order-item d-flex justify-content-between align-items-center mb-2";
    div2.style.padding = "5px";
    div2.innerHTML =
        `
        <span>${nome}</span>
        <span class="qtd_add">${qtd} unidade(s)</span>
        <span class="valor_add">R$${valor.toFixed(2).replace(".", ",")}</span>
        <button onclick="removerSalgado()" style="border: none;"><i class="fas fa-trash"></i></button>
    `;

    div1.appendChild(div2);

    qtd_total_el.textContent = `${nova_qtd_total}`;
    preco_total_el.textContent = `R$${novo_preco_total.toFixed(2).replace(".", ",")}`;

    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary fixed-top";
}

function removerSalgado() {
    const button = event.target;
    const div = button.closest('div');

    const qtd_total_el = document.getElementById("total_qtd");
    const qtd_total_txt = document.getElementById("total_qtd").textContent;
    const preco_total_el = document.getElementById("total_preco");
    const preco_total_txt = document.getElementById("total_preco").textContent;
    const preco_total_num = parseFloat(preco_total_txt.replace("R$", "").replace(",", "."));

    const valor_txt = div.querySelector(".valor_add").textContent;
    const valor_num = parseFloat(valor_txt.replace("R$", "").replace(",", "."));
    const qtd_txt = div.querySelector(".qtd_add").textContent;
    const qtd_num = parseFloat(qtd_txt.replace(" unidade(s)", ""));

    const novo_preco_total = preco_total_num - valor_num;
    preco_total_el.textContent = `R$${novo_preco_total.toFixed(2).replace(".", ",")}`;

    const nova_qtd_total = Number(qtd_total_txt) - qtd_num;
    qtd_total_el.textContent = `${nova_qtd_total}`;

    div.remove();
}

function removerTudo() {
    document.querySelector('.remover-background').style.display = 'none';
    const div = document.getElementById('itens_adicionados');
    const preco_total = document.getElementById("total_preco");
    const qtd_total = document.getElementById("total_qtd");

    preco_total.textContent = `R$0,00`;
    qtd_total.textContent = `0`;

    div.replaceChildren();
}