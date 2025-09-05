 const notesContainer = document.querySelector(".notes-container");
 const createBtn = document.querySelector(".btn");
 let notes = document.querySelectorAll(".input-box");


createBtn.addEventListener("click", ()=>{
	let inputBox = document.createElement("p");
	let img = document.createElement("img");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable" , "true");
	img.src = "images/trash.png";
	notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click" , function(m){
	if(m.target.tagName === "IMG"){
		m.target.parentElement.remove();
	}
})