var boton = document.getElementById("agregar");
boton.onclick = function () {agregarTarea()};
function agregarTarea(){
	var valorTarea = document.getElementById("tarea").value;
	if(valorTarea == 0){
		alert("Actividad inválida");
		return false;
	} else{
		crearTarea(valorTarea);
	}
}

function crearTarea(tarea){
	tarea = document.createTextNode(tarea);
	var pre = document.getElementById('Pre');
	var parrafo = document.createElement("p");
	var checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	var elimina = document.createElement("i");
	elimina.classList.add('glyphicon', 'glyphicon-trash');
	parrafo.appendChild(checkbox);
	parrafo.appendChild(tarea);
	parrafo.appendChild(elimina);
	pre.appendChild(parrafo);
	if(checkbox.onclick){
		tacharTarea()
	}
}
// function crearTarea(actividad){
// 	var pre = document.getElementById('Pre'); //Obteniendo PRE
// 	var lista = document.createElement("p");
// 	var checkbox = document.createElement("input");
// 	actividad = document.createTextNode(actividad);
// 	checkbox.setAttribute("type", "checkbox"); //Creando el checkbox
// 	//checkbox.addEventListener("click", tacharTarea(actividad)); //Agregando evento a checkbox
// 	var elimina = document.createElement("i");
// 	elimina.classList.add('glyphicon', 'glyphicon-trash'); //Creando icono de eliminar
// 	lista.appendChild(checkbox);
// 	lista.appendChild(actividad);
// 	lista.appendChild(elimina);
// 	pre.appendChild(lista);
// }
// function tacharTarea(subrayado){
// 	var tachar = document.createElement("del");
// 	tachar.appendChild(subrayado);
// }