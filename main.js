var tourDuJoueur1 = true;
var partieGagnee = false;
var cells = document.querySelectorAll('.cell');
var i=0;
var h1 = document.getElementById("titre");
var body = document.getElementById("corps");


var afficherSymbole = function(cell) {
	// a remplir
	// 1 - verifier case remplie ou pas
	if (cell.textContent === '') {
		// 2 - poser symbole J1 ou j2
		if (tourDuJoueur1) {
			cell.textContent = ' ';
			cell.classList.add('cross');
			i++;
		} else {
			cell.textContent = ' ';
			cell.classList.add('circle');
			i++;
		}
		// 4 - changer le joueur courant
		tourDuJoueur1 = !tourDuJoueur1;
	}
};
var combinaisons = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]];

var verifierCombinaisons = function() {
	// a remplir
	// 3 - check combinaison gagnante
	combinaisons.forEach(function(combinaison) {
		console.log(i);
		if (
			cells[combinaison[0]].classList[1] === cells[combinaison[1]].classList[1] &&
			cells[combinaison[1]].classList[1] === cells[combinaison[2]].classList[1] &&
			cells[combinaison[0]].classList[1] !== undefined
		) {
			console.log('WIN');
			var currentPlayer;
			if (tourDuJoueur1) {
				currentPlayer = 'joueur 2';
			} else {
				currentPlayer = 'joueur 1';
			}
			// alert('Bravo ' + currentPlayer + ' !');
			partieGagnee = true;
			// location.reload() ;
			document.getElementById('titre').innerHTML = ('Victoire du ' + currentPlayer + ' !');
			h1.style.marginLeft = "7%";
			body.style.backgroundColor = "#b8ffb8";
		}
		if (i===9 && cells[combinaison[0]].classList[1] !== undefined) {
			document.getElementById('titre').innerHTML = 'Égalité !';
			h1.style.marginLeft = "13%";
			body.style.backgroundColor = "#ffaaaa";
		 i=0;
		 // location.reload() ;
		} 
	});
};


cells.forEach(function(cell) {
	cell.addEventListener('click', function() {
		if (!partieGagnee) {
			afficherSymbole(cell);
			verifierCombinaisons();
		}
	});
});
