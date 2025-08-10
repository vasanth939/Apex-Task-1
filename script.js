document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alertButton');

    alertButton.addEventListener('click', () => {
        alert('Hello! You successfully triggered this alert message with JavaScript.');
    });
});