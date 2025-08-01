document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('year').textContent = new Date().getFullYear();
    
    
    const steps = document.querySelectorAll('.preparation-steps li');
    const primaryColor = getComputedStyle(document.documentElement)
                        .getPropertyValue('--primary').trim();
    
    steps.forEach(step => {
        step.addEventListener('mouseover', function() {
            this.style.color = primaryColor;
            this.style.transition = 'color 0.2s';
        });
        
        step.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });
});