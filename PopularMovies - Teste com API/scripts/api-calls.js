import { apiKey } from "../.gitignore/config/api-key.js"

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  const fetchResponse = await fetch(url)
  const { results } = await fetchResponse.json()
  return results
}

async function searchMovieByName(inputValue) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputValue}&language=en-US&page=1`
    const fetchResponse = await fetch(url)
    const { results } = await fetchResponse.json()
    return results
}

export const API = {
    searchMovieByName,
    getPopularMovies
  }