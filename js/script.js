var nbCase = prompt("Entrez un nombre entier de case sans dépasser 800");		//Déclaration de la variable qui contient le nombre de cases

if(nbCase < 800 && nbCase == parseInt(nbCase)){									//Sécurité PAJ (Protection Anti Julien)

	for (var i = 1; i <=nbCase; i++) {											//Création de la boucle, initialisation du i, i=i+1 jusqu'au nombre de case

    document.getElementById('liste').innerHTML += "<li>"+i+"</li>";				//Ajout d'un élément de la liste à chaque itération de la boucle

    }
}

else{																			//Si un méchant Julien répond n'importe quoi, affiche une image
	document.getElementById('liste').innerHTML += "<img src='img/doigt.gif'></img>";
}