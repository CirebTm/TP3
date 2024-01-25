const divEnsea = document.querySelector(".div-ensea")

const listGames = [

	{
		title: "Amicia",
		jeu: "A Plague Tale",
		imageUrl:
			"https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/03/plague-tale-requiem-interview-amicia-va-wasd-550x309.jpg",
	},
	{
		title: "Clementine",
		jeu: "The Walking Dead",
		imageUrl:
			"https://i.pinimg.com/736x/f8/7d/97/f87d97d2280e1cc6b224034fb7deac62.jpg",
	},
	{
		title: "V",
		jeu: "Cyberpunk 2077",
		imageUrl:
			"https://www.jvfrance.com/wp-content/uploads/2020/12/Cyberpunk-2077-hotfix-1.05-patchnote-fr-1.jpg",
	},
	{
		title: "2B",
		jeu: "NieR Automata",
		imageUrl:
			"https://static.wikia.nocookie.net/nier/images/c/c0/2BPrayingRein.png/revision/latest?cb=20220905234746",
	},

	{
		title: "Jill Valentine",
		jeu: "Resident Evil",
		imageUrl:
			"https://steamuserimages-a.akamaihd.net/ugc/999178538946271784/1049032FCC747EB8DE046C665DCFADE218121503/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
	},
	{
		title: "Chun-Li",
		jeu: "Street Fighter",
		imageUrl:
			"https://www.candb.com/site/candb/images/artwork/Chun-Li-Street-Fighter-IV-Capcom.jpg",
	},
]

listGames.forEach((game, index) => {
    divEnsea.innerHTML += `
        <div class="col">
            <article class="card shadow-sm">
                <img src="${game.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${game.title}</h5> <!-- Modification ici -->
                    <p class="card-text">Jeu: ${game.jeu}</p>
                    <div class="btn-group">
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-dark view"
                            data-bs-toggle="modal" data-bs-target="#editModal"
                            data-index="${index}"
                        >
                            View
                        </button>
                        <button
                            type="button"
                            class="btn btn-sm btn-outline-dark edit"
                            data-bs-toggle="modal" data-bs-target="#editModal"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </article>
        </div>`;
})

// global vars modal perties
const modalTitle = document.querySelector("#exampleModalLabel")
const modalBody = document.querySelector(".modal-body")
const modalFooter = document.querySelector(".modal-footer")

// ratraper le buttons avec une classe "view"
const btnViewArray = document.querySelectorAll(".view")

// ratraper le buttons avec une classe "edit"
const btnEditArray = document.querySelectorAll(".edit")

// function pour lancer chaque fois que on click sur le btn "view"
const catchView = (i) => {
    modalTitle.textContent = listGames[i].title; // Modification ici
    modalBody.innerHTML = `<img src="${listGames[i].imageUrl}" class="img-fluid"  />`;
    modalBody.innerHTML += `<p class="mt-2"> Jeu: ${listGames[i].jeu} </p>`;
    modalFooter.innerHTML = `
        <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
        >
            Close
        </button>
    `;
}


// function pour lancer chaque fois que on click sur le btn "edit"
const catchEdit = (i) => {
	modalTitle.textContent = "Edit Mode"
	modalBody.innerHTML = `
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">Edit Title</label>
                <input type="text" class="form-control" id="title" aria-describedby="title" value="${listGames[i].title}" >
                <div id="emailHelp" class="d-none form-text">We'll never share your email with anyone else.</div>
            </div>

             <div class="mb-3">
                <label for="jeu" class="form-label">Edit jeu</label>
                <input type="number" class="form-control" id="jeu" aria-describedby= value="${listGames[i].jeu}" >
                <div id="emailHelp" class="d-none form-text">We'll never share your email with anyone else.</div>
            </div>

             <div class="mb-3">
                <label for="imageUrl" class="form-label">Edit Image Url</label>
                <input type="text" class="form-control" id="imageUrl" aria-describedby= value="${listGames[i].imageUrl}" >
                <img src="${listGames[i].imageUrl}" class="img-thumbnail w-50 mt-2" />
                <div id="emailHelp" class="d-none form-text">We'll never share your email with anyone else.</div>
            </div>
    `
	modalFooter.innerHTML = `
           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
           <button type="submit" class="btn btn-primary submit" data-bs-dismiss="modal">Save changes</button>
        </form>

    `

	console.log(" clicked edit btn " + i)
}
// rajouter un ecouter de evenment 'click' sur le button view
btnViewArray.forEach((btn, index) => {
	btn.addEventListener("click", () => catchView(index))
})

// rajouter un ecouter de evenment 'click' sur le button edit
btnEditArray.forEach((btn, index) => {
	btn.addEventListener("click", () => {
		catchEdit(index)
		const saveBtn = document.querySelector(".submit")
		saveBtn.addEventListener("click", () => {
			const newTitle = document.querySelector("form").title.value
			const newJeu = document.querySelector("form").jeu.value
			const newImageUrl = document.querySelector("form").imageUrl.value

			/* form validation  */
			if (newTitle === "" || newJeu === "" || newImageUrl === "") {
				alert("no empty !!!")
				return
			}
			/* bizarre characters  */
			const regex = /^[a-zA-Z0-9/.:-_ 'éùçà(),-=?&]+$/

			if (
				!regex.test(newTitle) ||
				!regex.test(newJeu) ||
				!regex.test(newImageUrl)
			) {
				alert("pas de truc bizzare!")
				return
			}
			/*  save changes  */
			listGames[index].title = newTitle
			listGames[index].jeu = newJeu
			listGames[index].imageUrl = newImageUrl
			document.querySelectorAll(".card-title")[index].innerHTML = newTitle
			document.querySelectorAll(".card-text")[
				index
			].innerHTML = `${newJeu}`

			document.querySelectorAll(".card-img-top")[index].src = newImageUrl
		})
	})
})