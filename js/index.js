function makeFilters(idfilter)
{
  const uniquecategories = data.events.reduce((categories, event) => 
  {
    if (!categories.includes(event.category)) 
    {
      categories.push(event.category);
      
        sendFilter(event.category, event._id, idfilter); 

    }
    return categories;
  }, []);
}
makeFilters('filterContainer'); 



















/* 
function makeFilters(idfilter)
{
  
  for (let event of data.events) 
   {
  
      sendFilter(event.category, event._id, idfilter); 
   
  }
 
 }

makeFilters('filterContainer'); */






/*                        Cartas 


*/
function makeCards(idContenedor)
{
  for(let event of data.events)
  {         
      sendCard(event.image, event.name, event.description, event.date, event.price, event._id, idContenedor);
  }
};

makeCards('eventsContainer');

























/* 

function makeCards(events, idContenedor)
{

   
  for(let event of data.events)
   {         


         let card = `
         <div class="col-12 col-sm-6 col-md-4 col-xl-3">
            <div class="card">
               <img src="${event.image}" class="card-img-top" alt="${event.name}">
               <div class="card-body">
                  <h5 class="card-title">${event.name}</h5>
                  <p class="card-text">${event.description}</p>
                  <p class="card-text">Date: ${event.date}</p>
                  <p class="card-text">Price: $ ${event.price}.-</p>
                  <a href="/details.html" class="mt-auto btn btn-danger text-white detalle">Details</a>
                </div>
            </div>
         </div>`;
         document.getElementById(idContenedor).innerHTML += card;
  
  }
};


makeCards(data, 'eventsContainer');










*/



