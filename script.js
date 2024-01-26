const divEnsea = document.querySelector(".div-ensea")

const listGames = [

	{
		title: "Amicia",
		jeu: "A Plague Tale",
		imageUrl:
			"https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/03/plague-tale-requiem-interview-amicia-va-wasd-550x309.jpg",
		description: "\nAmicia est une adolescente intelligente et déterminée évoluant dans un monde médiéval en proie à la peste.\n Sa quête pour protéger son frère Hugo dévoile une histoire captivante, mettant en avant son courage face à des défis surnaturels. Une expérience immersive qui révèle la force émotionnelle d'un personnage inoubliable.",
		link:"https://www.youtube.com/watch?v=vL5BzOF2Iw0",
		
	},
	{
		title: "Clementine",
		jeu: "The Walking Dead",
		imageUrl:
			"https://cdnb.artstation.com/p/assets/covers/images/013/075/499/large/grace-hsin-clem-thumbnail.jpg?1537941224",
		description:"\nClémentine se démarque en tant que jeune survivante à la fois brave et chaleureuse  dans un monde apocalyptique infesté de zombies. Son parcours captivant, du rôle de protégée à celui de protectrice, offre une expérience immersive riche en émotions.\n À travers des choix moraux difficiles et des relations complexes, Clémentine incarne la résilience et la maturité, faisant de son personnage une raison convaincante de plonger dans l'univers captivant de ce jeu emblématique.",
		link:"https://www.youtube.com/watch?v=WjFqYiGQxvw",
	},
	{
		title: "V",
		jeu: "Cyberpunk 2077",
		imageUrl:
			"https://www.jvfrance.com/wp-content/uploads/2020/12/Cyberpunk-2077-hotfix-1.05-patchnote-fr-1.jpg",
		description: "\nV incarne une mercenaire audacieuse et charismatique dans le monde futuriste de Night City. Dotée d'une personnalité forte, lutte pour sa survie à travers les rues dangereuses de Night City. Dans une quête pour s'imposer dans ce monde futuriste, elle doit naviguer habilement entre les alliances, les complots et les choix moraux difficiles. L'histoire immersive de V est teintée de moments poignants où la survie personnelle devient la clé de son parcours, ajoutant une tension palpable à cette expérience captivante.",
		link:"https://www.youtube.com/watch?v=rouKZFuXQy4",
	},
	{
		title: "2B",
		jeu: "NieR Automata",
		imageUrl:
			"https://cdn.wccftech.com/wp-content/uploads/2015/10/000.jpg",
		description:"\n2B incarne une androïde stoïque et gracieuse dans un monde post-apocalyptique. Son apparence élégante cache une profondeur émotionnelle alors qu'elle se bat contre des machines hostiles pour sauver ce qui reste de l'humanité. Dotée d'une épées, elle combat au coté de son partenaire tactique, 9S.",
		link:"https://www.youtube.com/watch?v=j6661beJnZw",
	},

	{
		title: "Jill Valentine",
		jeu: "Resident Evil",
		imageUrl:
			"https://steamuserimages-a.akamaihd.net/ugc/999178538946271784/1049032FCC747EB8DE046C665DCFADE218121503/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
		description:"Jill Valentine, l'emblématique héroïne de la série Resident Evil, incarne une experte en lutte contre les horreurs du bioterrorisme. Forte, intelligente et déterminée, Jill guide les joueurs à travers des cauchemars terrifiants tout en résolvant des énigmes et en affrontant des créatures malveillantes. Son courage face à l'horreur et son rôle central dans la lutte pour la survie font de Jill Valentine une figure incontournable, rendant chaque aventure dans l'univers de Resident Evil aussi palpitante que captivante.",
		link:"https://www.youtube.com/watch?v=Eflb1X-5Q2o",
	},
	{
		title: "Chun-Li",
		jeu: "Street Fighter",
		imageUrl:
			"https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F07%2F20230602023544_1-968x544.jpg&w=3840&q=75",
		description:"Chun-Li, l'emblématique combattante de Street Fighter, est une experte en arts martiaux et membre d'Interpol. Sa grâce et sa puissance font d'elle une force redoutable sur le ring. Luttant pour la justice, Chun-Li recherche le criminel M. Bison pour venger la mort de son père. Son histoire est tissée de détermination, de courage et d'une quête personnelle qui ajoute une dimension fascinante à son personnage. Jouer avec Chun-Li dans Street Fighter offre une expérience dynamique et palpitante, alliant sa maîtrise des arts martiaux à une histoire captivante.",
		link:"https://www.youtube.com/watch?v=EqNu3Kxdwgg",
	},
]

listGames.forEach((game, index) => {
    divEnsea.innerHTML += `
        <div class="col">
            <article class="card shadow-sm">
				<a href="${game.link}" target="_blank" classe="glink">
					<img src="${game.imageUrl}" class="card-img-top" alt="...">
				</a>
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
	modalBody.innerHTML += `<p>Description: ${listGames[i].description}</p>`;
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
				<label for="link" class="form-label">Edit Link</label>
				<input type="text" class="form-control" id="link" value="${listGames[i].link}">
			</div>

            <div class="mb-3">
                <label for="title" class="form-label">Edit Title</label>
                <input type="text" class="form-control" id="title" aria-describedby="title" value="${listGames[i].title}" >
                <div id="emailHelp" class="d-none form-text">We'll never share your email with anyone else.</div>
            </div>

             <div class="mb-3">
                <label for="jeu" class="form-label">Edit jeu</label>
                <input type="text" class="form-control" id="jeu" aria-describedby= value="${listGames[i].jeu}" >
                <div id="emailHelp" class="d-none form-text">We'll never share your email with anyone else.</div>
            </div>

			<div class="mb-3">
				<label for="description" class="form-label">Edit Description</label>
				<input type="text" class="form-control" id="description" aria-describedby= value="${listGames[i].description}" >
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
			const newDescription = document.querySelector("form").description.value;
			const newImageUrl = document.querySelector("form").imageUrl.value
			const newLink = document.querySelector("form").link.value;
			

			/* form validation  */
			if (newTitle === "" || newJeu === "" || newDescription === "" || newImageUrl === "") {
				alert("no empty !!!")
				return
			}
			/* bizarre characters  */
			const regex = /^[a-zA-Z0-9/.:-_ 'éùçà(),-=?&]+$/

			if (
				!regex.test(newTitle) ||
				!regex.test(newDescription) ||
				!regex.test(newJeu) ||
				!regex.test(newImageUrl)
			) {
				alert("pas de truc bizzare!")
				return
			}
			/*  save changes  */
			listGames[index].title = newTitle
			listGames[index].jeu = newJeu
			listGames[index].description = newDescription;
			listGames[index].imageUrl = newImageUrl
			listGames[index].link = newLink;

						document.querySelectorAll(".card-title")[index].innerHTML = newTitle
			document.querySelectorAll(".card-text")[
				index
			].innerHTML = `${newJeu}`
			document.querySelectorAll(".card-text")[index].innerHTML = `${newDescription}`

			document.querySelectorAll(".card-img-top")[index].src = newImageUrl
			document.querySelectorAll(".glink")[index].setAttribute("href", newLink);
		})
	})
})