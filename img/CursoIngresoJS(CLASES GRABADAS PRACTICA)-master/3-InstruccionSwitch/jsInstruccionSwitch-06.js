/*
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".
*/

function mostrar()
{
	//tomo la hora
	let hora;

	hora = parseInt(document.getElementById("txtIdHora").value)
// Uso de SWITCH 
/*	switch(hora){
		case 07:
		case 08:
		case 09:
		case 10:
		case 11:
			alert("Es de mañana")
			break;
	
	
	    case 12:
	    case 13:
	    case 14:
	    case 15:
	    case 16:
	    case 17:
	    case 18:
	    case 19:
			alert("Es de tarde")
			break;
	

	
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 01:
		case 02:
		case 03:
		case 04:
		case 05:
		case 06:
			alert("Es de noche")
			break;

		default:
			alert("La hora no existe")
			break;
	}
*/
	// Uso de IF

	if(hora >= 7 && hora <= 11){
		alert("Es de mañana")
	} 
	else if(hora >= 12 && hora <= 19){
		alert("Es de tarde")
	}
	else if( (hora >= 20 && hora <= 24) || (hora >= 0 && hora <= 6) ){
		alert("Es de noche")
	}
	else{
		alert("La hora no existe")
	}

}//FIN DE LA FUNCIÓN