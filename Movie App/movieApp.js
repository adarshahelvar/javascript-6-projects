let movie = async () => {
  let userInput = document.getElementById("movieNmae").value;
  let data = await fetch(
    `http://www.omdbapi.com/?apikey=d06e0742&t=${userInput}`
  );
  let res = await data.json();
  console.log(res.Response);

  // Open a new window or tab with result.html
  let newWindow = window.open("result.html", "_blank");

  // Wait for the new window to finish loading
  if (res.Response === true) {
    newWindow.onload = () => {
      // Create the HTML content with movie details
      let htmlContent = `
              <div class="movie-details">
                <h1 class="movie-title">${res.Title}</h1>
                <p class="imdb-votes">IMDb Votes: ${res.imdbVotes}</p>
                <p class="imdb-rating">IMDb Rating: ${res.imdbRating}</p>
                <p class="year">Year: ${res.Year}</p>
                <p class="runtime">Runtime: ${res.Runtime}</p>
                <p class="released">Released: ${res.Released}</p>
                <p class="plot">Plot: ${res.Plot}</p>
                <p class="language">Language: ${res.Language}</p>
              </div>
              <div class="movie-poster">
                <img src="${res.Poster}" alt="Movie Poster" class="poster-image">
              </div>
            `;

      // Set the HTML content as the innerHTML of the new document body
      newWindow.document.body.innerHTML = htmlContent;
    };
  } else {
    newWindow.onload = () => {
      // Create the HTML content with movie details
      let htmlContent = `
              <div class="movie-details">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg" alt="Movie Poster" class="poster-image">
              </div>
            `;
      newWindow.document.body.innerHTML = htmlContent;
    };
  }
};
