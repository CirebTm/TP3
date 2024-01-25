const divEnsea = document.querySelector(".div-ensea")

const listGames = [
	{
		title: "Clementine",
		jeu: "The Walking Dead",
		imageUrl:
			"https://store-images.s-microsoft.com/image/apps.3117.14492969036550054.5a1d40f5-fe0d-427a-bd14-9a9ed15a423c.f601beb2-973f-47de-ad1a-ccec296ee4d1?q=90&w=480&h=270",
	},
	{
		title: "Amicia",
		jeu: "A Plague Tale",
		imageUrl:
			"https://i.guim.co.uk/img/media/4cd2e3dfef9da0adb8f4ea1294d4d1097f50bd63/152_0_2234_1342/master/2234.jpg?width=1200&quality=85&auto=format&fit=max&s=e556f1df87e5634ae249d37073a327e1",
	},
	{
		title: "V",
		jeu: "Cyberpunk 2077",
		imageUrl:
			"https://www.dexerto.com/cdn-cgi/image/width=1080,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2021/12/10/alan-wake-2.jpg",
	},
	{
		title: "2B",
		jeu: "NieR Automata",
		imageUrl:
			"https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068",
	},
	{
		title: "Chun-Li",
		jeu: "Street Fighter 6",
		imageUrl:
			"https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068",
	},
	{
		title: "Ada Wong",
		jeu: "Resident Evil 4",
		imageUrl:
			"https://gaming-cdn.com/images/products/2284/orig/half-life-2-pc-mac-game-steam-cover.jpg?v=1650555068",
	},
]

listGames.forEach((game, index) => {
    divEnsea.innerHTML += `
        <div class="col">
            <article class="card shadow-sm">
                <img src="${game.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nom: ${game.title}</h5> <!-- Modification ici -->
                    <p class="card-text">jeu: ${game.jeu}</p>
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
                <input type="number" class="form-control" id="jeu" aria-describedby="jeu" value="${listGames[i].jeu}" >
                <div id="emailHelp" class="d-none form-text">We'll never share your email with anyone else.</div>
            </div>

             <div class="mb-3">
                <label for="imageUrl" class="form-label">Edit Image Url</label>
                <input type="text" class="form-control" id="imageUrl" aria-describedby="jeu" value="${listGames[i].imageUrl}" >
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
			].innerHTML = `Jeu: ${newJeu}`

			document.querySelectorAll(".card-img-top")[index].src = newImageUrl
		})
	})
})