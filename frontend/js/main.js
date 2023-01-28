url = "http://localhost:8000/api/v1/titles";


function fetchBestMovie() {
	fetch(url + '/' + "?sort_by=-imdb_score")
		.then(response => response.json())
		.then(data => {
			let movies = data.results
			let bestMovie = movies[0]
			let imageUrl = bestMovie.image_url
			let imageHtml = document.getElementById("img-best-movie")
			imageHtml.src = imageUrl
			let titleBestMovie = document.getElementById("title-best-movie")
			titleBestMovie.textContent = bestMovie.title
			console.log(titleBestMovie)
			
			
		});
}


function main() {
	fetchBestMovie();
}

main();
