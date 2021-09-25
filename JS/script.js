
const botao = document.querySelector("#botao1"); 
const nome = document.querySelector("#nomed");
const humor = document.querySelector("#statusd");
const imagem = document.querySelector("#imagem1");

window.onload = function() {

};

botao.addEventListener("click", function () { 

    if (nome.innerText == "Nome: Robert Downey Jr") {

        nome.innerText = "Nome: Robert";

        humor.innerText = "Status: Sério 😠";

        imagem.src="media/imagem/Sério.jpg";

    } else if (nome.innerText == "Nome: Robert") {

        nome.innerText = "Nome: Iron man";

        humor.innerText = "Status: Puto 🤬";

        imagem.src="media/imagem/bravo.jpg";
    } else if (nome.innerText == "Nome: Iron man") {

        nome.innerText = "Nome: Robert Downey Jr";

        humor.innerText = "Status: Normal 😎";

        imagem.src="media/imagem/Normal feliz.jpg";
    }
});

