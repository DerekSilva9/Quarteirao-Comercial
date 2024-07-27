document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obter os valores dos campos de email e senha
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Verificação básica de email e senha
        if (email === 'user@example.com' && password === 'password123') {
            alert('Login bem-sucedido!');
            window.location.href = '../ecommerce/home.html';
        } else {
            alert('Email ou senha inválidos!');
        }
    });
});
