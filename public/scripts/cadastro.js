document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('cadastro');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const data = new FormData(form); // Correct variable name

        const senha = data.get('senha');
        const confirmaSenha = data.get('confirmaSenha');

        if (senha !== confirmaSenha) {
            document.getElementById('resposta').innerHTML = "As senhas não coincidem.";
            return;
        }

        // Send the form data to the server
        fetch('http://localhost:3001/save-data', {
            method: 'POST',
            body: data
        })
        .then(response => response.text())
        .then(result => {
            console.log('Success:', result);
            document.getElementById('resposta').innerHTML = result; // Show success message
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('resposta').innerHTML = "Ocorreu um erro ao enviar os dados.";
        });
    });
});
