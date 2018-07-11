function mostrar()
{
//tomo la edad  
   var edad;
   edad= document.getElementById('edad').value;
   edad= parseInt(edad);
   if(edad <= 17)
   {
   	alert("menor de edad");
   }
   else
   {
   	alert("mayor de edad");
   }

}//FIN DE LA FUNCIÓN