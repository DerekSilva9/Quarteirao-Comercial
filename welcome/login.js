function validateLogin(event) {
    event.preventDefault(); // Evita o envio normal do formulário

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const validEmail = 'adtecinfor@gmail.com';
    const validPassword = '12345678';

    if (email === validEmail && password === validPassword) {
        window.location.href = '/ecommerce/home.html';
    } else {
        alert('Email ou senha incorretos');
    }
}
