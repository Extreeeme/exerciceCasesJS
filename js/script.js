var nbCase = prompt("Entrez un nombre de case", "");

if(nbCase < 800){

	for (var i = 1; i <=nbCase; i++) {

    document.getElementById('liste').innerHTML += "<li>"+i+"</li>";
    
    }
}