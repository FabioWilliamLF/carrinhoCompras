let valorProdutos = [];
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$0';

function adicionar() {
    // Recuperar o valor do campo de texto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // Calcular o preço do produto
    let preco = quantidade * valorUnitario;
    valorProdutos.push(preco);
    // Adicionar o produto no carrinho
    if (quantidade === '') { 
        alert('Informe a quantidade do produto');
     }
    else {
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
            </section>`;
    }
    // Atualizar o total
    let total = document.getElementById('valor-total');
    total.innerHTML = `R$${valorProdutos.reduce((a, b) => a + b, 0)}`;
    // Limpar os campo de quantidade   
    document.getElementById('quantidade').value = '';
}

function limpar() {
    // Limpar o carrinho
    document.getElementById('lista-produtos').innerHTML = '';
    valorProdutos = [];
    // Atualizar o total
    document.getElementById('valor-total').innerHTML = 'R$0';
    // Limpar os campo de quantidade
    document.getElementById('quantidade').value = '';
}