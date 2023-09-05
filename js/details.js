let params = new URLSearchParams(window.location.search)
let id = params.get("id");

searchEvent(id);

function searchEvent(id) 
{
   for(let event of data.events)
   {
      if (id===event._id)
      {
         console.log("encontrado!!!");
         console.log( typeof(id) +" "+ id + " - " +typeof(event._id) +" "+ event._id); 
         makeDetail( event.image, event.name, event.description, event.date, event.category, event.place, event.capacity, event.price, 'detailContainer'); 
         return 
      }
   }
};
 

function makeDetail(detailImg, detailname, detaildescription, detaildate, detailcategory, detailplace, detailcapacity, detailprice, idContainer) {
 
    let detail = 
    `
    <div class="col-12 col-sm-6 col-md-6">
    <img src="${detailImg}" class="col-12 col-sd-6" col-md-6" alt="brand">
        </div>

        <div class="col-12 col-sm-6 col-md-6">
          
          <div class="row">
            <h3 class="detail-title">${detailname}</h3>
            <p class="detail-description">${detaildescription}</p>
            <p>Date: ${detaildate}</p>
            <p>Category: ${detailcategory}</p>
            <p>Place: ${detailplace}</p>
            <p>Capacity: ${detailcapacity}</p>
            <p>Price: $ ${detailprice}.-</p>

          </div> `;
    
    document.getElementById(idContainer).innerHTML += detail;
}



