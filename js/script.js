var nbCase = prompt("Entrez un nombre entier de case sans dépasser 800");

if(nbCase < 800 && nbCase == parseInt(nbCase)){ //Sécurité anti-Julien

	for (var i = 1; i <=nbCase; i++) {

    document.getElementById('liste').innerHTML += "<li>"+i+"</li>";

    }
}

else{
	document.getElementById('liste').innerHTML += "<img src='img/doigt.gif'></img>";
}