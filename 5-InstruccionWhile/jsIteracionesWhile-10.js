/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let acumuladorNegativos = 0;
	let acumuladorPositivos = 0;
	let contadorNegativos = 0;
	let contadorPositivos = 0;
	let contadorCero = 0;
	let contadorPares = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;
	let respuesta;
	

	do{
		numero = parseInt(prompt("Ingrese un numero!"));
		if(isNaN(numero)){
			numero = parseInt(prompt("Dato invalido, Ingrese un numero porfavor"));
		}
//2.3
		if(numero < 0){
			acumuladorNegativos += numero;
			contadorNegativos++;
		}
		else if (numero > 0){
			acumuladorPositivos += numero;
			contadorPositivos++;
		}
		else
		{
			contadorCero++;
		}

		// Me fijo si es PAR
		if(numero % 2 == 0){
			contadorPares++;
		}

		respuesta = prompt("Quiere seguir ingresando numeros? 's' o 'n' ");
	}while(respuesta == 's');
	
	if(acumuladorNegativos){ 		
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	}
	if(acumuladorPositivos){ 
	promedioPositivos = acumuladorPositivos / contadorPositivos;
	}

	diferencia = contadorNegativos - contadorPositivos;

	console.log("La suma de los negativos es " + acumuladorNegativos);
	console.log("La suma de los positivos es " + acumuladorPositivos);
	console.log("La cantidad de negativos es " + contadorNegativos);
	console.log("La cantidad de positivos es " + contadorPositivos);
	console.log("La cantidad de ceros es " + contadorCero);
	console.log("La cantidad de pares es " + contadorPares);
	console.log("El promedio de los positivos es " + promedioPositivos)
	console.log("El promedio de los negativos es " + promedioNegativos);
	console.log("La diferencia entre positivos y negativos es " + diferencia);

	
}//FIN DE LA FUNCIÓN

// Estrategia de resolucion
// 1- Declarar variables.
// -- numero / acumulador de negativos / acumulador de positivos / contador positivos 
// contador negativos / contador de ceros / contador pares / promedio positivos / promedio negativos / diferencia
// respuesta.

// 2- Genero un bucle del tipo mientras el usuario quiera (do-while)
// - cosas que se repiten (van adentro del bucle).
// 2.1- Pido el numero.
// 2.2- Valido que sea un numero.
// 2.3- Identifico el signo del numero (positivo/negativo/cero).
// 2.3.1 - positivo --> acumulo el numero y lo cuento.
// 2.3.2 - negativo --> acumulo el numero y lo cuento.
// 2.3.3 - cero --> lo cuento.
// 3- Me fijo si el numero es par.
// 3.1 - es par --> lo cuento.
//--------------------------------------------------
// cosas que tengo que hacer despues del bucle
// 4- Calculo el promedio de los positivos
// 4.1- Calculo el promedio de los negativos.
// 4.2- Calculo la diferencia entre centidad de positivos y cantidad de negativos.

// 5. Muestro los resultados.

// numero PAR
