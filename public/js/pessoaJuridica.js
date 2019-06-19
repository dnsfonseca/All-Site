var stringInput = document.getElementById('string-input');

var database = firebase.database();
function novaPessoaJuridica(){
    var nome = document.getElementById('inputName').value;
    var razaoSocial = document.getElementById('inputRazao').value;
    var email = document.getElementById('inputEmail').value;
    var senha = document.getElementById('inputPassword').value;
    var telefoneCel = document.getElementById('inputTelefoneCel').value;
    var telefone = document.getElementById('inputTelefone').value;
    var inscricaoEstadual = document.getElementById('inputInscEstadual').value;
    var cnpj = document.getElementById('inputCNPJ').value;
    var ramoAtividade = document.getElementById('inputRamo').value;
    var rua = document.getElementById('inputStreet').value;
    var nmrResidencial = document.getElementById('inputNumber').value;
    var bairro = document.getElementById('inputNeighborhood').value;
    var cep = document.getElementById('inputCEP').value;
    var cidade = document.getElementById('inputCity').value;
    var estado = document.getElementById('inputState').value;
    if(nome == "" || razaoSocial == "" || email == "" || senha == "" || telefoneCel == "" || telefone == "" || inscricaoEstadual == "" || cnpj == "" || ramoAtividade == "" 
    || rua == "" || nmrResidencial == "" || bairro == "" || cep == "" || cidade == "" || estado == ""){
        alert('Preencha todos os campos!')
    }
    else{
        firebase.database().ref('usuarioJuridico/').push().set({
            nome: document.getElementById('inputName').value,
            razaoSocial: document.getElementById('inputRazao').value,
            email: document.getElementById('inputEmail').value,
            senha: document.getElementById('inputPassword').value,
            telefoneCel: document.getElementById('inputTelefoneCel').value,
            telefone: document.getElementById('inputTelefone').value,
            inscricaoEstadual: document.getElementById('inputInscEstadual').value,
            cnpj: document.getElementById('inputCNPJ').value,
            ramoAtividade: document.getElementById('inputRamo').value,
            rua: document.getElementById('inputStreet').value,
            nmrResidencial: document.getElementById('inputNumber').value,
            bairro: document.getElementById('inputNeighborhood').value,
            cep: document.getElementById('inputCEP').value,
            cidade: document.getElementById('inputCity').value,
            estado: document.getElementById('inputState').value
        });
        alert('Cadastro concluído com sucesso!')
    }
}

//Função para a criação de usuários
function createLogin(){
    var emailInput = document.getElementById('inputEmail').value;
    var passwordInput = document.getElementById('inputPassword').value;
    firebase.auth().createUserWithEmailAndPassword(emailInput,passwordInput).then(user =>{
        console.log('usuario', user);
    }).catch(error => {
        console.log('error', error);
        alert('Este endereço de e-mail já está cadastrado.')
    });
}

var executa = function(){
    novaPessoaJuridica();
    createLogin();
}

var botao = document.getElementById("conclui");
botao.onclick = executa;
