var currentUser

//Função para a criação de usuários
function createLogin(){
    var emailInput = document.getElementById('emailInput').value;
    var passwordInput = document.getElementById('passwordInput').value;
    firebase.auth().createUserWithEmailAndPassword(emailInput,passwordInput).then(user =>{
        console.log('usuario', user);
        alert('Usuário criado com sucesso. Efetue o login para continuar!')
    }).catch(error => {
        console.log('error', error);
        alert('Este usuário já está cadastrado.')
    });
}

//Função para login com conta Google
function loginGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(resposta => {
        console.log('usuario', resposta.user);
        console.log('token', resposta.credential.accessToken);
        displayName.innerText = 'Você está autenticado!';
        //window.location.href = "index.html";
    }).catch(erro => {
        console.log('erro', erro);
        alert('Algo deu errado, tente novamente.')
    });
}

//Função para login com email e senha
function loginEmail(){
    var emailInput = document.getElementById('emailInput').value;
    var passwordInput = document.getElementById('passwordInput').value;

    firebase.auth().signInWithEmailAndPassword(emailInput, passwordInput).then(() => {
        alert('Usuário conectado com sucesso!');
        displayName.innerText = 'Você está autenticado!';
        //window.location.href = "index.html";
    }).catch(error => {
        console.log('error', error);
        alert('E-mail ou senha incorretos.')
    });
}
/*
//Função para login com Facebook
function loginFacebook(){
    //cria uma nova importância do provedor de login do Facebook
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).auth(resposta => {
        console.log('usuario', resposta.user);
        console.log('token', resposta.credential.accessToken);
        displayName.innerText = 'Você está autenticado!';
    }).catch(erro => {
        console.log('erro', erro);
        alert('Algo deu errado, tente novamente.')
    })

}*/

//listenner de dom ready
document.addEventListener("DOMContentLoaded", function(){
    //Oberseva se há um usuário logado e mudanças na autenticação (Login e Logout)
    firebase.auth().onAuthStateChanged((usuario) => {
        if(usuario) {
            console.log('usuario', usuario);
            displayName.innerText = 'Você está autenticado!';
            currentUser = usuario;

            //Mudando o idioma do firebase
            firebase.auth().languageCode = 'pt';
            //Ele muda o idioma de acordo com o aparelho do usuário
            firebase.auth().useDeviceLanguage();

            if(!usuario.emailVerified){
            //Envia um email para o usuário verificar a conta dele
                //usuario.sendEmailVerification(),then(() => {
                  //  alert('E-mail de verificação enviado!');
                //});
            };

            //Envia um email para mudança de senha do email passado por parametro
            //firebase.auth().sendPasswordResetEmail(usuario.emailInput).then(()=>{
             //   alert('Email para reset de senha enviado');
           // });
        }else {
            console.log('Não há usuários logados.')
            displayName.innerText = 'Você não está autenticado';
        }
    });

    //Vai pegar os dados do usuário
    currentUser = firebase.auth().currentUser;

    if(currentUser){
        console.log('currentUser', currentUser);
        //Métodos para update de dados do usuário
        currentUser.updateProfile({
            displayName: "Daniel Araujo",
            photoURL: ''
        });
      //currentUser.updateEmail('danielfonseca@unipam.edu.br');  
    }
});

//Função para deletar usuário

function deletaUsuario() {
    if(currentUser) {
        currentUser.delete().then(() => {
            alert('Usuário excluído com sucesso.')
        })
    }
}

