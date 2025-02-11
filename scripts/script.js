console.log("hello world")

// ********************** //
// API And Database stuff //
// ********************** //

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/204';

// voeg de basisURL samen met de specifieke link voor een persoon
const MyURL = baseURL+endpointMe;
console.log(MyURL);

getData(MyURL).then(  IrisData => {
	console.log(IrisData);

	// set variable myName als de naam uit de database 
	let myName = IrisData.data.name;

	// selecteer de h1 uit het document
	// let deH1 = document.querySelector("H1");

	// vervang de tekst in de h1 door de tekst in de variable myName
	// deH1.textContent = myName;


	// let MyDate = IrisData.data.birthdate;
	// let Bio = document.querySelector("time");
	// Bio.textContent = MyDate;
	// console.log(myName);
}  );

async /*9*/ function getData(URL) {
	return ( //8
		fetch(URL) //1
		.then ( //2
			response /*3*/ => response.json() //4
		)
		.then ( //5
			jsonData /*6*/ => {return jsonData} //7
		)
	);
}




// follow along flashlight source
// https://codepen.io/bramus/pen/eBZgPB
const root = document.documentElement;

document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});

lantern1 = document.querySelector("#Lantern1");
lantern1.addEventListener("click", StartChase);
TopMask = document.querySelector("#topLayer");
TopMask.addEventListener("click", StartChase);
body = document.querySelector("body");
// console.log(TopMask)

function StartChase(){
    console.log("clicked");
    TopMask.classList.add("spotlightAnimation")
    body.classList.add("active");
}
