/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
let numero;
let respuesta;
let acumuladorP = 0;
let acumuladorN = 1;
let flag = 1;

do{
	numero = parseInt(prompt("Ingrese un numero porfavor"));
	while(isNaN(numero)){
		numero = parseInt(prompt("Dato invalido, ingrese un numero porfavor"));
	}

	if(numero >= 0){
		acumuladorP = acumuladorP + numero;
	}
	else
	{
		acumuladorN = acumuladorN * numero;
		flag = 0;
	}

	respuesta = prompt("Quiere ingresar otro numero? Responda 's' o 'n' ").toLowerCase();
}while(respuesta == 's');

if(flag == 1){
	acumuladorN = 0;
}

document.getElementById("txtIdSuma").value = acumuladorP;
document.getElementById("txtIdProducto").value = acumuladorN;

}//FIN DE LA FUNCIÓN