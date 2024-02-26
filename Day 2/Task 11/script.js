document.getElementById('myForm').addEventListener('submit', function (event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var isValid = true;

    emailError.textContent = '';

    if (nameInput.value.trim() === '') {
        isValid = false;
        alert('Имя не может быть пустым.');
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        emailError.textContent = 'Электронная почта не может быть пустой.';
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailError.textContent = 'Неверный формат электронной почты.';
        }
    }

    if (!isValid) {
        event.preventDefault();
    }
});
