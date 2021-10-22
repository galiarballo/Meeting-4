function ValidarLicencia() {

    let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let edad = document.getElementById("edad").value;
	let licencia = document.getElementById("licencia").value;
	let fecha_exp = document.getElementById("Fechaexpiracion").value;
	
	let opciones = document.getElementById('licencia').options[document.getElementById('licencia').selectedIndex].value;

	//fecha actual
	let fecha_hoy = new Date();

	// fecha: YYYY + MM + DD
	let pattern = /(\d{4})(\d{2})(\d{2})/;
	let expiracion = new Date(fecha_exp.replace(pattern,'$1-$2-$3'));

	if (!nombre || !apellido || !edad || !licencia || !fecha_exp) {
		alert("Completa todos los datos");
		return false;
	}
	
	else if(edad < 18) {
		alert("Sos menor de edad, no estás habilitado");
	}
	else if (opciones === "no") {
		alert("No tenés licencia, no estás habilitado")
	}
	else if (expiracion < fecha_hoy) {
		alert("Su licencia está expirada")
	}
	else {
		alert(nombre + " " + apellido + " tu licencia está habilitada")
	}

}