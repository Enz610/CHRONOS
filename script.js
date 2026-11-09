const button = document.querySelector("#adicionar-carrinho);

button.addEventListener("click", function(){
    alert("Produto adicionado ao carrinho") 
});

const produtos = {
    "CHRONOS Deep Sea": {
        nome: "CHRONOS Deep Sea",
        preco: 1899.90,
        descricao: "Design elegante e resistência à água, perfeito para aventuras.",
        imagem: "Imagem do ChatGPT 6 de nov. de 2026, 16_45_02.jpg"
    },

    "CHRONOS Shadow": {
        nome: "CHRONOS Shadow",
        preco: 2499.90,
        descricao: "Design moderno com funcionalidades avançadas.",
        imagem: "Imagem do ChatGPT 6 de nov. de 2026, 16_45_31.jpg"
    },

    "CHRONOS Ocean": {
        nome: "CHRONOS Ocean",
        preco: 2199.90,
        descricao: "Elegância, resistência e durabilidade.",
        imagem: "Imagem do ChatGPT 6 de nov. de 2026, 16_46_12.jpg"
    }
};

const parametros = new URLSearchParams(window.location.search);

const nome = parametros.get("produto");

const produto = produtos[nome];

if (produto) {
    document.getElementById("nome-produto").textContent = produto.nome;

    document.getElementById("descricao-produto").textContent = produto.descricao;

    document.getElementById("preco-produto").textContent =
        produto.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    document.getElementById("imagem-produto").src = produto.imagem;
}