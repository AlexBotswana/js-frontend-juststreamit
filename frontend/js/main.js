url = "http://localhost:8000/api/v1/titles";


function fetchBestMovie() {
	fetch(url + '/' + "?sort_by=-imdb_score,-votes")
		.then(response => response.json())
		.then(data => {
			let movies = data.results
			let bestMovie = movies[0]
			let imageUrl = bestMovie.image_url
			let imageHtml = document.getElementById("img-best-movie-top")
			imageHtml.src = imageUrl
			let titleBestMovie = document.getElementById("title-best-movie-top")
			titleBestMovie.textContent = bestMovie.title
			let titleBestMovieDetails = document.getElementById("title-best-movie-top-d")
			titleBestMovieDetails.textContent = bestMovie.title
		});
}

function fetchSevenBestMovies() {
	fetch(url + '/' + "?sort_by=-imdb_score,-votes&page_size=7")
		.then(response => response.json())
		.then(data => {
			let i=0
			for (let sevenBestMovies of data.results) {
				let imageUrl = sevenBestMovies.image_url
				let imageHtml = document.getElementById("img-best-movie" + i)
				imageHtml.src = imageUrl
				let titleBestMovie = document.getElementById("title-best-movie" + i)
				titleBestMovie.textContent = sevenBestMovies.title
				i++
			}
		});
}

function fetchSevenBestActionMovies() {
	fetch(url + '/' + "?sort_by=-imdb_score,-votes&page_size=7&genre=Action")
		.then(response => response.json())
		.then(data => {
			let i=0
			for (let sevenBestActionMovies of data.results) {
				let imageUrl = sevenBestActionMovies.image_url
				let imageHtml = document.getElementById("img-best-action-movie" + i)
				imageHtml.src = imageUrl
				let titleBestActionMovie = document.getElementById("title-best-action-movie" + i)
				titleBestActionMovie.textContent = sevenBestActionMovies.title
				i++
			}
		});
}

function fetchSevenBestComedyMovies() {
	fetch(url + '/' + "?sort_by=-imdb_score,-votes&page_size=7&genre=comedy")
		.then(response => response.json())
		.then(data => {
			let i=0
			for (let sevenBestComedyMovies of data.results) {
				let imageUrl = sevenBestComedyMovies.image_url
				let imageHtml = document.getElementById("img-best-comedy-movie" + i)
				imageHtml.src = imageUrl
				let titleBestComedyMovie = document.getElementById("title-best-comedy-movie" + i)
				titleBestComedyMovie.textContent = sevenBestComedyMovies.title
				i++
			}
		});
}

function fetchSevenBestSciFiMovies() {
	fetch(url + '/' + "?sort_by=-imdb_score,-votes&page_size=7&genre=Sci-Fi")
		.then(response => response.json())
		.then(data => {
			let i=0
			for (let sevenBestSciFiMovies of data.results) {
				let imageUrl = sevenBestSciFiMovies.image_url
				let imageHtml = document.getElementById("img-best-scifi-movie" + i)
				imageHtml.src = imageUrl
				let titleBestSciFiMovie = document.getElementById("title-best-scifi-movie" + i)
				titleBestSciFiMovie.textContent = sevenBestSciFiMovies.title
				i++
			}
		});
}

function modal() {
	// Get the modal
 	var modal = document.getElementById("myModal");
  	// Get the button that opens the modal
  	var btn = document.getElementById("myBtn");
  	// Get the <span> element that closes the modal
  	var span = document.getElementsByClassName("close")[0];
  	// When the user clicks on the button, open the modal
  	btn.onclick = function() {
  	modal.style.display = "block";
  	}
  	// When the user clicks on <span> (x), close the modal
  	span.onclick = function() {
	modal.style.display = "none";
  	}
  	// When the user clicks anywhere outside of the modal, close it
  	window.onclick = function(event) {
  	  if (event.target == modal) {
      modal.style.display = "none";
  	  }
  	} 
}

function main() {
	fetchBestMovie();
	fetchSevenBestMovies();
	fetchSevenBestActionMovies();
	fetchSevenBestComedyMovies();
	fetchSevenBestSciFiMovies();
	modal();
}



main();
