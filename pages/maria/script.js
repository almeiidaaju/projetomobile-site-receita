document.addEventListener('DOMContentLoaded', function() {
  
  const ingredients = document.querySelectorAll('.ingredient-item');
  
  ingredients.forEach(ingredient => {
      ingredient.addEventListener('mouseenter', function() {
          this.style.transform = 'translateX(5px)';
          this.style.transition = 'transform 0.2s';
      });
      
      ingredient.addEventListener('mouseleave', function() {
          this.style.transform = 'translateX(0)';
      });
  });
});