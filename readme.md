# projetomobile-site-receita

Quintal com Tempero (Julia, Maria Eduarda Raramalho, Maria Eduarda Bastos, Milena, Melani)

Link do Protótipo no Figma: https://www.figma.com/design/B3eTGjX1BtIYEgL9xhNO0I/Untitled?node-id=0-1&t=DMuYfWxyMs2e2ePg-1


(Página de Login - Mel)

Visão Geral:
Quintal com Tempero é uma aplicação web e mobile que oferece receitas culinárias. Fiz a primeira página permitindo login com Google.

Tecnologias Utilizadas
HTML5, CSS
React Native
Autenticação: Google Sign-In API
Ícones: [Icons8](https://icons8.com)

Funcionalidades:
Web
-Login com usuário e senha
-Login com Google integrado
-Recuperação de senha pelo Google
-Layout responsivo para dispositivos diferentes.
-Ligação entre as páginas

Mobile
-Autenticação com Google via `@react-native-google-signin/google-signin`
-Design adaptavel com a versão web
-Botões e inputs

Quase morri pra tentar colocar uma API. Vi um tutorial no youtube para implementar "Fazer login com o Google" 
Adicionei um evento onclick no botão que redireciona para o URL correto de login do Google
Usei o endpoint oficial de login do Google (accounts.google.com/v3/signin)

O projeto utiliza a *Google Sign-In API* para autenticação segura

```javascript
GoogleSignin.configure({
  webClientId: '587121433603-r6353kb1fo9o72a663bmsrn6fooo32dj.apps.googleusercontent.com',
});
```

Endpoints utilizados:
1. Login Web:
   https://accounts.google.com/v3/signin/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin
   

2. Recuperação de Senha:
   https://accounts.google.com/v3/signin/recovery?flowName=GlifWebSignIn&flowEntry=ServiceLogin


 Design:
 Cores Principais
-Laranja 1: `#ff944d`
-Laranja 2: `#e67e3c`
-Branco: `#ffffff`

Componentes:
-Botão Google: Estilizado com ícone
-Inputs: Bordas arredondadas e placeholder branco
-Footer Fixo: Navegação inferior

![página de login pelo computador](./pages/melani/Captura%20de%20tela%202025-08-07%20075148.png)
![página de login pelo celular](./pages/melani/Captura%20de%20tela%202025-08-07%20075209.png)

07/08 - Prof eu fiz alguma cagada e o botão do google parou de funcionar, não vou estar conseguindo arrumar 😛

Página de Menu (Julia)

Este projeto apresenta um livro de receitas digital que se adapta perfeitamente tanto em telas de celular quanto de computador, com destaque para a seção de carnes, massas e sobremesas.

FUNCIONALIDADES

Design Responsivo que se adapta a qualquer tamanho de tela

Layout Atraente para a seção de carnes com imagem integrada

Media Queries para otimização em diferentes dispositivos

Efeitos Visuais suaves para melhor experiência do usuário

Organização Semântica do código HTML e CSS

TECNOLOGIAS UTILIZADAS
HTML5 semântico

CSS3 com Flexbox e Grid Layout

Media Queries para responsividade

Design Mobile First

Ícones do Font Awesome

a duda nao fez nada, tentamos ajudar mas ela nao quis, e ela tentou mas nao fez por preguiça

nao consegui de jeito nenhum colocar botão pra funcionar :(


<<<<<<< HEAD
Logo fictícia (carregada localmente): images.png
Ícones (carregados de forma externa):
Ícone do Google.
Ícones do menu e home (via Icons8).
c:\Users\aluno\Downloads\HamburguerAlcatraComBacon_1-1920x1274.jpg"
c:\Users\aluno\Downloads\download.jfif
file:///C:/Users/aluno/Pictures/Massa-de-panqueca.webp

QUINTAL COM TEMPERO (MENU PRINCIPAL)

Este projeto apresenta um livro de receitas digital que se adapta perfeitamente tanto em telas de celular quanto de computador, com destaque para a seção de carnes, massas e sobremesas.

Tecnologias Utilizadas

HTML5: Estruturação da página web.
CSS3: Estilização dos elementos com foco em design limpo e moderno.
JavaScript (React Native): Organização de estilos simulando estrutura mobile com comparação de design responsivo.
Imagens de ícones: Usadas via URLs externas e arquivos locais.

FUNCIONALIDADES
Design Responsivo que se adapta a qualquer tamanho de tela

Layout Atraente para a seção de carnes com imagem integrada

Media Queries para otimização em diferentes dispositivos

Efeitos Visuais suaves para melhor experiência do usuário

Organização Semântica do código HTML e CSS

TECNOLOGIAS

HTML5 semântico

CSS3 com Flexbox e Grid Layout

Media Queries para responsividade

Design Mobile First

Ícones do Font Awesome
=======

Página de Hamburguer (Milena)


Projeto: Hambúrguer Caseiro    

Meu projeto é uma página de receita de hamburguer caseiro, onde tem, Ingredientes, Modo de preparo,Imagens,Rodapé e tambem o Menu e o Home. Que quando clicados vão para a pagina de login da mel e a de inicio da julia. A interface é responsiva, utilizando HTML, CSS e JavaScript para renderizar a página dinamicamente. O projeto visa demonstrar o uso de tecnologias web para criar uma página simples, mas funcional e bem estruturada. 



Tecnologias que usei foram:HTML,
                           CSS
                           Javascript

 Descrição do Projeto
Estrutura de HTML 

1. Cabeçalho (`<header>`)
Mostra o título do projeto "HAMBURGUER CASEIRO" e a do logo.

2. Ingredientes (`<section class="ingredientes">`)
A lista de ingredientes que precisam para a receita, junto com imagens para cada ingrediente

3. Modo de Preparo (`<section class="preparo">`)
Apresenta os passos necessários para preparar o hambúrguer.

4. Rodapé (`<footer>`)
Tem os links do "Home" e "Menu", com ícones.

CSS:
O `styles.css` foi utilizado para aplicar as regras de estilo à página, com foco em uma apresentação limpa,agradável e organizada.

1. Design Responsivo
Uso de grid para exibir os ingredientes de forma organizada e responsiva.

2. Cores e Tipografia:
O fundo da página é branco, com destaques em laranja.
Fontes são configuradas para uma estetica mais bonita.
As principais cores que usamos foi
 Laranja 1: `#ff944d`
 Branco: `#ffffff`

3. Rodapé:
O rodapé é fixado na parte de cima e na de baixo da tela,fazendo com que os links de navegação estejam acessíveis.

4. Imagens dos ingredientes:
As imagens dos ingredientes tem um tamanho fixo e são colocadas de forma centralizada.

JavaScript:

O  `script.js` é responsável pela parte interativa do app. 



Como Rodar o Projeto
Este é um projeto simples, sem necessidade de servidores ou tecnologias complexas,da pra rodar de boa, tanto em celular tanto em computador, adaptado para todos os tipos de aparelhos.   

  Tive muita dificuldade em colocar API, não consegui real, me matei de assistir os videos para aprender e entender, mas nada deu certo nesse projeto. Foi a unica coisa que me deu dor de cabeça, por que o resto levei jeito e fiz muito rapido. Curti muito fazer e estilizar ele.

Conclusão
Este projeto tem construção de uma página simples utilizando HTML, CSS e JavaScript para criar um conteúdo interativo. A estrutura modular do código permite que cada parte (ingredientes, preparo, e rodapé) seja facilmente usada. A combinação de CSS para estilização e JavaScript para dinamismo faz com que a página seja funcional e de fácil manutenção.





Página de Mousse (Maria) 

Projeto: Mousse de Maracujá 

Este projeto é um site de receita para a sobremesa "Mousse de Maracujá". Ele apresenta um layout simples com um cabeçalho, lista de ingredientes e instruções de preparo. A página é responsiva, se ajustando corretamente tanto em celulares quanto em computadores.

O site foi desenvolvido utilizando HTML e CSS, com foco em clareza e usabilidade. O design responsivo foi onde eu mais tive dificuldades em conseguir arrumar, mas depois de horasssss de tentativas, consegui corrigir os erros do código e transformá-lo em um design responsivo.

Tecnologias Utilizadas
HTML: Para a estrutura da página (cabeçalhos, parágrafos, imagens, etc.).

CSS: Para estilizar o layout, fontes, cores e adicionar as media queries para garantir a responsividade.

Funcionalidades
Cabeçalho: Contém uma logo e o nome da sobremesa na barra superior.

Lista de Ingredientes: Exibe os ingredientes com as imagens deles.

Modo de Preparo: Fornece o passo a passo para fazer a mousse.

Design Responsivo: Ajusta o layout para diferentes tamanhos de tela (móvel, tablet, desktop).

Infelizmente, eu não consegui implementar um rodapé funcional. Fiquei com bastante dificuldade e acabei deixando ele de lado.

Explicação do Código
A estrutura do HTML é bem simples e direta, com seções para o cabeçalho, lista de ingredientes, modo de preparo e rodapé. A barra superior (top-bar) contém o logo e o nome da sobremesa, enquanto a lista de ingredientes exibe as imagens dos itens e seus respectivos nomes. O modo de preparo é descrito em texto logo abaixo.

O CSS foi utilizado para dar estilo ao layout, com cores que destacam as seções e fontes legíveis. O layout foi feito com base em flexbox, o que garante que os elementos se alinhem corretamente na tela. As media queries foram usadas para garantir que o site seja responsivo, ajustando a visualização para diferentes larguras de tela, desde desktops até dispositivos móveis.

Conclusão: Foi muito dificil fazer esse design responsivo, principalmente porque eu tava tendo dificuldades para ajustar tudo direitinho nas telas menores, como em celulares. Depois de várias tentativas e horasss tentando, finalmente consegui acertar o layout para se adaptar bem a diferentes dispositivos.

Mesmo depois de muito trabalho, consegui criar uma página funcional e legal de visualizar. O uso de media queries e flexbox foi fundamental para deixar o site bem responsivo e agradável. No fim, mesmo com o rodapé ainda fora do lugar, o resultado final ficou como eu esperei que ficasse mesmo, e eu aprendi muito no processo!😁






Página de Panqueca (Duda)
>>>>>>> ce34269b9ead0aefd7e8b7926b7fb639e60df1cf
