const init = () => {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let inputField = document.getElementById("searchByID").value;
        // console.log(inputField);

        fetch(`http://localhost:3000/movies/${inputField}`)
            .then(response => response.json())
            .then(movies => {
                // console.log(movies);
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerHTML = movies.title;
                summary.innerHTML = movies.summary;
            });
    });
}


document.addEventListener('DOMContentLoaded', init);