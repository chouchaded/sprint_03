//variable that will contains all the words
let words = [];

console.log(words);

//function that will get the user input and store it in the words variable
function addUserInfo() {
	let userAdd = document.getElementById("userInput").value;
	//check if the input field is empty then do nothing
	if (userAdd != "") {
		words.push([userAdd, afficheDate()]);
		showUserInfo();
	}
}

//function that will show the values contained in the word variable

function showUserInfo() {
	let showInfo = "";
	for (let i = 0; i < words.length; ++i) {
		let word = words[i];
		let userAdd = word[0];
		let fullDate = word[1];
		showInfo += `
    	<div class="tableau">	
		<div>
    ${userAdd}</div><div>${fullDate}</div><div><button class="buttonpasse" value="${i}" onClick="removeName(this)">Je passe mon tour !</button></div>
    </div>
`;
	}

	// 	words.forEach((word) => {
	// 		let userAdd = word[0];
	// 		let fullDate = word[1];
	// 		showInfo += `
	//     	<div class="tableau">
	// 		<div>
	//     ${userAdd}</div><div>${fullDate}</div><div><button class="buttonpasse" value="${index}" onClick="removeName(this)">Je passe mon tour !</button></div>
	//     </div>
	// `;
	// 		index++;
	// 	});
	document.getElementById("display").innerHTML = showInfo;
	document.getElementById("userInput").value = null;
}

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

//function that get the delete button value to delete the array index.
function removeName(e) {
	words.splice(parseInt(e.value), 1);
	showUserInfo();
}
console.log(words);
