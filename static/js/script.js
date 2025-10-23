document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagem');
    
    botao.addEventListener('click', function() {
        mensagem.textContent = 'Botão clicado! Funcionando perfeitamente!';
        mensagem.style.color = '#dc3545';
        
        // Efeito visual simples
        setTimeout(() => {
            mensagem.style.color = '#28a745';
        }, 500);
    });
});
