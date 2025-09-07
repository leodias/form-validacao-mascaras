// Pega os elementos do HTML pelo id
const form = document.getElementById("formulario");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const cpf = document.getElementById("cpf");

form.addEventListener("submit", e => {

    e.preventDefault(); // impede o envio automático do formulário

    if (nome.value.trim().length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (telefone.value.replace(/\D/g, "").length < 10) {
        alert("Digite um telefone válido.");
        return;
    }

    if (cpf.value.replace(/\D/g, "").length !== 11) {
        alert("Digite um CPF válido com 11 números.");
        return;
    }

    alert("Formulário enviado com sucesso!");

})