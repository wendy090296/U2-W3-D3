const cardsContainer = document.getElementById("card-container");

// vado a creare la fetch
const myBook = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        // se non ci sono errori e la chiamata torna ok
        // allora ritornami il documento json da cui proseguo prendendo i dati necessari
        return response.json();
      } else {
        if (response.status === 400) {
          // se la risposta non é ok ma da errore , si scende nel catch() alla riga 20
          throw new Error("404 PAGE NOT FOUND!");
        } else if (response.status === 500) {
          throw new Error("500 SERVER ERROR!");
        } else {
          throw new Error("NOT SPECIFIED ERROR!");
        }
      }
    })
    // siccome response.json torna una Promise, ci vuole un altro .then()
    .then((booksArray) => {
      console.log(booksArray);
      //   ora manipolo il DOM!
      const divBook = document.getElementById("divBook");
      const rowCard = document.createElement("div");
      rowCard.classList.add("row", "justify-content-center", "g-3");
      booksArray.forEach((element) => {
        const cardContent = document.createElement("div");
        cardContent.classList.add("col-4");
        cardContent.innerHTML = `
                      <div class="card border-dark" >
                         <img src="${
                           booksArray.img
                         }" class="card-img-top" alt="cover">
                         <div class="card-body text-center">
                          <h5 class="card-title">TITLE:<br>${booksArray.title.toUpperCase()}</h5>
                          <p class="card-text">PRICE: ${booksArray.price}</p>
                          <a href="#" class="btn btn-primary">DELETE</a>
                         </div>
                      </div>
        `;
        divBook.appendChild(rowCard);
        rowCard.appendChild(cardContainer);

        const deleteButton = contenutoCard.querySelector(".btn-primary");
        deleteButton.addEventListener("click", function () {
          contenutoCard.classList.add("d-none");
        });
      });
    });
}.catch((error) => {
  console.log("generic error", error);
});

myBooks(); // invoco la funzione iniziale
