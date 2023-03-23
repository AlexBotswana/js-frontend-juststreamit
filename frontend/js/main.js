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
			//check if the title lengh is not to long 
			if (bestMovie.title.length >= 20) titleBestMovie.textContent = `${bestMovie.title.substring(0, 20)}...`
			else titleBestMovie.textContent = bestMovie.title
			//Details for modal window
			imageHtml.addEventListener('click', () => {
				//get film url for more detail
				let urlBestMovie = bestMovie.url
				movieDetailsModal(urlBestMovie)
			})
		});
}

function fetchSevenBestMovies(categorie) {
	fetch(url + '/' + "?sort_by=-imdb_score,-votes&page_size=7" + categorie)
		.then(response => response.json())
		.then(data => {
			for (let index = 0; index < data.results.length; index++) {
				let element = data.results[index];
				let imageUrl = element.image_url
				let imageHtml = document.getElementById("img-best-movie" + categorie + index)
				imageHtml.src = imageUrl
				let titleBestMovie = document.getElementById("title-best-movie" + categorie + index)
				//check if the title lengh is not to long 
				if (element.title.length >= 20) titleBestMovie.textContent = `${element.title.substring(0, 20)}...`
				else titleBestMovie.textContent = element.title
				//Details for modal window
				imageHtml.addEventListener('click', () => {
					//get film url for more detail
					movieDetailsModal(element.url)
				})
			}
		});
}

// MODAL
function movieDetailsModal(urlMovie) {
	// Get the modal
	var modal = document.getElementById("myModal");
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// When the user clicks on the button, open the modal	
	modal.style.display = "block";
	// When the user clicks on <span> (x), close the modal
	span.onclick = function () {
		modal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	//Details for modal
	fetch(urlMovie)
		.then(response => response.json())
		.then(data => {
			let detailsBestMovie = data
			let titleBestMovieModal = document.getElementById("title-modal")
			titleBestMovieModal.textContent = detailsBestMovie.title
			let imageHtmlModal = document.getElementById("img-modal")
			imageHtmlModal.src = detailsBestMovie.image_url
			let genresBestMovie = document.getElementById("genres-modal")
			genresBestMovie.textContent = detailsBestMovie.genres
			let yearBestMovie = document.getElementById("year-modal")
			yearBestMovie.textContent = detailsBestMovie.date_published
			let ratedBestMovie = document.getElementById("rated-modal")
			ratedBestMovie.textContent = detailsBestMovie.rated
			let imdbBestMovie = document.getElementById("imdb-modal")
			imdbBestMovie.textContent = detailsBestMovie.imdb_score
			let directorsBestMovie = document.getElementById("directors-modal")
			directorsBestMovie.textContent = detailsBestMovie.directors
			let actorsBestMovie = document.getElementById("actors-modal")
			actorsBestMovie.textContent = detailsBestMovie.actors
			let durationBestMovie = document.getElementById("duration-modal")
			durationBestMovie.textContent = detailsBestMovie.duration
			let countriesBestMovie = document.getElementById("countries-modal")
			countriesBestMovie.textContent = detailsBestMovie.countries
			let boxofficeBestMovie = document.getElementById("boxoffice-modal")
			boxofficeBestMovie.textContent = detailsBestMovie.worldwide_gross_income
			let descriptionBestMovie = document.getElementById("description-modal")
			descriptionBestMovie.textContent = detailsBestMovie.description
		})
}

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const slidesContainerAct = document.getElementById("slides-container-act");
const slideAct = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const prevButtonAct = document.getElementById("slide-arrow-prev-act");
const nextButtonAct = document.getElementById("slide-arrow-next-act");

nextButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;  
	slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;  
	slidesContainer.scrollLeft -= slideWidth;
});

nextButtonAct.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;  
	slidesContainerAct.scrollLeft += slideWidth;
});
prevButtonAct.addEventListener("click", () => {
	const slideWidth = slide.clientWidth;  
	slidesContainerAct.scrollLeft -= slideWidth;
});


function main() {
	fetchBestMovie();
	fetchSevenBestMovies("");
	fetchSevenBestMovies("&genre=Action");
	//fetchSevenBestMovies("&genre=comedy");
	//fetchSevenBestMovies("&genre=Sci-Fi");

}



main();
