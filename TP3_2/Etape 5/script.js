ligne = 0
total_points = 0;

persons = [
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

function updateSummary(){
	sum = document.getElementById("p3");
	sum.innerText = "Score Totale = " + total_points;
    lin = document.getElementById("p1");
	lin.innerText = ligne +" ligne(s)";
	
}


function init(){
	
	
	for (person of persons){
		
		doInsert(person.nom, person.prenom, person.points);
		
	}

}



function doInsert(nom, prenom, points){
	ligne++;
	doInsertRawTable(ligne, nom, prenom, points);
	total_points = total_points + points;
	
	updateSummary();
	
}

function consoleTableau(){
	tab = document.getElementById("tab");
	console.log(tab);
}








function doInsertRawTable(num, nom, prenom, points){
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
function doNewData(){ 
	/*On assigne les données introduite dans les champs de saisie dans trois constantes objet: elt_nom , elt_prenom et elt_points */
	const elt_nom = document.getElementById("form_nom");
	const elt_prenom = document.getElementById("form_prenom");
	const elt_points = document.getElementById("form_points");
	
	/*On assigne les valeurs des attributs des trois objets récuperé dans trois variables */
	nom = elt_nom.value;
	prenom = elt_prenom.value;
	points = parseInt(elt_points.value); /*Puisque points doit être un nombre entier on doit transformer la chaîne de caractère en "integer" avec la fonction parseInt*/
	
	persons.push({"nom": nom, "prenom": prenom, "points": points});/*On ajoute les données saisies dans le tableau d'objet "persons" */
	
	if(nom === "" || prenom === "" || Number.isNaN(points)){ /* On vérifie que les trois champs de saisies sont vides*/
		window.alert("Formulaire Incomplet !"); /*Si l'un des champs de saisies est vide une fenetre d'alerte affiche le message ci-contre*/
	} else {
		doInsert(nom, prenom, points);/*si les champs de saisies sont remplies, la fonction doInsert est appelée*/
	
	/*Les trois constantes objets sont vidée à la fin de l'opération*/
    elt_nom.value = "";
	elt_prenom.value = "";
	elt_points.value = "";
	}
	
	
	
	
	
}

