document.querySelectorAll('footer button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Você clicou em: ${button.textContent.trim()}`);
    });
});
