var nbCase = prompt("Entrez un nombre de case");

if(nbCase < 800 && nbCase == parseInt(nbCase)){

	for (var i = 1; i <=nbCase; i++) {

    document.getElementById('liste').innerHTML += "<li>"+i+"</li>";

    }
}

else{
	document.getElementById('liste').innerHTML += "<img src='img/doigt.gif'></img>";
}