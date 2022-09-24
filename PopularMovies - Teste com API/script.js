import { apiKey } from "./config/api-key.js"

async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const fetchResponse = await fetch(url)
    const { results } = await fetchResponse.json()
    return results
} 

window.onload = async function() {
    const movies = await getPopularMovies()
    movies.forEach(movie => renderMovies(movie))
}


const moviesContainer = document.querySelector(".movies");


function renderMovies(movie) {
    const { title, poster_path, vote_average, release_date, overview } = movie
    const isFavorited = false

    const year = new Date(release_date).getFullYear()
    const image = `https://image.tmdb.org/t/p/w500${poster_path}`

    const movieElement = document.createElement('div')
    const movieInformations = document.createElement('div')
    const movieImageContainer = document.createElement('div')
    const movieImage = document.createElement('img')
    const movieTextContainer = document.createElement('div')
    const movieTitle = document.createElement('h4')
    const informations = document.createElement('div')
    const ratingContainer = document.createElement('div')
    const starImage = document.createElement('img')
    const movieRate = document.createElement('span')
    const favorite = document.createElement('div')
    favorite.classList.add('favorite')
    const favoriteImage = document.createElement('img')
    const favoriteText = document.createElement('span')
    const movieDescriptionContainer = document.createElement('div')
    const movieDescription = document.createElement('span')


    movieElement.classList.add('movie')
    movieInformations.classList.add('movie-informations')
    movieImageContainer.classList.add('movie-image')
    movieTextContainer.classList.add('movie-text')
    informations.classList.add('movie-informations')
    ratingContainer.classList.add('rating')
    movieRate.classList.add('movie-rate')
    favoriteImage.classList.add('favoriteImage')
    favoriteText.classList.add('movie-favorite')
    movieDescriptionContainer.classList.add('movie-description')


    moviesContainer.appendChild(movieElement)
    movieImageContainer.appendChild(movieImage)
    movieInformations.appendChild(movieImageContainer)
    movieTextContainer.appendChild(movieTitle)
    movieInformations.appendChild(movieTextContainer)
    movieTextContainer.appendChild(informations)
    ratingContainer.appendChild(starImage)
    ratingContainer.appendChild(movieRate)
    informations.appendChild(ratingContainer)
    favorite.appendChild(favoriteImage)
    favorite.appendChild(favoriteText)
    informations.appendChild(favorite)
    movieDescriptionContainer.appendChild(movieDescription)
    movieElement.appendChild(movieInformations)
    movieElement.appendChild(movieDescriptionContainer)


    movieImage.src = image
    movieImage.alt = `${title} Poster`
    movieTitle.textContent = `${title} (${year})`
    starImage.src = 'images/star.png'
    starImage.alt = 'Star'
    movieRate.textContent = vote_average
    favoriteImage.src = isFavorited ? 'images/heart-fill.svg' : 'images/heart.svg'
    favoriteImage.alt = 'Heart'
    favoriteText.textContent = 'Favoritar'
    movieDescription.textContent = overview
    
}

document.querySelector("#movie-name").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
    search()
    }
})

document.querySelector("#searchIcon").addEventListener("click", search)

async function search() {
    const inputValue = document.getElementById("movie-name").value
    if (inputValue != '') {
      cleanAllMovies()
      const movies = await searchMovieByName(inputValue)
      movies.forEach(movie => renderMovies(movie))
    }
  }
  
  function cleanAllMovies() {
    moviesContainer.innerHTML = ''
  }
  
  async function searchMovieByName(inputValue) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputValue}&language=en-US&page=1`
    const fetchResponse = await fetch(url)
    const { results } = await fetchResponse.json()
    return results
  }