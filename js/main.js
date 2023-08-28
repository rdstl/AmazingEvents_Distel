
function sendCard(cardImage, cardName, cardDescription, cardDate, cardPrice, cardIdContainer ){
         
   let card = `
   <div class="col-12 col-sm-6 col-md-4 col-xl-3">
      <div class="card">
            <img src="${cardImage}" class="card-img-top" alt="${cardName}">
      <div class="card-body">
            <h5 class="card-title">${cardName}</h5>
            <p class="card-text">${cardDescription}</p>
            <p class="card-text">Date: ${cardDate}</p>
            <p class="card-text">Price: $ ${cardPrice}.-</p>
            <a href="/details.html" class="mt-auto btn btn-danger text-white detalle">Details</a>
          </div>
           
          </div>
      </div>
   </div>`;
   document.getElementById(cardIdContainer).innerHTML += card;
}