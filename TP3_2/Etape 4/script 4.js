ligne = 0
total_points = 0; /**/

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

function updateSummary(){ /*Cette fontion met à jour les lignes et la somme des points*/
	sum = document.getElementById("p3"); /* l'élement qui affiche le score total est affectée dans la variable sum */
	sum.innerText = "Score Totale = " + total_points; /*Mise a jour du score totale sur html*/
    lin = document.getElementById("p1"); /* l'élement qui affiche le nombre de lignes est affectée dans la variable lin */
	lin.innerText = ligne +" ligne(s)"; /*Mise à jour du nombre de lignes*/
	
}


function init(){
	
	
	for (person of persons){
		
		doInsert(person.nom, person.prenom, person.points);
		
	}

}



function doInsert(nom, prenom, points){
	ligne++; /*l'incrementation de ligne commence avant l'appel de la fonction doInsertRawTable afin de sauter le zero*/
	doInsertRawTable(ligne, nom, prenom, points);
	total_points = total_points + points; /*Le calcule des point se fait dans la fonction doInsert*/
	
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
