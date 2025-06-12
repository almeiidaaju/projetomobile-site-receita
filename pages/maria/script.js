// Este script é opcional
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    alert("Você clicou no menu: " + item.innerText);
  });
});
