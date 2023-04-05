etudiants =[
	{
	 matricule:1000,
	 nom: "JOHN",
	 prenom: "DOE",
	 note:14,
	 assiduite:5
	},
	{
	matricule:2000,
	 nom:"BOB",
	 prenom:"CARLTON",
	 note:7,
	 assiduite:1
	},
	{
	matricule:3000,
	 nom:"RAYANE",
	 prenom:"SMITH",
	 note:13,
	 assiduite: 3
	}
]

function estAddmissible(note){
	if(note<10){
		return false;
	}else {
		return true;
	}
}


function deliberation(){
	for(i in etudiants){
		noteFinale = etudiants[i].note + etudiants[i].assiduite;
		if(estAddmissible(noteFinale)){
			console.log(etudiants[i].matricule+": " + "ADMIS");
		}else {
			console.log(etudiants[i].matricule+": " + "AJOURNEE");
		}
		;
		
	}
}