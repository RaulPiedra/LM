var v_imagenes=document.getElementsByTagName("img");
var v_botones=document.getElementsByTagName("input");
v_botones[0].addEventListener("click",cambiaImagen1);
v_botones[1].addEventListener("click",cambiaImagen2);
v_botones[2].addEventListener("click",cambiaImagen3);
function cambiaImagen1(){
	v_imagenes[0].style.zIndex="5";
	v_imagenes[1].style.zIndex="1";
	v_imagenes[2].style.zIndex="1";
	v_botones[0].style.textDecoration="underline";
	v_botones[0].style.textDecorationColor="black";
	v_botones[1].style.textDecoration="none";
	v_botones[2].style.textDecoration="none";	
}
function cambiaImagen2(){
	v_imagenes[0].style.zIndex="1";
	v_imagenes[1].style.zIndex="5";
	v_imagenes[2].style.zIndex="1";
	v_botones[1].style.textDecoration="underline";
	v_botones[1].style.textDecorationColor="black";
	v_botones[0].style.textDecoration="none";
	v_botones[2].style.textDecoration="none";
}
function cambiaImagen3(){
	v_imagenes[0].style.zIndex="1";
	v_imagenes[1].style.zIndex="1";
	v_imagenes[2].style.zIndex="5";
	v_botones[2].style.textDecoration="underline";
	v_botones[2].style.textDecorationColor="black";
	v_botones[0].style.textDecoration="none";
	v_botones[1].style.textDecoration="none";
}