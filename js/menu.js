window.onload=check;
function check() {
    document.getElementById("todos").checked = true;
}

var tds = document.querySelectorAll('#produtos h5[data-tipo]');
document.querySelector('.btn-group').addEventListener('click', function(e) {
    var tipo = e.target.id;

    if(tipo != 'container-filtros'){
        for (var i = 0; i < tds.length; i++) {
        
            var tr = tds[i].closest('.col-md-4');
    
            if(tipo != 'todos'){        
                
                tr.style.display = tipo == tds[i].dataset.tipo || !tipo ? '' : 'none';
            }else{
                tr.style.display = '';
            }
        }
    }
});

document.querySelectorAll('.card').forEach(card =>{
    card.addEventListener('click', function(event) {
        const img = event.target.closest('.card').querySelector('img');
        const nome = event.target.closest('.card').querySelector('h5');
        const preco = event.target.closest('.card').querySelector('.preco');

        document.querySelector('.products-preview').style.display = 'block';
        document.querySelector('.preview img').src = img.getAttribute('src');
        document.querySelector('.preview h3').textContent = nome.textContent;
        document.querySelector('.preview .preco').textContent = preco.textContent;
    });
})

document.querySelector('.preview span').onclick =  () =>{
    document.querySelector('.products-preview').style.display = 'none';
}

function adicionarItem() {
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
    div2.innerHTML = 
    `
        <span>${nome}</span>
        <div class="quantity-container">
            <p class="label">QUANTIDADE</p>
            <div class="number-input">
                <button type="button" onclick="this.parentNode.querySelector('input[type=number]').stepDown()"></button>
                <input class="quantity" min="0" name="quantity" value="${qtd}" type="number">
                <button type="button" onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
            </div>
        </div>
        <span>R$${valor.toFixed(2).replace(".",",")}</span>
    `
    ;

    div1.appendChild(div2);

    qtd_total_el.textContent = `${nova_qtd_total}`;
    preco_total_el.textContent = `R$${novo_preco_total.toFixed(2).replace(".",",")}`;
}