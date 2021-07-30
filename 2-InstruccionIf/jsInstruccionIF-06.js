/*
Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	//tomo la edad  
	let edadUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if(edadUsuario >= 18){
		alert("Sos mayor de edad");
	}
	else if(edadUsuario >= 13 && edadUsuario <= 17){
		alert("Sos adolescente");
	}
	else if(edadUsuario >= 65){
		alert("Sos un adulto mayor");
	}
	else{
		alert("Sos niño");
	}
	
	



}//FIN DE LA FUNCIÓN