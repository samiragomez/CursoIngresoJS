function mostrar()
{ 
	/*Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar)
 hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*/
	var letra;
	var numero;
	var respuesta = 'si';
	var cantPares = 0;
	var cantImpares = 0;
	var contCeros = 0;
	var promedioNumPositivos;
	var sumaNegativos;
	var numNegativos;
	var numeroMax;
	var letraMax;
	var numeroMin;
	var letraMin;
	var acumulador = 0;
	var bandera = 0;
   var contador= 0;

   while(respuesta == 'si')
   {
   	 letra = prompt("ingrese letra");
   	 numero= prompt("ingrese numero");
   	 numero = parseInt(numero);
   	 // valido numeros
   	 while(numero <-100 || numero >100)
   	 {
   	 	numero= prompt("ingrese numero valido");
   	 	numero= parseInt(numero);

   	 }
   	 if(numero %2 == 0)
   	 {
   	 	cantPares++;
   	 }
   	 else if (numero % 2 == 1 || numero %2 == -1)
   	 {
   	 	cantImpares++;
   	 }
   	 if ( numero == 0)
   	 {
   	 	contCeros++;
   	 }
   	 if(numero > 0)
   	 {
   	 	promedioNumPositivos = acumulador + numero;
   	 	promedioNumPositivos = promedioNumPositivos / contador;

   	 }
   	 else if (numero < 0 ) 
   	 {
   	 	sumaNegativos = acumulador + numero;
   	 	sumaNegativos = sumaNegativos + numero;

   	 	
   	 }
   	 if(numero > numeroMax && letraMax > letra|| bandera == 0)
   	 {
   	 	numeroMax = numero;
   	 	letraMax= letra;

   	 }
   	 if(numero < numeroMin && letraMin < letra || bandera == 0)
   	 {
   	 	numeroMin = numero;
   	 	letraMin= letra;
   	 	bandera = 1;

   	 }

   	 respuesta = prompt("quiere seguir ingresando?");
   	 contador ++;

   }
   document.write( " la cantidad de numeros pares son " + cantPares + " <br>");
   document.write(" la cantidad de numeros impares son " + cantImpares + "<br>");
   document.write("la cantidad de ceros es " + contCeros + "<br>");
   document.write("el promedio de numeros ingresados son positivos " + promedioNumPositivos + "<br>");
   document.write("suma de numeros negativos " + sumaNegativos + "<br>");
   document.write(" numero minimo es " + numeroMin + "y la letra min es " + letraMin + " <br>");
   document.write("numero maximo es " + numeroMax + " y su letra es " + letraMax + " <br >");



}
