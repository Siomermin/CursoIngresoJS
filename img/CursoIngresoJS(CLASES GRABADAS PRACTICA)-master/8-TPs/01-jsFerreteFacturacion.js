/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let sumaPrecios;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumaPrecios = precio1 + precio2 + precio3;

    alert("La suma de tus precios es " + sumaPrecios);

}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;
    let promedioPrecios;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precio1 + precio2 + precio3;
    
    promedioPrecios = suma / 3;

    alert("El promedio del precio es " + promedioPrecios);
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let sumaPrecios;
    let iva;
    let precioFinal;

    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    sumaPrecios = precio1 + precio2+ precio3;
    iva = sumaPrecios * 21 / 100;
    precioFinal = sumaPrecios + iva;

    alert("El precio final es " + precioFinal);
}


// "txtIdPrecioTres" ,  "txtIdPrecioDos" ,"txtIdPrecioTres"


