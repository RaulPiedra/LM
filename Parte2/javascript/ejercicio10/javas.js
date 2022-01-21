            //Ejemplo de funciones sin argumentos que no devueleven valores
			//Solo escriben
			//Estas funciones tan sencillas serán las más usadas en la parte de objetos de Javascript
			function nombre(){
                document.write("Mi nombre es Jorge" + "<br>");
            }
            nombre();
            function edad(){
				var edad=44;
                document.write("Mi edad es " + edad + " años " + "<br>");
            }
            edad();
            function fecha(){
                var hoy=new Date();
                var fecha_corta=hoy.toDateString();
                var fecha_corta2=hoy.toLocaleDateString();
                document.write("Fecha: " + fecha_corta + "<br>");
                document.write("Fecha: " + fecha_corta2 + "<br>");
            }
            fecha();
			
			