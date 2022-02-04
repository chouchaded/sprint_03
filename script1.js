//variable that will contains all the words
let words = [];

// words[0] = "Yannick";
// words[1] = "Romain";

console.log(words);

//function that will get the user input and store it in the words variable
function addUserInfo() {
	let userAdd = document.getElementById("userInput").value;
	//check if the input field is empty then do nothing
	if (userAdd != "") {
		words.push(userAdd);
		showUserInfo();
	}
}

//function that will show the values contained in the word variable

function showUserInfo() {
	var d = new Date();
	var date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
	var hours = d.getHours() + ":" + d.getMinutes();
	var fullDate = "Le " + date + " à " + hours;
	console.log(fullDate);
	let showInfo = "";
	let index = 0;
	words.forEach((word) => {
		showInfo += `
    	<div class="tableau">	
		<div>
    ${word}</div><div>${fullDate}</div><div><button class="buttonpasse" value="${index}" onClick="removeName(this)">Je passe mon tour !</button></div>
    </div>
`;
		index++;
	});
	document.getElementById("display").innerHTML = showInfo;
	document.getElementById("userInput").value = null;
}

//function that get the delete button value to delete the array index.
function removeName(e) {
	words.splice(parseInt(e.value), 1);
	showUserInfo();
}
console.log(words);
