function UI(){

}

const filmList = document.getElementById("films");

UI.prototype.addFilmToUI = function(newfilm){

    filmList.innerHTML += `
    <tr>
        <td><img src="${newfilm.url}" class="img-fluid img-thumbnail poster"></td>
        <td class="title">${newfilm.title}</td>
        <td class="director">${newfilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
   </tr>
    `;

}

UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.showDisplays = function(type, message){

        const firstCardBody = document.querySelectorAll(".card-body")[0];

        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message; 

        firstCardBody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },1000)

        console.log(div);
}

UI.prototype.loadAllFilms = function(films){

    films.forEach(function(film){
        filmList.innerHTML += `<tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail poster"></td>
            <td class="title">${film.title}</td>
            <td class="director">${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Delete</a></td>
        </tr>        `
    });

}

UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function(){

    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }

}