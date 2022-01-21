            //Función que suma dos números introducidos por teclado
			function suma(num1,num2){
                var resultado=num1+num2;
                document.write("La suma es: " + resultado + "<br>");

            }
  
            var numero1=parseInt(prompt("Introduzca el primer numero"));
            var numero2=parseInt(prompt("Introduzca el segundo numero"));
            suma(numero1,numero2);
			//Esta función vuelve a sumar los dos números y le resta un tercero
            function operaciones(num_a,num_b,num_c){
                var result=num_a+num_b-num_c;
                document.write("El resultado es: " + result + "<br>");
            }
            operaciones(7,5,2);
            //Esta función une nombre + apellido
			//La invocamos de dos formas: una con valores "fijos" y otra pidiendolos por teclado
            function unir(nombre,apellido){
                var nombre_completo=nombre + " " + apellido;
                document.write("El nombre completo es: " + nombre_completo);
            }
            unir("Jose", "Alvarez");
			document.write("<hr/>");
			//Esta también es con valores fijos
			//Pero los declaro como constantes y llamo de nuevo a la función
			const nomb = "Roberto";
			const ape= "Martínez";
			unir(nomb,ape);
			document.write("<hr/>");
			//Ahora probamos a introducimos los prompt al llamar a la función
            unir(prompt("Intro Nombre"), prompt("Intro Apellido"));
			document.write("<hr/>");
			//Por último hacemos una función que retorne un valor y lo escribo fuera de la función
			function sumafinal(num1,num2) {
				var suma = num1+num2;
				return suma;
			}
			document.write("La suma final es: " + sumafinal(5,8));