
function makeCards(idContenedor)
{

   let fecharef = data.currentDate
   for(let event of data.events)
      if (fecharef>event.date){ 
      {
         // send card data to 'sendCard' function in the 'main.js' file. 
         sendCard(event.image, event.name, event.description, event.date, event.price, event._id, idContenedor);
       
      }
   }
};

makeCards('pastEventsContainer');


