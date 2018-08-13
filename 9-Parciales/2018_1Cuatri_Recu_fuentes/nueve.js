function mostrar()
{
	/*Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico,
	 el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e
 informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.*/

   	var nombredelAnimal;
   	var peso;
   	var temperatura;
   	var respuesta = 'si';
   	var tempPares = 0;
   	var animalPesado;
   	var pesoAnimalMasPesado;
   	var cantAnimalesMenosdeCeroGrados = 0;
   	var promedio;
   	var pesoMax;
   	var pesoMin;
   	var bandera = 0;
   	var acumulador= 0;
   	var contador = 0;
  

   	while(respuesta =='si')
   	{
   		nombredelAnimal = prompt("ingrese nombre");
   		peso = prompt("ingrese peso del animal");
   		peso = parseInt(peso);
   		while( peso < 1 || peso > 1000 )
   			{
   				peso = prompt("error. ingrese peso valido");
   				peso= parseInt(peso);
   			}
   	//valido temperatura 
   			temperatura= prompt("ingrese temperatura del habitat");
   			temperatura = parseInt(temperatura);
   			while( temperatura < -30 || temperatura >30)

   			{
   				temperatura= prompt("error. ingrese temperatura valida");
   				temperatura= parseInt(temperatura);
   	}

   	//temperaturas 
   			if(temperatura %2 == 0 && temperatura!= 0)
   	{
   		tempPares++ ;
   	}

   	if(temperatura <0 )
   	{
   		cantAnimalesMenosdeCeroGrados++;
   	}
   	
   	if( peso > pesoMax || bandera == 0 && temperatura < 0)
   	{
   		pesoMax = peso ;
   		animalPesado= nombre;

   	}
   	
   	if ( peso < pesoMin || bandera == 0 && temperatura < 0)
   	{
   		pesoMin = peso;
   		pesoMin = nombre;
   		bandera = 1 ;
   	}
   	if(peso> pesoAnimalMasPesado || bandera == 0)
   			{
   				pesoAnimalMasPesado= peso;
   				pesoAnimalMasPesado= nombredelAnimal;
   				pesoAnimalMasPesado= temperatura;
   				
   			}
   		acumulador = acumulador + peso;
   		promedio= acumulador / contador ;
   		contador ++ ;
   		respuesta = prompt("desea seguir");
   	}

   
   	
   
   		document.write("temperatura pares " + tempPares + "<br>");
   		document.write("anmimal mas pesado " + animalPesado + "<br>");
   		document.write("animales frios " + cantAnimalesMenosdeCeroGrados + "<br>");
   		document.write("promedio " + promedio + "<br>");
   		document.write("pesomaximo " + pesoMax + "<br>");
   		document.write("peso min " + pesoMin + "<br>") ;


}


