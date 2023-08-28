
function makeCards(events, idContenedor)
{

   let fecharef = data.currentDate
   for(let event of data.events)
      if (fecharef>event.date){ 
      {
         
         sendCard(event.image, event.name, event.description, event.date, event.price, idContenedor);
       
      }
   }
};

makeCards(data, 'pastEventsContainer');


