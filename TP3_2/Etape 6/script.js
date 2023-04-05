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
	const elt_nom = document.getElementById("form_nom");
	const elt_prenom = document.getElementById("form_prenom");
	const elt_points = document.getElementById("form_points");
	
	nom = elt_nom.value;
	prenom = elt_prenom.value;
	points = parseInt(elt_points.value);
	
	persons.push({"nom": nom, "prenom": prenom, "points": points});
	
	if(nom === "" || prenom === "" || Number.isNaN(points)){
		window.alert("Formulaire Incomplet !");
	} else {
		doInsert(nom, prenom, points);
	
    elt_nom.value = "";
	elt_prenom.value = "";
	elt_points.value = "";
	}
	
	
	
	
	
}
function deleteRow(){
	if(ligne<= 0){ /*Si le tableau est vide le clique sur le boutton supprimer déclenche un message d'alerte que le tableau ne contient aucune donées */
		alert("Tableau déja vide !");
	}else{
		table = document.getElementsByTagName("table")[0];
		chkbox_list = table.querySelectorAll(".col_chkbox input");/*On récupère la colonne contenant les cases à cocher*/
		isOneChecked = false;/*Variable booléene qui est utilisé pour vérifier si la case est cochée*/
		for(let i =0; i<chkbox_list.length; i++){
			if(chkbox_list[i].checked){
				isOneChecked = true;/*si au moin une case est coché alors la variable prend la valeur "true"*/
			}
		}
		if(!isOneChecked){
			alert("Sélectionner au moin une ligne !"); /*si aucune case n'a été coché alors un message demande a l'utilisateur de sélectionner au moins une case avant de cliquer sur supprimer */
		} else {
			if(confirm("Voullez vous vraiment supprimer les lignes?")){ /*Un méssage de confirmation est afficher avant de commencer la suppression*/
				element_found = false;
				table = document.getElementsByTagName("table")[0];
				rows =  document.getElementsByClassName("row");
				let i = 0;
				while(i<rows.length){ /*une boucle tant que explore toute les lignes du tableau*/
					if(rows[i].lastChild.firstChild.checked){ /*selectionner les lignes qui contiennent une case cochée*/
						total_points = total_points - parseInt(rows[i].childNodes[3].innerText); /*on soustrait les points de la ligne à supprimer du score totale*/
						rows[i].remove(); /*La lignes est supprimer*/
						element_found = true; 
						i--; /*une suppression d'une ligne requière qu'on decrémente le compteur d'incrémentation "i" pour se trouver sur l'élement suivant */
						ligne--; /*on réduit les lignes de 1 pour chaque suppression*/
					}
					i++;
				}
			alert("Ligne supprimé avec succès !");/*La fin de l'opération est annoncé avec un méssage de succée*/
			updateSummary();/*On met à jour le nombre se lignes et le score total*/
			}

		}
	}
}
/*************************************************ETAPE 7**********************************************************************************/
/**/



