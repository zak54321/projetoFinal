document.addEventListener('DOMContentLoaded', function () {
    const produtoForm = 
    document.getElementById('produtoForm');
    let produtos = 
    JSON.parse(localStorage.getItem('produtos')) || [];

    produtoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        
        const nome = document.getElementById('produto').value;
        const quantidade = parseInt(document.getElementById('quantidade').value);
        const preco = parseFloat(document.getElementById('preco').value);


        if (!nome || quantidade <= 0 || preco <= 0) {
            alert('Preencha todos os campos corretamente!');
            return;
        }

        const produto = {
            nome,
            quantidade,
            preco
        };


        produtos.push(produto);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        produtoForm.reset();
      
    });
});