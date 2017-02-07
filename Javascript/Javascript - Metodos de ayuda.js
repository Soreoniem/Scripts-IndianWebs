/**
	Metodos de ayuda versión: 3.1
	© Copyright 2058, JuanLu Corp.
	
	• error()		necesita mínimo versión 3 (cambio parametros)
	• aleatorio()	necesita mínimo versión 3 (cambio de nombre)
*/
// Math.* w3schools		→ w3schools.com/js/js_math.asp
// Typeof				→ developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/typeof

/* ╔═══♦ Acciones con ratón y teclas ♦═══╗

	✪ No seleccionar	→ <body onselectstart="return false"  ondragstart="return false">

	✪ Saber el botón pulsado: event.which
		event.which == 1 → Botón Izquierdo
		event.which == 2 → Botón Central
		event.which == 3 → Botón Derecho

	✪ Detectar tecla w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode2
		event.which = 13

*/

/* ╔═══♦ INFO: Metodos ♦═══╗

__Metodos__
 	✪ alinearImagen_Horizontal│alinearImagen_Horizontal│alinearImagen = function( imagen )
		► imagen	▬ (<etiqueta/>)	debe pasarse un tag de imagen de Jquery.

		📖 Ejemplo:	 activarDesactivar_Forzar( $("#cabecera img") );

		NOTA:
			1. Horizontal:	Centra la imagen en Horizontal.
			2. Vertical:	Centra la imagen Verticalmente.
			2. Normal:		Centra la imagen Vertical y Horizontalmente.
 */
 
// ╔═══♦ Ejecutar ♦═══╗
/**
	Inicializa Jquery
*/
$(document).ready(function(){
	// Comentar: DesActivar
	// DesComentar: Activar
	
	/* Iniciar el Gif de carga (imagen)
		// Metodos para usarlo
			// • imagenCarga(); para mostrar/ocultar el gif.
		iniciarConfiguraciónGIFCarga();
	// */
});


// ╔═══♦ Variables (html) ♦═══╗

	// Crea una tabulación
	TAB = "<span style=\"padding-left:2em;\"></span>";
	
	// Crea un nuevo espacio de línea
	ENTER = "<br/>";


// ╔═══♦ Metodos ♦═══╗


/* ✪ remCookie( variable )
	INFO:
		• Permite eliminar una cookie del navegador web;
		
		► (variable):	(String)	Nombre de la variable cookie a eliminar.
		
		📖 Ejemplo 1:	remCookie( "variable" );
*/
remCookie = function( variable ){
	// Comprueba: variable
	if( this.comprobarVariable(variable) != "string" ){
		this.error("El parametro debe ser de tipo string (texto)",
		"remCookie(<u>variable</u>)",
			"variable", variable );}
	
	// Se actualizará la cookie con una fecha caducada para eliminarla.
	else {
		document.cookie = variable +"=; expires=Thu, 11 Jan 1992 00:00:00 UTC";
	}
}

/* ✪ setCookie( variable, valor )
	INFO:
		• Permite añadir una variable cookie al navegador.
		
		► (variable):	(String)	Nombre de la variable cookie.
		► (valor):					Valor de la variable.

		📖 Ejemplo:	setCookie( "usuario", "Juan Luis" );
*/
setCookie = function( variable, valor ){
	 // Se almacenará la nueva cookie
	if( this.comprobarVariable(variable, "string") ){
		document.cookie = variable +"="+ valor; }
	
	else {
		this.error("El 1r parametro debe ser de tipo string",
		"setCookie(<u>variable</u>, valor)",
			"variable", variable); }
}

/* ✪ getCookie( variable )
	INFO:
		• Obtiene una variable cookie del navegador.
		
		► (variable):	(String)	Nombre de la variable cookie.
		◄ Return:		(String)	Valor de la variable.

		📖 Ejemplo:	getCookie( "usuario" )
*/
getCookie = function( variable ){
	// Comprueba: variable
	if( this.comprobarVariable(variable) != "string" ){
		this.error("El parametro debe ser de tipo string",
			"getCookie(<u>variable</u>)",
			"variable", variable); }
	
	// Se procederá a encontrar la cookie
	else {
		var nombre = variable + "=";
		var cookieArray = document.cookie.split(';');
		for( var i=0 ; i<cookieArray.length ; i++ ) {
			var c = cookieArray[i];
			
			while( c.charAt(0)==' ' ){
				c = c.substring(1);
			}
			if( c.indexOf(nombre) == 0 ) {
				return c.substring(nombre.length, c.length);
			}
		}
		// Si no se encuentra la cookie lanzará un error
		this.error("La cookie \""+ variable +"\" no existe.");
	}
}

/* ✪ comprobarVariable( variable, tipoVariable )
	INFO:
		• Comprueba de que tipo es la variable.
		• Puede comparar la variable con un tipo específico.
		
		► (variable):		Valor de la variable.
		► (tipoVariable):	(opcional) (String)	"boolean", "number", "string", "Array", "null" o "undefined"
		◄ Return:			true, false o texto.

		📖 Ejemplo 1:	comprobarVariable( miVariable )
		📖 Ejemplo 2:	comprobarVariable( miVariable, "number" )
	
	NOTA:
		El primer parametro devolverá de que tipo es ("boolean", "number", etc.)
		Si le pasas 2 parametros comparará el 1r parámetro con el segundo devolviendo true o false.
*/
comprobarVariable = function(variable, tipoVariable){
	
	// Sobrecarga function(variable)
	if( tipoVariable === undefined ){
		var resultado;
		
		if( variable === undefined ){
			return "undefined";
		} else if( variable === null ){
			return "null";
		} else if( variable instanceof Array ){
			return "Array";
		} else {
			return typeof variable + "";
		}
	}
	
	// Comprueba: "tipoVariable"
	if( typeof tipoVariable != "string" ){
		this.error("Necesita ser de tipo texto: \"boolean\", \"number\", \"string\", \"Array\", \"null\" o \"undefined\".",
		"comprobarVariable(variable, <u>ti</u>p<u>oVariable</u>)",
			"tipoVariable", tipoVariable); }
	
	// Parametros correctos
	else {
		if( variable === null && tipoVariable == "null"){
			return true;
		
		} else if( variable instanceof Array && tipoVariable == "Array"){
			return true;
		}
		
		if( typeof variable != tipoVariable ) {
			if(tipoVariable != "boolean" && tipoVariable != "number"
				&& tipoVariable != "string" && tipoVariable != "Array"
				&& tipoVariable != "null" && tipoVariable != "undefined"){
				this.error("Necesita ser de tipo texto: \"boolean\", \"number\", \"string\", \"Array\", \"null\" o \"undefined\".",
				"comprobarVariable(variable, <u>ti</u>p<u>oVariable</u>)",
					"tipoVariable", tipoVariable); }
			
			return false; }
		
		else { return true; }
	}
};

/* ✪ error( mensaje, cabecera, nombreVariable, valorVariable )
	INFO:
		• Muestra un mensaje al inicio del body.
		• Puede mostrar solo un mensaje.
		• Puede mostrar un mensaje con cabecera.
		• Puede mostrar un mensaje con cabecera y mostrar la variable que ha dado error.
		
		► (mensaje):		(String)	Mensaje de error.
		► (cabecera):		(opcional)	Cabecera del error.
		► (nombreVariable):	(opcional)	nombre de la variable.
		► (valorVariable):	(opcional)	valor de la variable.
		Return:				(html)		Muestra el error.

		📖 Ejemplo 1:	error("Mensaje de error");
		📖 Ejemplo 2:	error("Mensaje de error", "Cabecera");
						error("Mensaje de error", 503);
		📖 Ejemplo 4:	error("Mensaje de error", "Cabecera", "miVariable", miVariable);
	
	NOTA:
		• Solo se permite usar 1, 2 o 4 parametros 5 o más se ommite.
*/
error = function(mensaje, cabecera, nombreVariable, valorVariable){
	 // 0 Parametros
	if( comprobarVariable(mensaje, "undefined") ){
		this.error("Debes pasar como mínimo un mensaje. Parametros necesarios: 1, 2 o 4",
			"error(<u>mensa</u>j<u>e</u>, cabecera, nombreVariable, valorVariable)",
			"mensaje", "vacío");
	
	 // 1 Parametro: Mensaje
	} else if( comprobarVariable(cabecera, "undefined") )  {
		$("body").prepend(
			"<p style=\"border: dashed 2px red; background-color: whitesmoke;\">"
				+"<b>• Error:</b> <i>"+ mensaje +"</i>"
			+"</p>"
		);
	
	 // 2 Parametros: Mensaje y Cabecera
	} else if( comprobarVariable(nombreVariable, "undefined") ){
		$("body").prepend(
			"<p style=\"border: dashed 2px red; background-color: whitesmoke;\">"
			+"<b>• Error:</b> "+ cabecera + this.ENTER
				+ this.TAB + "<i>"+ mensaje +"</i>"
			+"</p>"
		);
	
	 // 3 Parametros: Error (solo 1, 2 y 4 parametros)
	} else if( comprobarVariable(valorVariable, "undefined") ){
		this.error("Has pasado 3 parametros. Parametros necesarios: 1, 2 o 4",
			"error(mensaje, cabecera, <u>nombreVariable</u>, valorVariable)",
			"nombreVariable", nombreVariable);
	} else {
		$("body").prepend(
			"<p style=\"border: dashed 2px red; background-color: whitesmoke;\">"
			+"<b>• Error:</b> "+ cabecera + this.ENTER
				+ this.TAB + nombreVariable +" = '"+ valorVariable +"' ("+ this.comprobarVariable(valorVariable) +")"+ this.ENTER
				+ this.TAB + "<i>"+ mensaje +"</i>"
			+"</p>"
		);
	}
};

/* ✪ aleatorio( ale1, ale2 )
	INFO:
		• Devuelve un aleatorio de lo que le pasen por parametro.
		• Puede un aleatorio de: boleano, numero, palabra, caracteres, grupo de caracteres y Array
		
		► (ale1):	(opcional)	Admite cualquier dato.
		► (ale2):	(opcional)	Admite cualquie dato.
		◄ Return:	Devuelve el dato aleatorio pedido.
		
		📖 Ejemplo 0:	aleatorio()
		📖 Ejemplo 1:	aleatorio(true)
						aleatorio("mi frase")
						aleatorio(-16)
						aleatorio(["mi", 8, "array", Math.PI])
						aleatorio(null)
						aleatorio(undefined)
		📖 Ejemplo 2:	aleatorio(-16, 17)
		📖 Ejemplo 2:	aleatorio("mi frase", 3)
	
	NOTA:
		Null:
			• Sin parametros devolverá un número del 1 al 100.
		Undefined:
			• Si es null devolverá un número deñ 1 al 50.
		Boolean:
			• Si es true devolverá un aleatorio con true o false.
		String:
			• Si es una frase devolverá una palabra.
			• Si es una frase y tiene un 2º parámetro:
				• Obtiene carácteres y el segundo parámetro es la cantidad consecutiva.
				• El primer carácter es el aleatorio.
		Number:
			• Con 1 parámetro sevolverá de 0 al número especificado.
			• Con 2 parámetros devolverá del 1r al 2º parametro independientemente del orden de los parámetros.
		Array:
			• Devuelve un aleatorio del contenido del array.
*/
aleatorio = function(ale1, ale2){
	var tipoAle1	= this.comprobarVariable(ale1);
	var tipoAle2	= this.comprobarVariable(ale2);
	
	// Quita los espacios extra si me pasan un string
	if( tipoAle1 == "string" ){
		// crea un array con las palabras
		var palabras	= ale1.split(" ");
		
		// Elimina los huecos vacíos del array creados por los espacios
		for( var i=(palabras.length -1) ; i>=0 ; i-- ){
			// Si hay un hueco vacío lo elimina
			if( palabras[i] == "" ){ palabras.splice(i, 1)};
		}
		
		// restaura la frase
		ale1	= palabras.join(" ");
	}
	
	// Si me pasan un booleano como 2º parametro el aleatrio máximo es 2
	if( tipoAle2 == "boolean" ){ ale2	= 2; }
	
	// Si es string o array uso el .length para el máximo
	else if( tipoAle2 == "string"
		|| tipoAle2 == "Array" ){
		ale2	= ale2.length; }
	
	// Si el 2º parámetro es null su máximo será de 50
	else if( tipoAle2 == "null" ) { ale2	= 50; }
	
	// Si el 2º parámetro es undefined su máximo será de 100
	else if( tipoAle2 == "undefined" ) { ale2	= 100; }
	
	// aleatorio de boleanos
	if( tipoAle1 == "boolean" ){
		var aleatorio	= parseInt(Math.round(Math.random() * ((2 - 1 +1) - 1) + 1));
		return (aleatorio == 1) ? true : false; }
	
	// aleatorio de palabras
	else if( tipoAle1 == "string"
		&& tipoAle2 == "undefined" ) {
		
		// crea un array con las palabras
		var palabras	= ale1.split(" ");
		var aleatorio	= parseInt(Math.round(Math.random() * (((palabras.length -1) - 0 +1) - 1) + 0));
		
		// devuelve la palabra aleatoria
		return palabras[aleatorio]; }
	
	 // aleatorio de caracteres
	else if( tipoAle1 == "string" ) {
		var aleatorio	= parseInt(Math.round(Math.random() * (((ale1.length -1) - 0 +1) - 1) + 0));
		return ale1.substr(aleatorio, ale2); }
	
	 // Aleatorio de números
	else if( tipoAle1 == "number" ) {
		 // 1 parametro (0 → x)
		if( this.comprobarVariable(ale2, "undefined") ){
			return parseInt(Math.round(Math.random() * ((ale1 - 0 +1) - 1) + 0)); }
		
		 // 2 parametros (ale1 → ale2)
		else if( this.comprobarVariable(ale2, "number") ){
			return parseInt(Math.round(Math.random() * ((ale2 - ale1 +1) - 1) + ale1)); }
		
		 // error parametro 2 numerico
		else {
			this.error(
				"El parametro 2 debe ser numerico (2º parametro opcional)",
				"aleatorio(ale1, <u>ale2</u>)"
			); }
	}
	
	 // Aleatorio de Array
	else if( tipoAle1 == "Array" ) {
		var aleatorio	= parseInt(Math.round(Math.random() * (((ale1.length -1) - 0 +1) - 1) + 0));
		return ale1[aleatorio]; }
	
	 // Aleatorio de null (1 → 50) y de undefined (1 → 100)
	else if( tipoAle1 == "null"
		|| tipoAle1 == "undefined" ) {
		var aleatorio	= parseInt(Math.round(Math.random() * ((ale2 - 1 +1) - 1) + 1));
		return aleatorio; }
	
	else {
		this.error(
			"Se necesita 1 parametro",
			"aleatorio(<u>ale1</u>, ale2)"
		);
	}
};

/* Este metodo se debe activar arriba en Ejecutar JQuery
	INFO:
		• Permite usar un gif de cargando.
		• Luego se puede usar el método imagenCarga() para activar y desactivar el gif
		• Este gif se mostrará en el centro de la página sin estorbar al código.
	
	Requisitos:
		• Carpeta Imgs al lado del html.
		• cargando.gif dentro de la carpeta Imgs
		• activar cada vez que la pagina inicie (iniciar con JQuery).
*/
iniciarConfiguraciónGIFCarga = function(){
// HTML
	// Añade el div donde se almacenará la imagen (no molesta al codigo)
	$("body").prepend(
			"<div id=\"imagenCarga\">"
			+"<img src=\"./Imgs/cargando.gif\"/>"
			+"</div>"
	)

		// Añade su código CSS
		// Aquí se cambia el CSS del gif de carga
		.append(
			"<style>"
			+"#imagenCarga {"
			+"width: 100%;"
			+"height: 100%;"
			+"background-color: rgba(255, 255, 255, 0.3);"

			+"position: absolute;"
			+"z-index: 100;"
			+"animation: blinker 1s linear infinite; }"

			+"@keyframes blinker{ 50% { opacity: 0.5; } }"

			+"#imagenCarga img{"
			+"width: 20%;"
			+"min-width: 0px;"
			+"max-width: 200px;"
			+"position: absolute;"

			+"top: 40%;"
			+"left: 40%;"
			+"border-radius: 100%; }"
			+"</style>"
		);

// Ocultar
	$("#imagenCarga, #imagenCarga img").css("opacity", "0");
	cargando = $("#imagenCarga");

// Añadir estado para ocultar
	cargando.data("estado", false)
		.css("width", "0%")
		.css("height", "0%");
};

/* ✪ imagenCarga()
	INFO:
		• Activa / DesActiva el gif de cargando cada vez que se le llama.
		• Cada vez que se llama al metodo cambia el estado del gif.
		
		►◄ Sin parametros de entrada o salida: Solo muestra u oculta el gif.

		📖 Ejemplo 0:	imagenCarga();
		
		Requisitos:
			• Es necesario activar antes la función iniciarConfiguraciónGIFCarga()
				en la parte de Iniciar Jquery (arriba).

		NOTA:
			1. (1 vez) Requiere ejecutar antes la función iniciarConfiguraciónGIFCarga().
*/
imagenCarga = function(){
	// Obtención de datos
	var cargando	= $("#imagenCarga");
	var cargandoImg	= $("#ImagenCarga img")
	var estado		= $("#imagenCarga").data("estado");

	// Comprobar: Si se ha iniciado antes iniciarConfiguraciónGIFCarga()
	if( estado != true && estado != false){
		this.error("Se requiere iniciar antes el método <u> iniciarConfi</u>g<u>uraciónGIFCar</u>g<u>a() </u>",
			"imagenCarga()");}

	else {
		// Desactivar cargando
		if(estado) {
			cargando.data("estado", false);
			// apagando
			$("#imagenCarga, #imagenCarga img").animate({
				opacity: 0
			}, 1000, function() {
				cargando.css("width", "0%")
					.css("height", "0%");
				cargandoImg.css("min-width", "0px");
			});}
		
		// Activar cargando
		else {
			cargando.data("estado", true);
			cargando.css("width", "100%")
				.css("height", "100%");
			cargandoImg.css("min-width", "100px");
			// iniciando
			$("#imagenCarga, #imagenCarga img").animate({
				opacity: 1
			}, 1500, function() {
			});
		}
	}
};

/* ✪ imprimirArray( arrayDatos, modo|titulo, titulo )
	INFO:
		• Permite imprimir un array.
		• Puede imprimir el array por alert(), console.log(), o por html.
		• Se le puede poner un título cuando se imprime.
		
		► (arrayDatos):	Array.
		► (modo):		(opcional) "alert", "console", "html".
		► (titulo):		(opcional) Título.
		Return:	Imprime el array por: alert, console.log o html (alert por defecto)
		
		📖 Ejemplo 1:	imprimirArray( miArray );
		📖 Ejemplo 2:	imprimirArray( miArray, "console" );
						imprimirArray( miArray, "mi título" );
		📖 Ejemplo 3:	imprimirArray( miArray, "html", "mi Título" );
	
	NOTA:
		El 2º parámetro se usa para el modo o el título.
		Si añades un modo puedes añadir tu título en el 3r parámetro.
*/
imprimirArray	= function( arrayDatos, modo, titulo ){
	var saltoLinea	= "\n"
	
	if( modo == "html" ){
		saltoLinea	= "<br/>";
	}
	 // Error: necesario Array
	if( comprobarVariable(arrayDatos) != "Array" ){
		console.log("Error: no array");
		this.error("El primer parametro debe ser de tipo Array",
			"imprimirArray(<u>arra</u>y<u>Datos</u>)",
			"arrayDatos", arrayDatos)
		;
	}
	
	 // 1 parametro (solo array)
	if( comprobarVariable(titulo, "undefined")
	&& comprobarVariable(modo, "undefined") ){
		titulo		= "";
		modo		= "alert";
	
	 // 2 parametros (array y título)
	} else if( comprobarVariable(titulo, "undefined") ){
		 // 2 parametros (array y título)
		 // palabras reservadas: alert, console y html (formas de imprimir)
		if( modo == "alert"
		 || modo == "console"
		 || modo == "html" ){
			titulo	= "";
		
		// 2 parametros (array y modo)
		} else {
			titulo	= modo;
		}
	}
	
	// Comprobar: arrayDatos
	if( comprobarVariable(arrayDatos, "Array") ){
		
		// titulo
		var imprimir = titulo + saltoLinea +"┌";
		
		// línea 1
		for( var x=1 ; x<titulo.length ; x++ ){
			imprimir = imprimir + "─";
		}
		// Espacios a la izquierda de los números
		// este es un caracter y no un espacio (Caracter Ascii 255)
		var espacio = " ";
		// array
		if( arrayDatos.length>0 ){
			for( var x=0 ; x<arrayDatos.length ; x++ ){
				imprimir	= imprimir + saltoLinea +"│ ";
				
				for( var y=0 ; y<(((arrayDatos.length -1) +"").length - (x +"").length)  ; y++ ){
					imprimir	= imprimir + espacio;
				}
				
				imprimir = imprimir + x +" [►"+ arrayDatos[x] +"◄]";
			}
		}
		
		// línea 2
		imprimir = imprimir + saltoLinea +"└";
		for( var x=1 ; x<titulo.length ; x++ ){
			imprimir = imprimir + "─";
		}
		
		// alert final
		if( modo == "alert" ){
			alert(imprimir)
		} else if( modo == "console" ) {
			console.log(imprimir);
		} else if( modo == "html" ) {
			$("body").append(
				"<div class=\"imprimirArray\" style=\"text-align: left;\">"
					+ imprimir
				+"</div>"
			);
			
		} else {
			alert(imprimir);
		}
	}
};

/* ✪ regla3( num, otroNum, maxOtroNum )
		► num			▬ (Número)	Numero que se quiere obtener el máximo.
		► otroNum		▬ (Número)	El otro numero que sabes el máximo.
		► maxOtroNum	▬ (Número)	El máximo del otro numero.
		◄ return		▬ (Número)	Devuelve el máximo del numero objetivo.

		📖 Ejemplo:	regla3(50, 500, 200);

		NOTA:
			• Si el máximo de 500 es 200.
				el máximo de 50 es 20.
	
	INFO: Formula de la regla de 3.
*/
regla3 = function(num, otroNum, maxOtroNum){
	// Comprobar: num
	if( comprobarVariable(num, "number") == false ){
		this.error("regla3(<u>num</u>, otroNum, maxOtroNum)",
			"num", num,
			"El primer parametro no es numérico.");}
	
	// Comprobar: otroNum
	else if( comprobarVariable(otroNum, "number") == false ){
		this.error("regla3(num, <u>otroNum</u>, maxOtroNum)",
			"otroNum", otroNum,
			"El segundo parametro no es numérico.");}
	
	// Comprobar: maxOtroNum
	else if( comprobarVariable(maxOtroNum, "number") == false ){
		this.error("regla3(num, otroNum, <u>maxOtroNum</u>)",
			"maxOtroNum", maxOtroNum,
			"El tercer parametro no es numérico.");}
	
	// Parametros correctos
	else {
		return num * maxOtroNum / otroNum;
	}
}

/* ✪ regla3_100( numero, numMax )
		► numero	▬ (Número)	Numero a comprobar.
		► numMax	▬ (Número)	Número maximo que sería el 100.
		◄ return	▬ (Número)	Resultado.

		📖 Ejemplo:	regla3_100(15, 30);

		NOTA:
			1. Solo dará el número y no el signo de porcentaje(%).
			2. regla_100(15, 30) dará 50%.
	
	INFO: Es la regla de 3 pero el resultado se dará a escala de 0 a 100.
*/
regla3_100 = function(numero, numMax){
	// Comprobar: numero
	if( comprobarVariable(numero, "number") == false ){
		this.error("regla3_100(<u>numero</u>, maximo)",
		"numero", numero,
		"El primer parametro no es numérico.");}
	
	else if( comprobarVariable(numMax, "number") == false ){
		this.error("regla3Porciento(<u>numMax</u>, numero)",
		"numMax", numMax,
		"El segundo no es numérico.");}
	
	else { return numero * 100 / numMax;}
};

// !! En proceso de mejora
alinearImagen = function(tagImagen){
	alinearImagen_Horizontal(tagImagen);
	alinearImagen_Vertical(tagImagen);
};

// !! En proceso de mejora
alinearImagen_Horizontal = function(tagImagen){
	var anchoImagen = tagImagen.outerWidth();
	var anchoPadre = tagImagen.parent().width();

	// Imagen más pequeña que el padre pequeña
	if( anchoPadre > anchoImagen ){
		var margenH = ((anchoPadre - anchoImagen) /2);

		tagImagen.css("margin-left", margenH +"px");
		tagImagen.css("margin-right", margenH +"px");
	}
};

// !! En proceso de mejora
alinearImagen_Vertical = function(tagImagen){
	var altoImagen = tagImagen.height();
	var altoPadre = tagImagen.parent().height();

	// Imagen más pequeña que el padre pequeña
	if( altoPadre > altoImagen ){
		var margenV = ((altoPadre - altoImagen) /2);

		tagImagen.css("margin-top", margenV +"px");
		tagImagen.css("margin-bottom", margenV +"px");
	}
};

/** Datos de Versiones

►	Versión: 3.1
	• Metodos actualizados:
		· alertArray → renombrado a imprimirArray();
	
	• Metodos creados:
		· imprimirArray
			Ahora es capáz de:
				imprimir array.
				indicar como imprimir (alert, console.log o html).
				añadir un título.
	
	+ correcciones menores.
	Mejora de la comprensión de los metodos (mejor explicación y uso)

►	Versión: 3
	• Metodos actualizados:
		· comprobarVariable → Ahora tiene sobrecarga.
			1 parametro: devuelve de que tipo es "number", "string", etc.
			2 parametros: devuelve true o false.
			Los parametros han cambiado de lugar (no genera errores de anteriores versiones)
		
		· alertArray → Ahora tiene sobrecarga.
			1 parametro: imprime el array.
			2 parametros: imprime el array con un título.
		
		· error → Ahora tiene sobrecarga.
			Se ha cambiado el orden de los parametros.
			1 parametro: devuelve un mensaje.
			2 parametro: devuelve un mensaje y cabecera.
			4 parametro: devuelve un mensaje y cabecera + errores del valor.
		
		· nuevoAleatorio → renombrado a aleatorio()
	
	• Metodos creados:
		· aleatorio
			Cualquiera de los 2 parametros admite cualquier tipo de valor (numerico, boleano, etc.)
			El parametro 2 es opcional.
			Puede dar aleatorios de:
				1. Booleanos		(true / false)
				2. Numerico:
					1 parametro		(valor de 0 al parametro)
					2 parametros	(valor de parametro 1 al 2)
				3. String
					1 parametro		(devuelve 1 palabra)
					2 parametros	(devuelve un caracter y el parametro 2 será la longitud)
				4. Array			(valor del array aleatorio)
				5. null				(valor de 1 a 4)
				6. undefined		(valor de 1 a 9)

►	Versión: 2.4.1
	• Metodos eliminados:
		· activarDesactivar( etiqueta );
		· activarDesactivar_Forzar( etiqueta );
			· Pensaré una mejor forma para evitar
				que el parametro sea solo con JQuery.
	
	• Metodos actualizados:
		· imprimirArray → renombrado a alertArray.
	
	• Se ha cambiado la estructura de comentarios
		· Ahora se ponen encima de cada metodo

►	Versión: 2.3.2
	• Metodos creados:
		· getCookie.
		· setCookie.
		· remCookie.

►	Versión: 2.3.1
	• Mejorada la "interfaz" del documento.

►	Versión: 2.3
	• Metodos creados:
		· alinearImagen.
		· alinearImagen_Horizontal.
		· alinearImagen_Vertical.

◄	Versión: 2.2
	• Metodos creados:
		· activarDesactivar.
		· activarDesactivar_Forzar.

◄	Versión: 2.1
	• Control de errores.
	• Eliminada lafución error(param1, param2):
	No se pueden tener 2 con diferentes parametros

◄	Versión: 2.0
	• Control de errores.
	• añadidas las funciónes:
		1. imprimirArray
		2. error version reducida
		3. regla3 y regla3Porciento
		4. Nuevo gif de carga: Ahora solo es necesario activar y usar el metodo
	(ya se incluye el CSS y HTML necesarios)
	• Añadida la funcionalidad de Array a la función comprobarVariable
*/