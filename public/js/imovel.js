var stringInput = document.getElementById('string-input');

//Método para o envio de informações do cadastro de um imóvel para o Database do Firebase
var database = firebase.database();
function novoImovel(){
    firebase.database().ref('imoveis/').push().set({
        nome: document.getElementById('inputName').value,
        email: document.getElementById('inputEmail').value,
        cpf: parseInt(document.getElementById('inputCPF').value),
        rua: document.getElementById('inputStreet').value,
        nmrResidencial: document.getElementById('inputNumber').value,
        bairro: document.getElementById('inputNeighborhood').value,
        cep: parseInt(document.getElementById('inputCEP').value),
        cidade: document.getElementById('inputCity').value,
        estado: document.getElementById('inputState').value,
        tipoImovel: document.getElementById('inputType').value,
        nmrQuartos: document.getElementById('inputBadroom').value,
        nmrBanheiro: document.getElementById('inputBathroom').value
    });
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
}*/
