/*
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

estadoCivil
Soltero
Casado
Divorciado
*/

function mostrar()
{
	//tomo la edad  
	let edadUsuario;

	let estadoCivil;
	
	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	estadoCivil = document.getElementById("estadoCivil").value;


	if(edadUsuario < 18 && estadoCivil != "Soltero"){
		alert("Sos muy pequeño para NO ser soltero")
	}


}//FIN DE LA FUNCIÓN