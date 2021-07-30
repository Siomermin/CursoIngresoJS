/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    // Terreno rectangular = largo x2 + ancho x2
    // 3 hilos de alambre x metro.

    /* Mi terreno mide 40 m de largo y 20 de ancho
    
    40 m por lado de largo = 80 m
    20 m de lado por ancho = 40 m

    80 * 3 = 240 hilos de alambre
    40 * 3 = 120 hilos de alambre. */

    let largoTerreno;
    let anchoTerreno;
    let perimetroTerreno;
    let totalAlambreTerreno;
    let hilosAlambre = 3; // 3 alambre x 1 metro

    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);

    perimetroTerreno = (largoTerreno + anchoTerreno) * 2;

    totalAlambreTerreno = hilosAlambre * perimetroTerreno;

    alert("Se necesitan " + totalAlambreTerreno + " metros de alambre ");



}
function Circulo () 
{
    
    let perimetro; 
    let radio; 
    let alambre;
    const PI = 3.14; 

    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;

    alambre = perimetro * 3;

    alert("Se necesitan " + alambre + " metros de alambre");



}
function Materiales () 
{
	let largoTerreno;
    let anchoTerreno;
    let area; // El area se calcula haciendo largo x ancho;
    const CEMENTO_X_METRO = 2;
    const CAL_X_METRO = 3;
    let cemento; // esta variable la uso para guardar el total
    let cal; // esta variable la uso para guardar el total

    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);

    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);

    area = largoTerreno * anchoTerreno;

    cemento = area * CEMENTO_X_METRO;

    cal = area * CAL_X_METRO;

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal");
}