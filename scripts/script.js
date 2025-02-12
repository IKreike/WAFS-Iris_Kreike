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
	console.log(IrisData.data);

	// Zorg dat de zelf ingevulde data makkelijk bereikbaar is
	let CustomData = JSON.parse(IrisData.data.custom);
	console.log(CustomData);

	// set variable myName als de naam uit de database 
	// let personInfo1 = document.querySelector("#personInfo1");
	// personInfo1.textContent = IrisData.data.name;
	let personInfo2 = document.querySelector("#personInfo2");
	personInfo2.textContent = IrisData.data.name;
	let personInfo3 = document.querySelector("#personInfo3");
	personInfo3.textContent = IrisData.data.website;
	// let personInfo4 = document.querySelector("#personInfo4");
	// personInfo4.textContent = IrisData.data.name;
	// let myName = IrisData.data.name;

	let Goal1 = document.querySelector("#goal1");
	Goal1.textContent = CustomData.Leerdoel1;
	let Goal2 = document.querySelector("#goal2");
	Goal2.textContent = CustomData.Leerdoel2;
	let Goal3 = document.querySelector("#goal3");
	Goal3.textContent = CustomData.Leerdoel3;
	let Goal4 = document.querySelector("#goal4");
	Goal4.textContent = CustomData.Leerdoel4;
	let Goal5 = document.querySelector("#goal5");
	Goal5.textContent = CustomData.Leerdoel6;

	let Info1 = document.querySelector("#Info1");
	Info1.textContent = CustomData.Info1;
	let Info2 = document.querySelector("#Info2");
	Info2.textContent = CustomData.Info2;
	let Info3 = document.querySelector("#Info3");
	Info3.textContent = CustomData.Info3;

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
	body.classList.add("bigSwing");
	setTimeout(removeAnimation, 5000);

	// only edited out for testing
	lantern1.removeEventListener("click", StartChase)
};

function removeAnimation(){
	body.classList.remove("bigSwing");
};

// setTimeout(() => {
// 	document.body.classList.add('trigger'); // Trigger Animation B
  
// 	setTimeout(() => {
// 	  document.body.classList.remove('trigger'); // Remove class after 10s
// 	}, 10000); // Matches Animation B's duration
//   }, 5000);
  