var v_nombre=document.getElementById("nombre");
var v_ape=document.getElementById("ape");
var v_edad=document.getElementById("edad");
var v_pass=document.getElementById("pass");
var v_pass2=document.getElementById("pass2");
var v_casilla=document.getElementById("casilla");
function validar(){
      if(v_nombre.value=="" || v_nombre.value.length>30){
           alert("El campo nombre no puede estar vacio ni contener mas de 30 caracteres");
           return false;
                }
      else if(v_ape.value==""){
           alert("El campo apellido no puede estar vacio");
           return false;
                }
      else if(v_edad.value=="" || v_edad.value<16 || isNaN(v_edad.value)){
           alert("El campo edad no puede estar vacio y debe ser 16 como mínimo");
           return false;
                }
      else if(v_pass.value==""){
           alert("El campo contraseña no puede estar vacio");
           return false;
                } 
      else if(v_pass2.value=="") {
           alert("El campo repite contraseña no puede estar vacio");
           return false;
                }
      else if (v_pass.value!=v_pass2.value) {
           alert("Las dos contraseñas deben coincidir");
           v_pass.value="";
           v_pass2.value="";
           return false;
                }
      else if(v_casilla.checked==false){
           alert("Debe aceptar las condiciones");
           return false;
                }
           return true;
            }
//Foco método lento
v_nombre.addEventListener("focus",foco);
v_nombre.addEventListener("blur",foco);
v_ape.addEventListener("focus",foco);
v_ape.addEventListener("blur",foco);	
function foco(event) {
	var evento = event.type;
	switch (evento) {
		case "focus":
			this.style.backgroundColor="blue";
			break;
		case "blur":
			this.style.backgroundColor="transparent";
			break;	
	}
}
//Color del formu

var v_color=document.getElementById("color");
v_color.addEventListener("change",function(){
	document.getElementById("formu").style.backgroundColor=v_color.value;
});