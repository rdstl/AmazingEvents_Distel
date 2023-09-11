const apiUrl = 'https://mindhub-xj03.onrender.com/api/amazing';
let data = null

getApi();

function getApi(){
  fetch(apiUrl)
  .then(response => response.json())
  .then(dataApi =>{
    data=dataApi
    //console.table(data.events) 
   highestAssistance(data); 
   lowestAssistance(data); 
   largestAssistance(data); 
   upcomingByCategory(data);
   pastByCategory(data);
  }) 
  .catch(error => console.log(error))
}


//                                         table 1
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
function largestAssistance(datax)
{
   let ha = datax.events.sort((a,b) => b.capacity-a.capacity).slice(0,5);
   for(elemento of ha)
   {
      console.log(elemento.name + "   " + elemento.capacity.toLocaleString());  
      
   }
   
}



//                                      table 2
let table2= [];
function upcomingByCategory(datax)
{
  /*  console.table(datax.events);  */
   let categories = [...new Set(datax.events.map(element => element.category))  ]
  /*  console.table(categories);  */

   categories.forEach(categoria=>{
      let row = 
      {
         category: categoria,
         revenues: 0,
         assistancePercentage: 0,
      }

      let revenuesAcc = 0;
      let assistancePercentage = 0;
      let assistancePercentage2 = 0;
       
      dateRef=datax.currentDate

      datax.events.filter(element => (element.date>dateRef)).filter(element => (element.category == categoria)).forEach(element => 
         {
            revenuesAcc+= (element.price*element.estimate)
            assistancePercentage2=((assistancePercentage2 + element.estimate*100/element.capacity)/2)
         
         })
      row.revenues = revenuesAcc;
      row.assistancePercentage = assistancePercentage2;

      table2.push(row); 

/*     console.table(row); */
 
   })


   console.table((table2.sort((a,b) => b.revenues-a.revenues)).slice(0,3));

/*    console.table(categories); */
}



//                                      table 3
let table3= [];
function pastByCategory(datax)
{
 
   let categories = [...new Set(datax.events.map(element => element.category))  ]
  /*  console.table(categories);  */

   categories.forEach(categoria=>{
      let row = 
      {
         category: categoria,
         revenues: 0,
         assistancePercentage: 0,
      }

      let revenuesAcc = 0;
      let assistancePercentage = 0;
      let assistancePercentage2 = 0;
       
      dateRef=datax.currentDate

      datax.events.filter(element => (element.date<dateRef)).filter(element => (element.category == categoria)).forEach(element => 
         {
            revenuesAcc+= (element.price*element.assistance)
            assistancePercentage2=((assistancePercentage2 + element.assistance*100/element.capacity)/2)
         
         })
      row.revenues = revenuesAcc;
      row.assistancePercentage = assistancePercentage2;

      table3.push(row); 

 
   })


   console.table((table3.sort((a,b) => b.revenues-a.revenues)).slice(0,3));


}


