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
	// console.log(IrisData.data);

	// Zorg dat de zelf ingevulde data makkelijk bereikbaar is
	let CustomData = JSON.parse(IrisData.data.custom);
	// console.log(CustomData.LeerDoel1);

	// set variable myName als de naam uit de database 
	let myName = IrisData.data.name;

	let Goal1 = document.querySelector("#goal1");
	Goal1.textContent = CustomData.Leerdoel1;
	let Goal2 = document.querySelector("#goal2");
	Goal2.textContent = CustomData.Leerdoel2;
	let Goal3 = document.querySelector("#goal3");
	Goal3.textContent = CustomData.Leerdoel3;
	let Goal4 = document.querySelector("#goal4");
	Goal4.textContent = CustomData.Leerdoel4;
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
