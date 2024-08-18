document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('pedidos');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const data = new FormData(form); // Correct variable name

        // Send the form data to the server
        fetch('http://localhost:3001/save-data', {
            method: 'POST',
            body: data
        })
        .then(response => response.text())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resposta').innerHTML = "Ocorreu um erro ao enviar os dados.";
        });
    });
});