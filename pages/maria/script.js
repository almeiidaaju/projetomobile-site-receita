document.addEventListener('DOMContentLoaded', function() {
  
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
    
   
 
    console.log('Receita de Mousse de Maracujá carregada com sucesso!');
});