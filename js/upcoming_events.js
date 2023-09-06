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



function makeCards(datax, idContenedor)
{
   let fecharef = data.currentDate

   for(let event of datax)
      if (fecharef<event.date){ 
      {
         sendCard(event.image, event.name, event.description, event.date, event.price, event._id, idContenedor);
    
      }
   }
};

makeCards(data.events, 'upcomingEventsContainer');


/*                                                             filters */


const filterContainer = document.getElementById('filterContainer')
const texto = document.getElementById('texto');
filterContainer.addEventListener("change", filtro);
texto.addEventListener("input",filtro)

/*                                                   functions         */
function dateFilter(ordenamiento)
{
   let fecharef = data.currentDate
   let arre = [];
   for(let event of data.events)
      if (fecharef<event.date){ 
      {
             arre.push();
             
      }
   }
   console.log(arre);
   return arre;
}


function categoryFilter(arreglo)
{
    let checkboxes = Array.from(document.getElementsByClassName("form-check-input"));
    let checkedboxes = checkboxes.filter(check => check.checked);
    let valores = checkedboxes.map(chAz => chAz.value);
    if(valores.length == 0)
    {
        return arreglo
    }
    let arre2 = arreglo.filter(categ => valores.includes(categ.category));  
    return arre2;
}

function nameFilter(arreglo, texto)
{
   let arre3 = arreglo.filter(elemento => elemento.name.toLowerCase().includes(texto.trim().toLowerCase()) || elemento.description.toLowerCase().includes(texto.trim().toLowerCase()))
  return arre3;
}

function filtro()
{
  let byDate = dateFilter(data.events); 
  let byCategory = categoryFilter(byDate);
  let byName = nameFilter(byCategory, texto.value);
   
  makeCards(byName, 'eventsContainer'); 
 
}