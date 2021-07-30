/*
Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	//tomo el mes
	
	let mes;

	mes = document.getElementById("txtIdMes").value;

	/*if(mes == "Enero"){
		alert("que comiences bien el año!!!.");
	}
	else if(mes == "Marzo"){
		alert("a clases!!!.");
	}
	else if(mes == "Julio"){
		alert("se vienen las vacaciones!!!.");

	}else if (mes == "Diciembre"){
		alert("Felices fiesta!!!.");
	}
*/

	switch(mes){
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
	}




}//FIN DE LA FUNCIÓN