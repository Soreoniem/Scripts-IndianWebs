
$(document).ready(function(){
	$("h1").addClass("fondoVerde_Transparente");
	
	// Input (texto) → Quitar texto cuando hagas click en el
	$("input[type='text']").mousedown(function(boton) //Right click
	{
		$(this).val("");
	});
	
	// Quita los guines
	$("#quitarGuiones").mousedown(function(boton) //Right click
	{
		var texto = $("#textoGuiones").val();
		texto = reemplazar(texto, "-", " ");
		$("#sinGuion").text(texto);
	});
	
	// Añade los guiones
	$("#ponerGuiones").mousedown(function(boton) //Right click
	{
		var texto = $("#textoSinGuiones").val();
		texto = reemplazar(texto, " ", "-");
		$("#conGuion").text(texto);
	});
	
	// Abre la web con los idiomas junto a la query
	arrayIdiomas = ["es", "gb", "fr"];
	$("#abrirWebs").mousedown(function(boton) //Right click
	{
		var busqueda = $("#textoAbrirWebs").val();
		busqueda = reemplazar(busqueda, " ", "+");
		
		// Añadir idiomas aquí
		for( var i=0 ; i<arrayIdiomas.length ; i++ ){
			// abre la web con la búsqueda (necesita activar los popups)
			window.open("https://www.spadenicor.com/"+ arrayIdiomas[i] +"/buscar?controller=search&orderby=position&orderway=desc&search_query="+ busqueda +"&submit_search=", "_blank");
		}
	});
	
	// Introduce html para traducirlo (no traduce solo añade el html)
	$("#traducirHtml").mousedown(function(boton) //Right click
	{
		var textoHTML = prompt("Texto html", "");
		$("#ponerHTML").html(textoHTML);
	});
	
	// Botón añadir imagenes htwSpain
	$("#addImgHtwSpain").mousedown(function(){
		// Convierte en array
		var stringNumeros = $("#addImgNum").val();
		
		var caracter;
		// quita las comas
		for( var i=0 ; i<stringNumeros.length ; i++ ){
			caracter = stringNumeros.substr(i, 1);
			if( caracter == "," ){
				stringNumeros = stringNumeros.replace(",", " ");
			}
		}
		imprimirArray()
		
		var arrayNumeros = stringNumeros.split(" ");
		// quita los espacios del array sobrantes
		for( var i=0 ; i<=arrayNumeros.length ; i++ ){
			if( arrayNumeros[i] == "" ){
				arrayNumeros.splice(i, 1);
				i--;
			}
		}
		
		// combierte en enteros
		for( var i=0 ; i<arrayNumeros.length ; i++ ){
			arrayNumeros[i] = parseInt(arrayNumeros[i]);
		}
		
		//  342   438 238 42384 2842 
		
		$("#ponerHTML").html("<p></p><p></p>");
		
		for( var i=0 ; i<arrayNumeros.length ; i++ ){
			if( parseInt(arrayNumeros[i]) < 10 ){
				arrayNumeros[i] = "00"+ arrayNumeros[i];
			} else if( parseInt(arrayNumeros[i]) < 100 ){
				arrayNumeros[i] = "0"+ arrayNumeros[i];
			}
			$("#ponerHTML p").append(
				"<img title=\""+ iconosJson.iconos[parseInt(arrayNumeros[i]) -1].title +"\""+
				"src=\"http://htwspain.pruebasnet.eu/img/cms/"+ arrayNumeros[i] +".png\""+
				" alt=\""+ iconosJson.iconos[parseInt(arrayNumeros[i]) -1].alt +"\" width=\"80\" height=\"80\" />"
			);
		}
		
		// Cambiar el tamaño y los atributos
		$("#ponerHTML p:nth-child(2) img").each(function(){
			$(this).attr("width", "50");
			$(this).attr("height", "50");

			$(this).attr("title", $(this).attr("alt"));
		});
	});
});

function reemplazar(texto, quitarCaracter, ponerCaracter){
	
	for( var i=0 ; i<texto.length ; i++ ){
		if( texto.substr(i,quitarCaracter.length) == quitarCaracter ){
			texto = texto.replace(quitarCaracter, ponerCaracter);
		}
	}
	return texto
}