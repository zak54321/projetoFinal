document.addEventListener('DOMContentLoaded', function () {
    const produtosLista = document.getElementById('produtosLista');
    const formEdicao = document.getElementById('formEdicao');
    const inputNome = document.getElementById('inputNome');
    const inputQuantidade = document.getElementById('inputQuantidade');
    const inputPreco = document.getElementById('inputPreco');
    const btnSalvarEdicao = document.getElementById('btnSalvarEdicao');

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    let produtoEditando = null;

    function renderizarProdutos() {
        produtosLista.innerHTML = ''; 

        if (produtos.length === 0) {
            produtosLista.innerHTML = '<p>Não há produtos cadastrados.</p>';
            return;
        }

        produtos.forEach((produto, index) => {
            const div = document.createElement('div');
            div.classList.add('produto-item');
            div.innerHTML = `
                <strong>Nome do Produto:</strong> ${produto.nome} <br>
                <strong>Quantidade:</strong> ${produto.quantidade} <br>
                <strong>Preço:</strong> R$ ${produto.preco.toFixed(2)} <br>
                <button class="alterar-btn" data-index="${index}">Alterar</button>
            `;
            produtosLista.appendChild(div);
        });

        const alterarBtns = document.querySelectorAll('.alterar-btn');
        alterarBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const index = btn.getAttribute('data-index');
                editarProduto(index);
            });
        });
    }

    function editarProduto(index) {
        produtoEditando = produtos[index];
        inputNome.value = produtoEditando.nome;
        inputQuantidade.value = produtoEditando.quantidade;
        inputPreco.value = produtoEditando.preco.toFixed(2);

        formEdicao.style.display = 'block'; 
    }

    btnSalvarEdicao.addEventListener('click', function (e) {
        e.preventDefault();

        if (!produtoEditando) return;

        produtoEditando.nome = inputNome.value;
        produtoEditando.quantidade = parseInt(inputQuantidade.value);
        produtoEditando.preco = parseFloat(inputPreco.value);

        localStorage.setItem('produtos', JSON.stringify(produtos));
        renderizarProdutos();

        formEdicao.style.display = 'none'; 
    });

    renderizarProdutos();
});
