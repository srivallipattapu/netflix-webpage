function playMovie() {
    alert("Playing Stranger Things...");
}

function showInfo() {
    alert("Stranger Things is a science-fiction mystery series.");
}

function searchMovie() {
    let searchText = document.getElementById("search").value.toLowerCase();
    let movies = document.querySelectorAll(".movie-card");

    let found = false;

    movies.forEach(function(movie) {
        let movieName = movie.querySelector("h3").innerText.toLowerCase();

        if (movieName.includes(searchText)) {
            movie.style.display = "block";
            found = true;
        } else {
            movie.style.display = "none";
        }
    });

    if (searchText === "") {
        movies.forEach(function(movie) {
            movie.style.display = "block";
        });
    } else if (!found) {
        alert("Movie not found!");
    }
}