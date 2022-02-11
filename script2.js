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
    liste.push([
      '<div class="tableau">',
      nom,
      afficheDate(),
      '<button class="buttonpasse" onclick="fondgris()" >Je passe mon tour !</button></div>',
    ]);
    console.log("nom", nom);
  }
  console.log("liste", liste);
  console.log("liste.toString()", liste.toString());

  // <div>,a,10/02/2022, 14:38:41,<button class="buttonpasse" onclick="fondgris()" >Je passe mon tour !</button>,</div>
  // <div>a 10/02/2022, 14:38:41<button class="buttonpasse" onclick="fondgris()" >Je passe mon tour !</button></div>

  for (let i = 0; i < liste.length; ++i) {
    const elt = liste[i];
    console.log("elt", elt);

    document.getElementById("display").innerHTML = elt;
  }
  document.getElementById("userInput").value = null;
  document.getElementById("display").innerHTML = liste;

  // console.log("Liste", liste);
}

function fondgris() {
  document.getElementById("display").style.background = "grey";
}

function suivant() {
  let premier = liste[0];
  console.log("premier", premier);

  document.getElementById("display").style.background = "green";
  console.log(
    "document.getElementById(display)",
    document.getElementById("display")
  );
  console.dir(document.getElementById("display"));
}

// console.log("fongris", fondgris);

// console.log("liste", liste);
