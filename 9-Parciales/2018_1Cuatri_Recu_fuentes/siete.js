/*
ingreso :
maria f 15
jose m 33
pepe m 83
mostrar cantidad
   de mayores de edad = 2
   menores de edad = 1 
   mujeres = 1
   cantidad de hombres= 2
  nombre
      del mayor = pepe
      del menor = maria
      del hombre de menor edad = jose
*/     
 function mostrar()
{
	var edad;
	var nombre;
	var sexo;
	var contador;
	var MayoresDeEdad;
	var MenoresDeEdad;
	var CantidadDeMujeres;
	var CantidadDeHombres;	

	contador= 0 ;
	while( contador <3)
	{
		contador ++ ;
		nombre = prompt("ing nombre");
		sexo= prompt("ing sexo");
		while( sexo != "f" && sexo != "m")
		{
			sexo = prompt("error");
		}
		



		edad= prompt("ing edad ");
		edad= parseInt(edad);

		while ( edad <0 || edad >100)
		{
			edad= prompt("error");
			edad= parseInt(edad);

		}

		if (edad > 18)
		{
			MayoresDeEdad++;
		}
		else 
		{
			MenoresDeEdad++;
		}
		if (sexo = "f")
		{
			CantidadDeMujeres++ ; 
		}
		else
		{
			CantidadDeHombres++;
		}


	
     }
     document.write(" <br> la cantidad de mayores es : " + MayoresDeEdad );
     document.write(" <br> la cantidad de menores es : " + MenoresDeEdad);



	




}
