	$(document).ready(function(){
		var posicionInicial = $(window).scrollTop();
		var posicionNueva;		
		$(window).scroll(function(){
			var posicion = $(this).scrollTop();
			//$("#casilla").val(posicion);
			$("#casilla").attr("value", posicion);
			/*******Comportamiento del header */
			posicionNueva = $(this).scrollTop();
			if (posicionNueva > posicionInicial) {
				$("header").slideUp(1000);
				
			}
			else {
				$("header").slideDown(1000);
				
			}
			posicionInicial = posicionNueva;
			/****comportamiento del icono */
			var posicionIcono = $(this).scrollTop();

			if (posicionIcono > 500) {
				$("#subo").fadeIn(2000);
			}
			else {
				$("#subo").fadeOut(2000);
			}
		});
		$("#subo").click(function(){
			$(window).scrollTop(0);
		});
		
	});