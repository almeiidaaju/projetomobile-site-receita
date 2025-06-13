document.addEventListener('DOMContentLoaded', function() {
    // Efeito de hover nas barras
    const bars = document.querySelectorAll('.top-bar, .bottom-bar');
    
    bars.forEach(bar => {
        bar.style.transition = 'all 0.3s ease';
        
        bar.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#FF7700';
        });
        
        bar.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#FF8C00';
        });
    });
    
    // Efeito no título da receita
    const recipeTitle = document.querySelector('h1');
    recipeTitle.style.cursor = 'pointer';
    recipeTitle.style.transition = 'all 0.3s ease';
    
    recipeTitle.addEventListener('mouseenter', function() {
        this.style.color = '#FF6347';
        this.style.textShadow = '1px 1px 2px rgba(255, 140, 0, 0.3)';
    });
    
    recipeTitle.addEventListener('mouseleave', function() {
        this.style.color = '#FF4500';
        this.style.textShadow = 'none';
    });
    
    // Efeito na logo "suas receitas"
    const logo = document.querySelector('.logo');
    logo.style.cursor = 'pointer';
    logo.style.transition = 'all 0.3s ease';
    
    logo.addEventListener('click', function() {
        alert('Bem-vindo às suas receitas favoritas!');
    });
    
    console.log('Receita de Mousse de Maracujá carregada com sucesso!');
});