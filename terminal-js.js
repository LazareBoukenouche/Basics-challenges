// Bienvenue à ce premier challenge.

// Pour que les resultats soient visible dans le navigateur, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!




//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
// //TODO
// let firstNumber = 4;
// let secondNumber = 5;
// let sum = firstNumber + secondNumber;
// console.log(sum);


// //Afficher la chaine de caractère suivante en majuscule
// let team = 'avengers';
// //TODO
// console.log(team.toUpperCase());


// //Afficher la première lettre de la chaine de caractère suivante
// let team = 'avengers';
// //TODO
// console.log(team[0]);

// //afficher la chaine de caractère suivante excepté la première lettre.
// let team = 'avengers';
// //TODO
// console.log(team.slice(1));

// //Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
// let firstName = 'Tony';
// let lastName = 'Stark';
// //TODO
// let fullName = firstName +" "+ lastName;
// console.log(fullName);


// //Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
let team = 'aveNgers';
//=> Avengers
//TODO
// console.log(team[0].toUpperCase()+team.slice(1,3)+team[3].toLowerCase()+team.slice(4));

// //Pause ! Va boire un café ! Tu le mérites...

// //Les tableaux
// //Déclarez un tableau avec 5 villes
// //Afficher la ville à l'indice 3
// //Ajouter une ville au tableau
// //Supprimer la ville à l'indice 2
// //TODO

// let array = ["Tokyo","Kyoto","Osaka","Nagoya","Kobe"];
// console.log(array[3]);
// array.push("Fukuoka");
// array.splice(2,1);
// console.log(array);

// //Les boucles
// //
// //Comme tu le sais sans doute, pour parcourir un tableau,
// //il faut boucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
// //élément au carré et affiche le tableau.

 const array1 = [2, 4, 8];
// //TODO
// array1.forEach(function(element,i) {
//   array1[i] = element*element;
// });
// console.log(array1);



// // Le tableau suivant indique les notes d'une promo lointaine !
// // Calculer la moyenne de cette promo et afficher le resultat
// const promo = [12, 13, 17, 3, 14, 18];

// function calculMoyenne(array) {
//   let moyenne = 0;
//   array.forEach(element => {
//     moyenne+=element;
//     console.log(moyenne);
//   });
//   moyenne = moyenne/promo.length;
//   console.log(moyenne);
// }

// calculMoyenne(promo);

// //les conditions

// //Déclarez une variable "age" avec la valeur de votre choix.
// //En utilisant les conditions 'if' et 'else' affichez :
// //peut voter si 'age' est supérieur ou égal à 18
// //ne peut pas voter si 'age' est inférieur à 18

// let age = 20;
// if (age >= 18) {
//   console.log("peut voter si 'age' est supérieur ou égal à 18");
// }
// else {
//   console.log("ne peut pas voter si 'age' est inférieur à 18");
// }

// // Afficher la date d'aujourd'hui avec javascript.
// // En utilisant les conditions 'if' et 'else' affichez :
// // "bonjour" si il est en 5h du matin et 17h
// // et "bonsoir" s'il est entre 17h et 5h du matin

// let date = new Date(Date.now());
// let hour = date.getUTCHours();
// if (hour > 5 && hour < 17) {
//     console.log("Bonjour");
//   }
//   else {
//     console.log("Bonsoir");
//   }

// //Va reboir un café ! Bravo
// //Et pense à commit ton projet




// //----------------- Fonctions -------------------

// //Créez deux variables initialisées à 3 et 4.
// //Créez une fonction qui retourne l'addition de ces deux valeurs.
// const add = (num1, num2) => {
// //TODO
// };

// function returnSum(nb1,nb2) {
//   let result = nb1+nb2;
//   return result;
// }

// let firstNumber = 3;
// let secondNumber = 4;
// console.log(returnSum(firstNumber,secondNumber));



// //Créez une fonction qui prend en paramètre la valeur i. La fonction doit
// //retourner la valeur i au carré et l'afficher.

// const square = (number) => {
//   //TODO
// };

// function squareNb(nb) {
//   let squaredNumber = nb*nb;
//   console.log(squaredNumber);
// }

// squareNb(9);

// // En utilisant la methode 'map', mettre la chaine de
// // caractère en majuscule.
// const beatles = ["paul", "john", "ringo", "george"];

// console.log(beatles.map(x => x.toUpperCase()));

// //Créez un tableau nommé tab dont le premier
// //élément est 2, le deuxième 3 et le troisième 4.
// //Créez une fonction qui renvoit la somme des éléments du tableau.
// let tab = [2,3,4];

// function sumArrayItem(array) {
//   let sum = 0;
//   array.forEach(element => {
//     sum+=element;
//   });
//   return sum;
// } 

// console.log(sumArrayItem(tab));


// //Créez une fonction qui renvoie la somme de chaque éléments du
// //tableau si celui-ci est positif.
// const array2 = [-2, 4, -5, 3, 6];
// const addPositiveNumber = (tableau) => {
//  //TODO
// };

// let array = [-6,6,1];
// function sumArrayItem(array) {
//   let sum = 0;
//   array.forEach(element => {
//     sum+=element;
//   });
//   if (sum > 0) {
//     return sum;
//   }
  
// } 

// console.log(sumArrayItem(array));




// //Créez une fonction qui prend un parametre 'r' et qui
// //renvoie le périmetre d'un cercle.
// const périmetreCercle = (r) => {
//   //TODO
// };

// function getCircumference(r) {
//   const Pi = 3.14;
//     return 2*Pi*r;

// }

// console.log(getCircumference(10));

// //Créez une fonction qui met la premiere lettre d'un mot en majuscule.
// //Le reste du mot doit être en minuscule.
// //Le mot est "SimPloN"
// const capitalize = (word) => {
//   //TODO
// };

// function capitalizeWord(word) {
//   word = Array.from(word);
//   word.forEach(function(element,i) {
//     if (i===0) {
//       element[i].toUpperCase();
//     }
//     else {
//       element.toLowerCase();
//     }
//   });
//   console.log(word);
// }

capitalizeWord("frANky");

// //Odd or Even
// //Créez un fonction qui prend un nombre en parametre et qui renvoie :
// //paire si le nombre est pair
// //impaire si le nombre est impair
// //Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.



// //Mot inversé
// //créez une fonction qui prend en paramètre une chaine de caractère.
// //Cette fonction renvoie la chaine de caractère inversée.
// //ex: reverseWord('simplon') ==> 'nolpmis'
// //Aide : join(), split(), reverse()
// const reverseWord = (word) => {
//   //TODO
// };


// //Reprendre la fonction qui permet de calculer la somme d'un tableau
// //Le tableau est le suivant : 
// const nombres = ["3", "5", "6", "2"];







// //-----------------------------EXO SUP-------------------------------------





// //Tri à bulle
// //Classé les éléments du tableau suivant par ordre croissant.
// //Affichez le tableau classé.

// const aTrier = [3, 2, 6, 4, 8, 10];

// //Coder la fonction puissance qui prend en paramètre deux arguments (nombre et puissance).
// //La fonction devra renvoyer le nombre monté à la puissance
// //L'argument 'puissance' peut valoir 0, 1 ou être negatif et bien sûr positif.


// // Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// // entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi.À chaque tour, le 
// // joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui 
// // indique si son estimation est trop basse ou trop élevée.Le jeu se termine quand le joueur a deviné le nombre mystère, ou 
// // s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// // partie.
// //Bonus : Le jeu doit également rappeler au joueur les 
// // nombres déjà proposés


// // La suite de Fibonacci est une suite d'entiers dans laquelle chaque terme est la somme des deux 
// // termes qui le précèdent. Elle commence généralement par les termes 0 et 1 (parfois 1 et 1) et ses 
// // premiers termes sont : 0, 1, 1, 2, 3, 5, 8, 13, 21, etc...
// // Code un algorithme qui calcul les 50 premiers termes de la suite.