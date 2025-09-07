 const notesContainer = document.querySelector(".notes-container");
 const createBtn = document.querySelector(".btn");
 let notes = document.querySelectorAll(".input-box");

 const noNotesMsg = document.getElementById("no-notes");



createBtn.addEventListener("click", ()=>{

	// remove "No Notes yet" if it exists
    if (noNotesMsg) {
        noNotesMsg.remove();
    }


	let inputBox = document.createElement("p");
	let img = document.createElement("img");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable" , "true");
	img.src = "images/trash.png";
	notesContainer.appendChild(inputBox).appendChild(img);

	 // delete functionality
    img.addEventListener("click", () => {
        inputBox.remove();

        // if no notes left, show "No Notes yet" again
        if (notesContainer.querySelectorAll(".input-box").length === 0) {
            notesContainer.innerHTML = `<p id="no-notes">No Notes yet</p>`;
        }
    });
    
})

notesContainer.addEventListener("click" , function(m){
	if(m.target.tagName === "IMG"){
		m.target.parentElement.remove();
	}
})
















