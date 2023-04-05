





function doInsertRawTable(num, nom, prenom, points){
	const table = document.getElementById("tab"); /* la constante table contient l'objet tableau dans l'html en utilisant l'identifiant tab du tableau*/
	row = document.createElement("tr"); /* creation d'une nouvelle ligne de tableau et lassigner à la variable row  */
	row.setAttribute("class", "row"); /*Attribuer à la nouvelle ligne la class "row"*/
	/*Création de cinq nouvelle cellules pour les cinq colonnes */
	col1= document.createElement("td");
	col2= document.createElement("td");
	col3= document.createElement("td");
	col4= document.createElement("td");
	col5= document.createElement("td");
	
	/*Insérer les textes pertinants dans chacune des cinq cellules crées sauf pour la dernière qui contient une case à cocher */
	col1.innerText = num;
	col2.innerText = nom;
	col3.innerText = prenom;
	col4.innerText = points;
	col5.innerHTML = "<input type=checkbox>";
	
	
	/*Donner un attribut classe correcte pour chaque nouvelle cellule*/
	col1.setAttribute("class", "col_number");
	col2.setAttribute("class", "col_text");
	col3.setAttribute("class", "col_text");
	col4.setAttribute("class", "col_number");
	col5.setAttribute("class", "col_chkbox");
	
	/*joindre les cinq cellules a la nouvelle ligne crée*/
	row.append(col1);
	row.append(col2);
	row.append(col3);
	row.append(col4);
	row.append(col5);

	
	/*joindre la nouvelle ligne au tableau*/
	table.append(row);
	
	
}
