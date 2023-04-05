ligne = 0; /*La variable globale ligne va compter le nombre de lingne dans le tableau mais sera aussi utilisé pour remplire la première colonne N° */
persons = [ /* le tableau d'objet "persons" contient trois objets chacun composés d'un nom, prénom et points. */
	{
		nom: "nom-1",
		prenom:"prenom-1",
		points: 10
	},
	{
		nom: "nom-2",
		prenom:"prenom-2",
		points: 15
	},
	{
		nom: "nom-3",
		prenom:"prenom-3",
		points: 20
	}
]


function init(){
	
	
	for (person of persons){ /*La fonction init declanche une boucle qui explore les objets présents dans le tableau persons*/
		
		doInsert(person.nom, person.prenom, person.points); /* Pour chaque élement du tableau persons la fonction doInsert est déclenchée avec comme paramètres les attributs des objets*/
		
	}
	
}

function doInsert(nom, prenom, points){
	ligne++; /*Quant la fonction doInsert est appelée, la variable ligne est incrémentée */
	
	doInsertRawTable(ligne, nom, prenom, points); /*La fonction doInsertRawTable va créer les ligne pour chaque objet avec les contenus correctes */
	num =99;
	
}

function consoleTableau(){
	tab = document.getElementById("tab"); /* le tableau html est sauvegarder dans la variable tab en tant qu'objet DOM */
	console.log(tab); /* cette méthode affichera le tableau comme objet html "DOM" dans la console */
}








function doInsertRawTable(num, nom, prenom, points){/*Cette fonction est la même que dans l'étape précedente*/
	const table = document.getElementById("tab");
	row = document.createElement("tr");
	row.setAttribute("class", "row");
	col1= document.createElement("td");
	col2= document.createElement("td");
	col3= document.createElement("td");
	col4= document.createElement("td");
	col5= document.createElement("td");
	
	col1.innerText = num;
	col2.innerText = nom;
	col3.innerText = prenom;
	col4.innerText = points;
	col5.innerHTML = "<input type=checkbox>";
	
	
	
	col1.setAttribute("class", "col_number");
	col2.setAttribute("class", "col_text");
	col3.setAttribute("class", "col_text");
	col4.setAttribute("class", "col_number");
	col5.setAttribute("class", "col_chkbox");
	
	row.append(col1);
	row.append(col2);
	row.append(col3);
	row.append(col4);
	row.append(col5);

	
	
	table.append(row);
	
	
}
