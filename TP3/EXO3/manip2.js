etudiantTab = ["Etudiant1", "Etudiant2", "Etudiant3"];

const etudiantObjet = {
	nom : "John",
	prenom: "Doe",
	age: 30
};

const etudiant = [
	{
	nom : "nom1",
	prenom: "prenom1",
	age: 21
	},
	{
	nom : "nom2",
	prenom: "prenom2",
	age: 22
	},
	{
	nom : "nom3",
	prenom: "prenom3",
	age: 23
	}
]
;

function objet(){

		console.log("{ " + "nom: " + etudiantObjet.nom + ", " + "prenom: "+  etudiantObjet.prenom + ", " +"age: "+ etudiantObjet.age + " }");
	
}




function etu(){
	for(i=0; i<etudiantTab.length; i++){
		console.log(etudiantTab[i] + "\n");
	};
	
}


function printEtu(){
	for(i in etudiant){
		console.log(etudiant[i].nom + "-" + etudiant[i].prenom + "-" + etudiant[i].age);
	};
	
}