const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador() {
	if (gameOver) {return;}

	if (playTime == player1) {

		var player = document.querySelectorAll("div#mostrador img") [0];
		player.setAttribute("src", "../images/X.jpg");
	}else{

		var player = document.querySelectorAll("div#mostrador img") [0];
		player.setAttribute("src", "../images/O.jpg");
	}

}

function inicializarEspacos() {
	
	var espacos = document.getElementsByClassName("espaco");
	for (var i = 0; i < espacos.length; i++) {
		
		espacos[i].addEventListener("click", function(){

			if (gameOver) {return;}

			if(this.getElementsByTagName("img").length == 0){

				if (playTime == player1){

					this.innerHTML = "<img src='../images/X.jpg' height='40'>";
					this.setAttribute("jogada", player1);
					playTime = player2;
				}else{

					this.innerHTML = "<img src='../images/O.jpg' height='40'>";
					this.setAttribute("jogada", player2);
					playTime = player1;

				}
				atualizaMostrador();
				verificarVencedor();

			}
		});
	}
}

async function verificarVencedor() {

var a1 = document.getElementById("a1").getAttribute("jogada")
var a2 = document.getElementById("a2").getAttribute("jogada")
var a3 = document.getElementById("a3").getAttribute("jogada")
var a4 = document.getElementById("a4").getAttribute("jogada")
var a5 = document.getElementById("a5").getAttribute("jogada")

var b1 = document.getElementById("b1").getAttribute("jogada")
var b2 = document.getElementById("b2").getAttribute("jogada")
var b3 = document.getElementById("b3").getAttribute("jogada")
var b4 = document.getElementById("b4").getAttribute("jogada")
var b5 = document.getElementById("b5").getAttribute("jogada")

var c1 = document.getElementById("c1").getAttribute("jogada")
var c2 = document.getElementById("c2").getAttribute("jogada")
var c3 = document.getElementById("c3").getAttribute("jogada")
var c4 = document.getElementById("c4").getAttribute("jogada")
var c5 = document.getElementById("c5").getAttribute("jogada")

var d1 = document.getElementById("d1").getAttribute("jogada")
var d2 = document.getElementById("d2").getAttribute("jogada")
var d3 = document.getElementById("d3").getAttribute("jogada")
var d4 = document.getElementById("d4").getAttribute("jogada")
var d5 = document.getElementById("d5").getAttribute("jogada")

var e1 = document.getElementById("e1").getAttribute("jogada")
var e2 = document.getElementById("e2").getAttribute("jogada")
var e3 = document.getElementById("e3").getAttribute("jogada")
var e4 = document.getElementById("e4").getAttribute("jogada")
var e5 = document.getElementById("e5").getAttribute("jogada")

var vencedor = ""
//Formas Horizozntais 10
if((a3 == a2 && a3 == a1 && a3 == a4 && a3!= "") || (a3 == a4 && a3 == a5 && a3 == a2 && a3!= "")){
	vencedor = a3;

}else if((b3 == b2 && b3 == b1 && b3 == b4 && b3!= "") || (b3 == b4 && b3 == b5 && b3 == b2 && b3!= "")){
	vencedor = b3;

}else if((c3 == c2 && c3 == c1 && c3 == c4 && c3!= "") || (c3 == c4 && c3 == c5 && c3 == c4 && c3!= "")){
	vencedor = c3;

}else if((d3 == d2 && d3 == d1 && d3 == d4 && d3!= "") || (d3 == d4 && d3 == d5 && d3 == d2 && d3!= "")){
	vencedor = d3;
		
}else if((e3 == e2 && e3 == e1 && e3 == e4 && e3!= "") || (e3 == e4 && e3 == e5 && e3 == e2 && e3!= "")){
	vencedor = e3;
//Formas Verticais 10		
}else if((c1 == b1 && c1 == a1 && c1 == d1 && c1!= "") || (c1 == d1 && c1 == e1 && c1 == b1 && c1!= "")){
	vencedor = c1;
		
}else if((c2 == b2 && c2 == a2 && c2 == d2 && c2!= "") || (c2 == d2 && c2 == e2 && c2 == b2 && c2!= "")){
	vencedor = c2;
		
}else if((c3 == b3 && c3 == a3 && c3 == d3 && c3!= "") || (c3 == d3 && c3 == e3 && c3 == b3 && c3!= "")){
	vencedor = c3;
		
}else if((c4 == b4 && c4 == a4 && c4 == d4 && c4!= "") || (c4 == d4 && c4 == e4 && c4 == b4 && c4!= "")){
	vencedor = c4;
		
}else if((c5 == b5 && c5 == a5 && c5 == d5 && c5!= "") || (c5 == d5 && c5 == e5 && c5 == e5 && c5!= "")){
	vencedor = c5;
//Formas Diagonais 8		
}else if((c2 == d3 && c2 == e4 && c2 == b1 && c2!= "") || (c2 == b3 && c2 == a4 && c2 == d1 && c2!= "")){
	vencedor = c2;

}else if((d2 == c3 && d2 == b4 && d2 == e1 && d2!= "") || (d2 == c3 && d2 == b4 && d2 == a5 && d2!= "")){
	vencedor = d2;

}else if((d4 == c3 && d4 == b2 && d4 == e5 && d4!= "") || (d4 == c3 && d4 == b2 && d4 == a1 && d4!= "")){
	vencedor = d4;

}else if((c4 == d3 && c4 == e2 && c4 == b5 && c4!= "") || (c4 == b3 && c4 == a2 && c4 == d5 && c4!= "")){
	vencedor = c4;
}

if (vencedor != "") {
	gameOver = true;

	await sleep(50);

	alert("O ganhador foi o: '" + vencedor + "'")
}

}

 function sleep(ms) {

 	return new Promise(resolve => setTimeout(resolve, ms))
 }
