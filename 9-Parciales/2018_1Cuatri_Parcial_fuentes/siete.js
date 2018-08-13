function mostrar()
{
	/* Realizar el algoritmo que permita el ingreso por prompt de las notas
	 (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
	 informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
	var nombre;
	var notas;
	var sexo;
	var promedioTotal;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var bandera = 0;
	var cantVarones = 0;
	var acumulador = 0 ;
	var contador = 0;

	while(contador < 5)
	{
		nombre = prompt("ingrese el nombre del alumno");
		nota = prompt("ingrese nota del alumno");
		nota = parseInt(nota);

		//valido nota

		while(nota <0 || nota >10)
		{
			nota = prompt("error. ingrese nota valida");
			nota= parseInt(nota);

		}

		 // pido sexo
		 sexo = prompt("ingrese sexo ('f' o 'm')");
		 //valido sexo
		 while(sexo != 'f' && sexo != 'm')
		 {
		 	sexo = prompt("error. ingrese sexo valido");
		 }

		 if( sexo == 'm' && nota >= 6)
		 {
		 	cantVarones++;
		 }

		 if(nota< notaMasBaja && sexo== sexoNotaMasBaja || bandera == 0)
		 {
		 	notaMasBaja = nota;
		 	sexoNotaMasBaja = sexo;
		 	bandera = 1;
		 }

		 acumulador = acumulador + nota;
		 promedioTotal = acumulador / contador;
		 contador ++ ;
		 
	}
	alert("el promedio de las notas es " + promedioTotal + " la nota mas baja es " + notaMasBaja + " y su sexo es " + sexoNotaMasBaja + " la cantidad de varones con nota mayor o igual a 6 es " + cantVarones );



}
