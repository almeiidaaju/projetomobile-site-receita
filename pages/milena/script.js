
// Lista de ingredientes com imagem e descrição
const ingredientes = [
    { img: "carne.png", texto: "1 kg de carne moída" },
    { img: "cebola.png", texto: "1 cebola média picada" },
    { img: "oregano.png", texto: "Orégano a gosto" },
    { img: "cebolinha.png", texto: "Cebolinha a gosto" },
    { img: "cremecebola.png", texto: "Creme de cebola" },
    { img: "alho.png", texto: "4 dentes de alho" },
    { img: "salpimenta.png", texto: "Sal e pimenta a gosto" }
  ];
  
  const modoPreparo = [
    "Misture os ingredientes, amasse bem e forme bolinhas, depois achate para ter a forma de hambúrguer.",
    "Frite numa frigideira antiaderente, coloque uma colher de óleo pois a carne não tem gordura."
  ];
  
  // Renderizar ingredientes
  const containerIngredientes = document.getElementById("ingredientes");
  
  ingredientes.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="imagens/${item.img}" alt="${item.texto}">
      <p>${item.texto}</p>
    `;
    containerIngredientes.appendChild(div);
  });
  
  // Renderizar modo de preparo
  const containerPreparo = document.getElementById("preparo");
  
  modoPreparo.forEach(passo => {
    const li = document.createElement("li");
    li.textContent = passo;
    containerPreparo.appendChild(li);
    
    footer: {
      flexDirection: 'row';
      justifyContent: 'space-around';
      backgroundColor: '#ff944d';
      paddingVertical: 10;
      position: 'absolute';
      bottom: 0;
      width: '100%';
      };
  
      footerIcon: {
      width: 20;
      height: 20;
      marginBottom: 5;
      };
      
      footerText: {
      color: '#fff';
      fontSize: 12;
      textAlign: 'center';
      };
        
  });
  