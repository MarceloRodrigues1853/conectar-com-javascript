// Método simples para adicionar um título ao site
const titulo = document.getElementById('titulo');
titulo.innerText = 'Título do Site';
console.log(titulo.innerText);

// Método complexo para adicionar um produto à venda
const produto = document.createElement('div');
produto.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Nome do Produto';
console.log(nomeProduto.innerText);

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Descrição do Produto';
console.log(descricaoProduto.innerText);

const precoProduto = document.createElement('p');
precoProduto.innerText = 'R$ 100,00';
console.log(precoProduto.innerText);

// adicionar uma imagem
const imagemProduto = document.createElement('img');
imagemProduto.src = 'imag.png';
imagemProduto.alt = 'Imagem do Produto';

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);

// Adicionando o produto à página
document.body.appendChild(produto);