//Função para a criação de usuários
/*
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
}*/

//Função para login com conta Google
function loginGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(resposta => {
        console.log('usuario', resposta.user);
        console.log('token', resposta.credential.accessToken);
        displayName.innerText = 'Você está autenticado!';
        window.location.href = "index.html";
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

function novoImovel(){
    var rua = document.getElementById('inputStreet').value;
    var nmrResidencial = document.getElementById('inputNumber').value;
    var bairro = document.getElementById('inputNeighborhood').value;
    var cep = document.getElementById('inputCEP').value;
    var cidade = document.getElementById('inputCity').value;
    var estado = document.getElementById('inputState').value;
    var tipo = document.getElementById('inputType').value;
    var quartos = document.getElementById('inputBadroom').value;
    var banheiros = document.getElementById('inputBathroom').value;
    var user = firebase.auth().currentUser;
    if(rua == "" || nmrResidencial == "" || bairro == "" || cep == "" || cidade == "" || estado == "" || tipo == ""
    || quartos == "" || banheiros == ""){
            alert('Preencha todos os campos.')
        } else{
                if(user){
                    firebase.database().ref('imoveis/').push().set({
                        rua: document.getElementById('inputStreet').value,
                        nmrResidencial: document.getElementById('inputNumber').value,
                        bairro: document.getElementById('inputNeighborhood').value,
                        cep: document.getElementById('inputCEP').value,
                        cidade: document.getElementById('inputCity').value,
                        estado: document.getElementById('inputState').value,
                        tipoImovel: document.getElementById('inputType').value,
                        nmrQuartos: document.getElementById('inputBadroom').value,
                        nmrBanheiro: document.getElementById('inputBathroom').value
                    });
                        alert('Anúncio efetuado com sucesso.')
                    } else
                        alert('Você precisa estar conectado para efetuar um anúncio.')                
                }
        }

/*
//Método para o envio de arquivos para o Storage do Firebase
var ref = firebase.storage().ref('arquivos');
stringInput.onchange = function (event){
    var arquivo = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(arquivo);
    reader.onload = function(){
        const base64 = reader.result.split('base64,')[1];

        ref.child('imagem').putString(base64, 'base64', { contentType: 'image/png'}).then(snapshot => {

            ref.child('imagem').getDownloadURL().then(url => {
                console.log('Imagem para download', url);
            });
        });
    }
}
*/

//Função para deletar usuário
function deletaUsuario() {
    if(currentUser) {
        currentUser.delete().then(() => {
            alert('Usuário excluído com sucesso.')
        });
    }
}
