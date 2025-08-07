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

![página de login pelo celular](./Print%20Página%20de%20Login%20(Celular).png)
![login com o google pelo celular](./Print%20Login%20com%20o%20Google%20(Celular).png)
![página de login pelo computador](./Print%20Página%20de%20Login%20(Computador))
![login com o google pelo computador](./Print%20Login%20com%20o%20Google%20(Computador).png)

07/08 - Prof eu fiz alguma cagada e o botão do google parou de funcionar, não vou estar conseguindo arrumar 😛

Página de Menu (Julia)




Página de Hamburguer (Milena)




Página de Mousse (Maria)




Página de Panqueca (Duda)