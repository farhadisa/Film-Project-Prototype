const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.getElementById("clear-films");

//UI starts
const ui = new UI();

//Storage starts
const storage = new Storage();

eventlisteners();

function eventlisteners(){

    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", loadFilmsToUI);
    secondCardBody.addEventListener("click", deleteFilm);
    clearButton.addEventListener("click", clearAllFilms);

}

function loadFilmsToUI(){
    let films = storage.getFilmFromStorage()

    ui.loadAllFilms(films);

}

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        //Error
        ui.showDisplays("danger", "Please fill all inputs..")
    }
    else{

        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.showDisplays("success", "Film added successfully..")
                
    }

    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e){

    if(e.target.id === "delete-film"){
       ui.deleteFilmFromUI(e.target);
       storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
       ui.showDisplays("success", "Film deleted successfully..")
    }
}

function clearAllFilms(){

    if(confirm("Are you sure you want to delete all films?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.showDisplays("primary", "All films are deleted successfully..")
    }

}