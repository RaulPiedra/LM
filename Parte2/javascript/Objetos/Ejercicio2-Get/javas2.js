var v_enlaces = document.getElementsByTagName("a");
v_enlaces[0].style.backgroundColor="red";
v_enlaces[1].style.backgroundColor="red";
v_enlaces[2].style.backgroundColor="red";
v_enlaces[3].style.backgroundColor="green";
v_enlaces[4].style.backgroundColor="red";
v_enlaces[5].style.backgroundColor="red";
v_enlaces[6].style.backgroundColor="navy";
v_enlaces[7].style.backgroundColor="red";
v_enlaces[8].style.backgroundColor="blue";


for (var i = 0; i < v_enlaces.length; i++) {
    v_enlaces[i].style.backgroundColor="transparent";
}

for (var i = 0; i < v_enlaces.length; i++) {
    if (i % 2 == 0) {
        v_enlaces[i].style.backgroundColor="red";
    }
    else {
        v_enlaces[i].style.backgroundColor="blue";
    }
}


