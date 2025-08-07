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




Página de Panqueca (Duda)