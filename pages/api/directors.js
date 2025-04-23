export default function handler(req, res) {
    const data = require('../../public/data.json');
    
    // Create a mapping of directors to their movies
    const directorMovies = {};
    
    data.directors.forEach(director => {
      directorMovies[director.id] = data.movies.filter(movie => 
        movie.directorId === director.id
      );
    });
    
    res.status(200).json({
      directors: data.directors,
      directorMovies
    });
  }