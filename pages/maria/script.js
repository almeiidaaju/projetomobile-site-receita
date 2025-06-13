document.addEventListener('DOMContentLoaded', function() {
    console.log('Recipe page loaded successfully');
    
    // You could add interactive features here like:
    // - Timer for the 4h refrigeration
    // - Serving size calculator
    // - Print recipe button
    // - Favorite/save recipe functionality
    
    // Example interactive element:
    const ingredients = document.querySelector('.ingredients');
    ingredients.addEventListener('click', function() {
        console.log('Ingredients section clicked');
    });
});