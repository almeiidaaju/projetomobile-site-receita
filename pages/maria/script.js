

document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.querySelector(".bottom-nav div:nth-child(1)");
    const menuBtn = document.querySelector(".bottom-nav div:nth-child(2)");
  
    homeBtn.addEventListener("click", function () {
      alert("Você clicou em Home!");
      
    });
  
    menuBtn.addEventListener("click", function () {
      alert("Você clicou em Menu!");
      
    });
  });
  