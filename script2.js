function afficheDate() {
  var d = new Date();
  var jour = d.getDate();
  var mois = d.getMonth() + 1;
  var annee = d.getFullYear();

  if (jour < 10) jour = "0" + jour;
  if (mois < 10) mois = "0" + mois;

  var heures = d.getHours();
  var minutes = d.getMinutes();
  var secondes = d.getSeconds();

  if (heures < 10) heures = "0" + heures;
  if (minutes < 10) minutes = "0" + minutes;
  if (secondes < 10) secondes = "0" + secondes;

  var fullDate =
    jour +
    "/" +
    mois +
    "/" +
    annee +
    ", " +
    heures +
    ":" +
    minutes +
    ":" +
    secondes;
  return fullDate;
}

let liste = [];

function ajoutnom() {
  let nom = document.getElementById("userInput").value;
  if (nom != "") {
    liste.push([nom, afficheDate()]);
    console.log("nom", nom);
  }
  let affichnom = liste[0];
  let affichdate = liste[1];

  document.getElementById("userInput").value = null;
  document.getElementById("display").innerHTML = liste;
}
console.log("liste", liste);
