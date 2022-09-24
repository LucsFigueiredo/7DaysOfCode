const filmes = [
    {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        title: 'Batman',
        rating: 9.2,
        year: 2022,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: true,
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
        title: 'Avengers',
        rating: 9.2,
        year: 2019,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: false
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
        title: 'Doctor Strange',
        rating: 9.2,
        year: 2022,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: false
    },
]

const filmesElemento = document.querySelector(".filmes");

window.onload = function() {
    filmes.forEach(filme => renderizarFilmes(filme))
}

function renderizarFilmes(filme) {
    const { title, image, rating, year, description } = filme

    const filmesDiv = document.createElement("div")
    const filmesImgDiv = document.createElement('div')
    const filmesImg = document.createElement("img")
    const filmesDivInfo = document.createElement("div")
    const filmesTitulo = document.createElement("p")
    const filmesDivDados = document.createElement("div")
    const filmesRating = document.createElement("p")
    const filmesFavoritar = document.createElement("p")
    const filmesP = document.createElement("p")

    filmesTitulo.textContent = title + " " + "(" + year + ")"
    filmesImg.src = image
    filmesP.textContent = description
    filmesRating.textContent = "⭐" + " " + rating
    filmesFavoritar.textContent = "💖 Favoritar"

    filmesDiv.classList.add("filme")
    filmesImgDiv.classList.add('filmeImage')
    filmesDivInfo.classList.add("filmeInfo")
    filmesDivDados.classList.add("filmeDados")
    filmesTitulo.classList.add("filmeTitulo")
    filmesP.classList.add("descricao")

    filmesElemento.appendChild(filmesDiv)
    filmesDiv.appendChild(filmesImgDiv)
    filmesDiv.appendChild(filmesDivInfo)
    filmesDiv.appendChild(filmesP)
    filmesImgDiv.appendChild(filmesImg)
    filmesDivInfo.appendChild(filmesTitulo)
    filmesDivInfo.appendChild(filmesDivDados)
    filmesDivDados.appendChild(filmesRating)
    filmesDivDados.appendChild(filmesFavoritar)
}