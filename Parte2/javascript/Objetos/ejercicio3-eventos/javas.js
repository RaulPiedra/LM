//Capturar las variables
var v_boton1=document.getElementById("boton1");
var v_boton11=document.getElementById("boton11");
var v_boton2=document.getElementById("boton2");
var v_boton3=document.getElementById("boton3");
var v_boton4=document.getElementById("boton4");
var v_boton5=document.getElementById("boton5");
var v_imagen=document.getElementById("imagen");
var v_texto=document.getElementById("texto");
//Poner las variables a la escucha de los eventos
v_boton1.addEventListener("click",pulsado);
v_boton2.addEventListener("dblclick",doblepulsado);
v_boton3.addEventListener("mouseover",encima);
v_boton4.addEventListener("mouseout",fuera);
v_boton5.addEventListener("contextmenu",derecho);
v_imagen.addEventListener("drag",arrastrar);
v_texto.addEventListener("copy",copiar);
function pulsado(){
	alert("Has hecho click en el b1");
}
function doblepulsado(){
	alert("Has hecho doble click en el b2");
}
function encima(){
	alert("Has pasado el botón por encima del b3");
}
function fuera(){
	alert("Has salido del b4");
}
function derecho(){
	alert("Has hecho click con el derecho");
}
function arrastrar(){
	alert("Has arrastrado la imagen");
}
function copiar(){
	alert("Has copiado el texto");
}
/*con función anónima, */
v_texto=addEventListener("click",function(){;/*entre los corchetes irá lo que hace*/	
	alert("Has hecho click en el texto");
});
function clicc(){
	alert("Has hecho click en el botón 11");
}




