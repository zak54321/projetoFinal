document.addEventListener('DOMContentLoaded', function () {
    const produtosLista = document.getElementById('produtosLista');
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    function renderizarProdutos() {
        produtosLista.innerHTML = '';

        if (produtos.length === 0) {
            produtosLista.innerHTML = '<p> Cadastre alguma coisa, Burrão.</p>';
            return;
        }

        produtos.forEach((produto, index) => {
            const div = document.createElement('div');
            div.classList.add('produto-item');
            div.innerHTML = `
                <strong>Nome do Produto: </strong> ${produto.nome} <br>
                <strong>Quantidade: </strong> ${produto.quantidade} <br>
                <strong>Preço:</strong> R$ ${produto.preco.toFixed(2)} <br>   
                <button class="remover-btn" data-index="${index}"> Remover </button>
            `;
            produtosLista.appendChild(div);
        });

        
        const removerBtns = 
        document.querySelectorAll('.remover-btn');
        removerBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const index = btn.getAttribute('data-index');
                removerProduto(index);
            });
        });
    }

    function removerProduto(index) {
        produtos.splice(index, 1);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        renderizarProdutos(); 
    }

    renderizarProdutos();
});
