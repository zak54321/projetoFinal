document.addEventListener('DOMContentLoaded', function () {
    const produtosLista = document.getElementById('produtosLista');
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    
    function renderizarProdutos() {
        produtosLista.innerHTML =''; 

        if (produtos.length === 0) {
            produtosLista.innerHTML = 
            '<p>Não há produtos cadastrados.</p>';
            return;
        }

        
        produtos.forEach(produto => {
            const div = document.createElement('div');
            div.classList.add('produto-item');
            div.innerHTML = `
                <strong>Nome do Produto:</strong> ${produto.nome} <br>
                <strong>Quantidade:</strong> ${produto.quantidade} <br>
                <strong>Preço:</strong> R$ ${produto.preco.toFixed(2)} <br>
            `;
            produtosLista.appendChild(div);
        });
    }

    
    renderizarProdutos();
});

