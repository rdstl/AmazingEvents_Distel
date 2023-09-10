const apiUrl = 'https://mindhub-xj03.onrender.com/api/amazing';
let data = null
getApi();

function getApi(){
  fetch(apiUrl)
  .then(response => response.json())
  .then(dataApi =>{
    data=dataApi
    /* console.table(data.events) */
   highestAssistance(data); 
   lowestAssistance(data); 
   largestAssistance(data);
  }) 
  .catch(error => console.log(error))
}



function highestAssistance(datax)
{
   let ha = datax.events.sort((a,b) => b.assistance/b.capacity-a.assistance/a.capacity).slice(0,5); 
   for(elemento of ha)
   {
      console.log(elemento.name + "   " + ((elemento.assistance)*100/(elemento.capacity)).toFixed(2) + "%" );  
   }
}
   

function lowestAssistance(datax)
{
   let ha = datax.events.sort((a,b) => a.assistance/a.capacity-b.assistance/b.capacity).slice(0,5);
   for(elemento of ha)
   {
      console.log(elemento.name + "   " + ((elemento.assistance)*100/(elemento.capacity)).toFixed(2) + "%" );  
   }
}

function largestAssistance(datax){
   let ha = datax.events.sort((a,b) => b.capacity-a.capacity).slice(0,5);
   for(elemento of ha)
   {
      console.log(elemento.name + "   " + elemento.capacity.toLocaleString());  
      
   }
   
}

