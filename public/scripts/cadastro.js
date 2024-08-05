document.addEventListener("DOMContentLoaded", function()
{
    const form = document.getElementById('cadastro');

    form.addEventListener('submit', function(event)
    {
        event.preventDefault();

        const Data = new FormData(form);

        const senha = Data.get('senha');
        const confirmaSenha = Data.get('confirmaSenha');

        if (senha !== confirmaSenha) {
            document.getElementById('resposta').innerHTML = "As senhas não coincidem.";
            return
        }
    });
});