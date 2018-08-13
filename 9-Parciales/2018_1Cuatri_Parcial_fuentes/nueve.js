function mostrar()
{
	 /*Realizar el algoritmo que permita ingresar la marca del producto,
	  el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que
 el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.*/
	 
	 var marca;
	 var peso;
 	 var tempAlmacenamiento;
 	 var tempPares= 0;
 	 var marcaMasPesado;
 	 var cantProductosMenosGrados = 0;
 	 var promedioDelPeso;
 	 var pesoMaximo;
 	 var pesoMinimo;
 	 var respuesta = 'si';
 	 var acumulador = 0;
 	 var bandera = 0;
 	 var contador= 0;

 	 while(respuesta == 'si')
 	 {
 	 	marca = prompt("ingrese marca del producto");
 	 	peso = prompt("ingrese peso del producto");
 	 	peso = parseInt(peso);

 	 	while(peso <1 || peso >100)
 	 	{
 	 		peso= prompt("ingrese peso valido");
 	 		peso= parseInt(peso);
 	 	}

 	 	tempAlmacenamiento= prompt("ingrese temperatura de almacenamiento del producto");
 	 	tempAlmacenamiento= parseInt(tempAlmacenamiento);

 	 	while(tempAlmacenamiento < -30 || tempAlmacenamiento >30)
 	 	{
 	 		tempAlmacenamiento= prompt("error, ingrese temperatura correcta");
 	 	}

 	 	if(tempAlmacenamiento % 2 == 0)
 	 	{
 	 		tempPares++;
 	 	}
 	 	if(pesoMaximo == marcaMasPesado)
 	 	{
 	 		marcaMasPesado = marca;
 	 		
 	 	}

 	 	if(tempAlmacenamiento < 0 )
 	 	{
 	 		cantProductosMenosGrados ++ ;
 	 	}

 	 	if(peso > pesoMaximo || bandera == 0)
 	 	{
 	 		pesoMaximo = peso;
 	 	}
 	 	 
 	 	 if( peso < pesoMinimo  || bandera == 0)
 	 	{
 	 		
 	 		pesoMinimo = peso;
 	 		bandera= 1;
 	 		
 	 	}

 	 	promedioDelPeso = acumulador + peso;
 	 	promedioDelPeso = promedioDelPeso / contador;
 	 	contador ++;
 	 	respuesta = prompt("quiere seguir ingresando?");


 	 }
 	 	document.write(" la cantidad de temperaturas pares son " + tempPares + " <br>");
 	 	document.write(" la marca del producto mas pesado es " + marcaMasPesado + " <br>");
 	 	document.write("la cantidad de productos bajo cero es " + cantProductosMenosGrados + " <br>");
 	 	document.write(" el promedio es " + promedioDelPeso + " <br>");
 	 	document.write("el peso maximo es " + pesoMaximo + " y el minimo es " + pesoMinimo + "<br>");


}
