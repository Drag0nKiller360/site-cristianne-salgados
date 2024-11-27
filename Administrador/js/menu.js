//Função pra deixar um método de pagamento já marcado
window.onload = check;
function check() {
    document.getElementById("todos").checked = true;
    editarCard();
    ativarFiltro();
    
    var tds = document.querySelectorAll('#produtos h5[data-tipo]');
    for (var i = 0; i < tds.length; i++) {
        var tr = tds[i].closest('.col-md-4');
        tr.style.display = '';
    }

    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary fixed-top";
}

//Função pra ativar Filtro
function ativarFiltro(){
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
}

//Função pra editar card
function editarCard() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function (event) {
            const img = event.target.closest('.card').querySelector('img');
            const nome = event.target.closest('.card').querySelector('h5');
            const preco = event.target.closest('.card').querySelector('.preco');
            var tipo_marcado = event.target.closest('.card').querySelector('#produtos h5[data-tipo]');
    
            document.querySelector('.produto-editar-background').style.display = 'block';
            document.querySelector('.produto-editar img').src = img.getAttribute('src');
            document.querySelector('.produto-editar .nome-item').value = nome.textContent;
            document.querySelector('.produto-editar .preco-item').value = preco.textContent;        
            document.querySelector(`.produto-editar .${tipo_marcado.dataset.tipo}`).checked = true;
    
            const nome_original = document.querySelector(".nome_original");
            nome_original.textContent = nome.textContent;
    
            const cabecalho = document.getElementById("cabecalho");
            cabecalho.className = "navbar bg-body-tertiary";
    
        });
    })
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

function adicionarNovoProduto() {
    document.querySelector('.produto-adicionar-background').style.display = 'none';
    const div1 = document.getElementById("cardapio");
    const div2 = document.createElement("div");
    div2.className = "col-md-4";

    let nome = document.getElementById("nome_produto").value;
    let preco = document.getElementById("preco_produto").value;

    const radios = document.querySelectorAll('input[name="opcao2"]');
    let valorSelecionado;
    
    for (const radio of radios) {
      if (radio.checked) {
        valorSelecionado = radio.value;
        break;
      }
    }

    const imagemProduto = document.getElementById("imagem_produto").files[0];
    
    // Verificar se o usuário escolheu um arquivo
    let imagemURL = "../imgs/salgados/sem-imagem.webp";  // Imagem padrão

    if (imagemProduto) {
        // Cria uma URL temporária para o arquivo da imagem
        imagemURL = URL.createObjectURL(imagemProduto);
    }

    div2.innerHTML =
        `
        <div class="card">
            <img src="${imagemURL}" class="card-img-top" alt="${nome}">
            <div class="card-body text-center">
                <h5 class="card-title" data-tipo="${valorSelecionado}">${nome}</h5>
                <h5 class="card-title"><span class="preco">R$ ${preco}</span></h5>
            </div>
        </div>
    `;

    div1.appendChild(div2);

    document.getElementById('nome_produto').value = '';
    document.getElementById('preco_produto').value = '';
    radios.forEach(radio => {
        radio.checked = false;
    });
    
    check();
}

function removerProduto() {
    // Pega o nome do produto digitado pelo usuário
    const produtoNome = document.getElementById('produto-remover').value.trim().toLowerCase();

    // Verifica se o campo de produto não está vazio
    if (produtoNome === '') {
        alert('Por favor, digite o nome do produto.');
        return;
    }

    // Encontra todos os elementos <h5> com a classe "card-title", que contêm o nome do produto
    const produtos = document.querySelectorAll('.card-title');

    let produtoRemovido = false;

    // Percorre todos os elementos de nome do produto
    produtos.forEach((produto) => {
        // Compara o nome do produto com o valor digitado no formulário
        if (produto.textContent.trim().toLowerCase() === produtoNome) {
            // Encontra o card pai do produto e o remove
            const card = produto.closest('.col-md-4');
            card.remove();
            produtoRemovido = true;
        }
    });

    // Se nenhum produto foi removido, exibe uma mensagem de erro
    if (!produtoRemovido) {
        alert('Produto não encontrado. Verifique o nome e tente novamente.');
    } else {
        alert('Produto removido com sucesso!');
    }

    // Limpa o campo de texto após a remoção
    document.getElementById('produto-remover').value = '';

    document.querySelector('.remover-item-background').style.display = 'none';

    const cabecalho = document.getElementById("cabecalho");
    cabecalho.className = "navbar bg-body-tertiary fixed-top";
}

function editarProduto(){
    const produtoNomeOriginal = document.querySelector('.produto-editar .nome_original').textContent;
    let novoNome = document.querySelector('.produto-editar .nome-item').value;
    let novoPreco = document.querySelector('.produto-editar .preco-item').value;

    const radios = document.querySelectorAll('input[name="opcao"]');
    let valorSelecionado;
    
    for (const radio of radios) {
      if (radio.checked) {
        valorSelecionado = radio.value;
        break;
      }
    }
    
    const imagemProduto = document.getElementById("nova_imagem").files[0];
    
    let imagemURL = document.querySelector('.produto-editar img').src;

    if (imagemProduto) {
        imagemURL = URL.createObjectURL(imagemProduto);
    }

    const produtos = document.querySelectorAll('.card-title');

    produtos.forEach((produto) => {
        if (produto.textContent === produtoNomeOriginal) {
            const card = produto.closest('.col-md-4');
            card.querySelector('h5').textContent = novoNome;
            card.querySelector('span').textContent = novoPreco;
            card.querySelector('h5').setAttribute('data-tipo', valorSelecionado);
            card.querySelector('.card img').src = imagemURL;
            card.querySelector('.card img').alt = novoNome;
        }
    });

    document.querySelector('.produto-editar-background').style.display = 'none';

    check();
}