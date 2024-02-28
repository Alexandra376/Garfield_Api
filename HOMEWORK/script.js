const filmTitle = document.getElementById("title");
const filmYear = document.getElementById("year");
const filmDirector = document.getElementById("director");
const filmDescription = document.getElementById("description")
const filmPoster = document.getElementById("poster");
const filmOscar = document.getElementById("oscar");

async function getData() {
    const res = await fetch("https://alexandra376.github.io/Garfield_Api/FAKEAPI/data.json");
    const data = await res.json();
    const {title, year, poster, description, director, hasOscar} = data
    filmTitle.textContent = `${title}, ${year} year`;
    filmOscar.textContent = hasOscar ? "This film won oscar" : "No awards";
    filmPoster.src = poster;
    filmDescription.textContent = description;
    filmDirector.textContent = director;
}
getData();