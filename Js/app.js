function Enviar() {
    var nombresCap = document.getElementById('nombres').value;
    var apellidosCap = document.getElementById('apellidos').value;
    var cedulaCap = document.getElementById('cedula').value;
    var telefonoCap = document.getElementById('telefono').value;
    var emailCap = document.getElementById('email').value;
    var fechaCap = document.getElementById('fecha').value;
    var tipoCap = document.getElementById('tipo').value;
    var terminosCap = document.getElementById('terminos').checked;
    var textoCap = document.getElementById('texto').value;
    var sexoCap = document.formulario.sexo;
    for (let i = 0; i < sexoCap.length; i++) {
        if (sexoCap[i].checked) {
            var sexoCapturado = sexoCap[i].value;
        }
    }

    var estado = true;

    if (nombresCap == "") {
        alert("Ingrese sus Nombres");
        estado = false;
    }
    if (apellidosCap == "") {
        alert("Ingrese sus Apellidos");
        estado = false;
    }
    if (cedulaCap == "") {
        alert("Ingrese su Cedula ");
        estado = false;
    }
    if (telefonoCap == "") {
        alert("Ingrese su Telefono");
        estado = false;
    }
    if (emailCap == "") {
        alert("Ingrese su Email");
        estado = false;
    }
    if (fechaCap == "") {
        alert("Ingrese una Fecha");
        estado = false;
    }
    if (tipoCap == "Seleccione") {
        alert("Seleccione su libro favorito");
        estado = false;
    }
    if (!sexoCapturado) {
        alert("Seleccione su Sexo");
        estado = false;
    }
    if (textoCap == "") {
        alert("Ingrese una Descripcion");
        estado = false;
    }
    if (terminosCap == "") {
        alert("Acepte los Terminos y condiciones");
        estado = false;
    }

    if (estado == true) {
    
        var NewData = {nombresCap, apellidosCap, cedulaCap, telefonoCap, emailCap, fechaCap, tipoCap, sexoCapturado, textoCap}
        console.log(NewData);
        
        guardar(NewData);
    }
}




var BD = [];
function guardar(NewData) {
    BD.push(NewData);
    console.log(BD);

    document.getElementById("tabla").innerHTML +=
        '<tbody><td>'+NewData.nombresCap+
        '</td><td>' + NewData.apellidosCap+
        '</td><td>' + NewData.cedulaCap+
        '</td><td>' + NewData.telefonoCap+
        '</td><td>' + NewData.emailCap+
        '</td><td>' + NewData.fechaCap+
        '</td><td>' + NewData.tipoCap+
        '</td><td>' + NewData.sexoCapturado+
        '</td><td>' + NewData.textoCap+
        '</td></tbody>';
}