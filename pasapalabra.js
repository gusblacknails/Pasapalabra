


var options = [
{letter: "a",question:"Empieza por A: Que no tiene ni dios ni patria ni amo.", answer:"anarquista",doit:false},
{letter: "b",question:"Empieza por B: Año que dura 366 días.", answer:"bisiesto",doit:false},
{letter: "c",question:"Empieza por C: Sistema de división del tiempo.", answer:"calendario",doit:false},
{letter: "d",question:"Empieza por D: Tiempo que la Tierra emplea en dar una vuelta alrededor de su eje, aproximadamente veinticuatro horas.", answer:"día",doit:false},
{letter: "f",question:"Empieza por F: Mes al que se le añade un dia en los años bisiestos.", answer:"febrero",doit:false},
{letter: "g",question:"Empieza por G: Papa que da nombre a nuestro calendario actual.", answer:"gregorio",doit:false},
{letter: "h",question:"Empieza por H: El orgullo del padre.", answer:"hijo",doit:false},
{letter: "i",question:"Empieza por I: Segundo pais del mundo más habitado.", answer:"india",doit:false},
{letter: "j",question:"Empieza por J: Fiesta sin fin.", answer:"juerga",doit:false},
{letter: "k",question:"Contiene la K: El jabón de lagarto le aguanta la cresta.", answer:"punky",doit:false},
{letter: "l",question:"Empieza por A: Monstruo de las profundidades marinas.", answer:"leviatán",doit:false},
{letter: "m",question:"Empieza por M: Soso, aburrido.", answer:"muermo",doit:false},
{letter: "n",question:"Empieza por N: Que le gustan los muertos.", answer:"necrófilo",doit:false},
{letter: "ñ",question:"Contiene la Ñ: Un partido ganado con trampas.", answer:"amañado",doit:false},
{letter: "o",question:"Empieza por O: Único mamifero que pone huevos.", answer:"ornitorrinco",doit:false},
{letter: "p",question:"Empieza por P: No falta en un plato de Arguiñano", answer:"perejil",doit:false},
{letter: "q",question:"Empieza por Q: Arder, combustionar.", answer:"quemar",doit:false},
{letter: "r",question:"Empieza por R: Se rompen o se cumplen.", answer:"reglas",doit:false},
{letter: "s",question:"Contiene la S: Peor que malo.", answer:"pésimo",doit:false},
{letter: "t",question:"Empieza por T: Para algunos existe.", answer:"teruel",doit:false},
{letter: "u",question:"Empieza por U: Dícese del que es muy de ciudad.", answer:"urbanita",doit:false},
{letter: "v",question:"Empieza por V: Contrario de cobarde.", answer:"valiente",doit:false},
{letter: "w",question:"Empieza por W: La cama en el techo de las furgonetas.", answer:"westfalia",doit:false},
{letter: "x",question:"Contiene la X: El que tiene el oficio de disecar.", answer:"taxidermista",doit:false},
{letter: "y",question:"Empieza por Y: La marca del diapasón.", answer:"yamaha",doit:false},
{letter: "z",question:"Empieza por Z: Duro de mollera.", answer:"zoquete",doit:false}];




function rosco (letra,pregunta,respuesta,doit){
	var pregunta_en_juego=pregunta;
	var respuesta_en_juego= respuesta;
	var letter_en_juego= letra;
	var doit_en_juego= doit;
	var question_rosco =document.getElementById('answer').value;
	if (question_rosco==respuesta_en_juego){
		doit_en_juego=true;

	}

}


function begin_game (){

	var letra_en_juego = options[0].letter;
	var pregunta_en_juego = options[0].question;
	var respuesta_en_juego = options[0].answer;
	var check_en_juego= options[0].doit;
	if (check_en_juego===false){
	document.getElementById(options[0].letter).style.backgroundColor = "#b8995c";
	document.getElementById("question").innerHTML = pregunta_en_juego;
	/*rosco(letra_en_juego,pregunta_en_juego,respuesta_en_juego,check_en_juego);*/
	}
	
}
function arriesgar () {
    var letra_en_juego = options[0].letter;
	var pregunta_en_juego = options[0].question;
	var respuesta_en_juego = options[0].answer;
	var check_en_juego= options[0].doit;
	var question_rosco =document.getElementById('answer').value;
	if (question_rosco==respuesta_en_juego ){
		/*doit_en_juego=true;*/
		document.getElementById(options[0].letter).style.backgroundColor = "#5cb860";
		
		modify_qty(2);

	}
	else {
		document.getElementById(options[0].letter).style.backgroundColor = "#b85c5c";
		modify_qty(-1);

	}
    
	options.shift();
	document.getElementById('answer').value = "";
	begin_game();
	

}
function pasapalabra () {
    var letra_en_juego = options[0].letter;
	var pregunta_en_juego = options[0].question;
	var respuesta_en_juego = options[0].answer;
	var check_en_juego= options[0].doit;
	document.getElementById(options[0].letter).style.backgroundColor = "#5ca9b8";
	options.push(options[0]);
	options.shift();
	document.getElementById('answer').value = "";
	begin_game();
	

}
function modify_qty(val) {
    var qty = document.getElementById('points').innerHTML;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('points').innerHTML = new_qty;
    return new_qty;
}


	
