var boton = document.getElementById("agregar");
boton.addEventListener("click", agregarTarea);

//Codigo que valida y agrega tareas
function agregarTarea(){

	var valorTarea = document.getElementById("tarea").value;
	
	if(valorTarea == 0){
		alert("Escribe la tarea");
		return false;
	} else {
		
		var listaUl = document.getElementById("myUl"); //Trayendo UL
		
		var lista = document.createElement("LI"); // Creando LI
		var check = document.createElement("input"); //Creando input
		check.setAttribute("type", "checkbox"); // Definiendo checkbox
		
		var textoArea = document.createTextNode(valorTarea); //Haciendo nodo el texto 
		var pe = document.createElement("p");
		var spanTrash = document.createElement("span"); //Creando Span
		spanTrash.classList.add("glyphicon", "glyphicon-trash"); //Agregando icono
		// Usando appendChild();
		pe.appendChild(textoArea);
		lista.appendChild(check);
		lista.appendChild(pe);
		lista.appendChild(spanTrash);

		listaUl.appendChild(lista);

		spanTrash.onclick = function() {
			lista.parentNode.removeChild(lista);
		};
		
		check.onclick = function(){
			pe.classList.toggle("subrayar");
		};
	
	}
	
	document.getElementById("tarea").value = ""; //Quitando el valor de textarea

}
