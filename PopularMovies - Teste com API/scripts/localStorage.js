function getFavoriteMovies() {
    return JSON.parse(localStorage.getItem("favoriteMovies"))
  }
  
  function saveToLocalStorage(movie) {
    const movies =  getFavoriteMovies() || []
  
    movies.push(movie)
  
    const moviesJSON = JSON.stringify(movies)
  
    localStorage.setItem("favoriteMovies", moviesJSON)
  }
  
  function removeFromLocalStorage(id) {
    const movies = getFavoriteMovies() || []
    const findMovie = movies.find(movie => movie.id == id)
    const newMovies = movies.filter(movie => movie.id != findMovie.id)
    localStorage.setItem("favoriteMovies", JSON.stringify(newMovies))
  }