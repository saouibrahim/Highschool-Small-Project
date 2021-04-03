
function entreeSouris(event){
	let texte=document.querySelector("h1");
	texte.style.color="red";
	}
function sortieSouris(event) {
    let texte=document.querySelector("h1")
    texte.style.color="black"
}
let texte=document.querySelector("h1");
texte.addEventListener('mouseenter',entreeSouris);
texte.addEventListener('mouseleave',sortieSouris)

let i=0;

function fonctionClicImage(){
	image=document.querySelector("img");
		switch (true){
		case (i==0) :			
			image.setAttribute("src","img/hb0.jpg");
			i=1;
			break;
		case (i==1) :
			image.setAttribute("src","img/hb1.jpg");
			i=2;
			break;			
		case (i==2) :
			image.setAttribute("src","img/hb2.jpg");
			i=3;
			break;		
		default :
			image.setAttribute("src","img/pearl.png");
			i=0;
		}
	}
let image=document.querySelector("img");
image.addEventListener("click",fonctionClicImage);
