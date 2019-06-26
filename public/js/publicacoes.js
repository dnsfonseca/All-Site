$(document).ready(function(){

    var rootRef = firebase.database().ref().child("imoveis");

    rootRef.on("child_added", snap =>{
        
        var nome = snap.child("nome").val();
        var email = snap.child("email").val();
        var telContato = snap.child("telContato").val();
        var rua = snap.child("rua").val();
        var nmrResidencial = snap.child("nmrResidencial").val();
        var bairro = snap.child("bairro").val();
        var cep = snap.child("cep").val();
        var cidade = snap.child("cidade").val();
        var estado = snap.child("estado").val();
        var tipoImovel = snap.child("tipoImovel").val();
        var nmrQuartos = snap.child("nmrQuartos").val();
        var nmrBanheiro = snap.child("nmrBanheiro").val();

        $("#table_body").append("<tr><td>" + nome + "</td><td>" + email + "</td><td>" + telContato + "</td><td>" + 
        rua +"</td><td>" + nmrResidencial + "</td><td>" + bairro + "</td><td>" + cep + "</td><td>" + 
        cidade + "</td><td>" + estado + "</td><td>" + tipoImovel + "</td><td>" + nmrQuartos + "</td><td>" + 
        nmrBanheiro + "</td></tr>");

    });

});

//