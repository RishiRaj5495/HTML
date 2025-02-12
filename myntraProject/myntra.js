



let createScript = document.querySelector('.new_container');



let arr = []  ;

let bagItemStr = localStorage.getItem('itemI');
arr = bagItemStr ? JSON.parse(bagItemStr) : [];
console.log( `mlmlmlm2 ${arr.length} `);
display();
function addToBag(itemId){


 arr.push(itemId);
 localStorage.setItem('itemI',JSON.stringify(arr));
 
 display();
}

function display(){
  //console.log(alert=`Item is already you selected ${itemId}`);
  console.log(`lllllll ${arr}`); 
let display = document.querySelector('.bahItem');
if(arr.length > 0 ){
  display.style.visibility = 'visible';
 display.innerText = arr.length;}
else{
  display.style.visibility = 'hidden';
}

}



let innHtml = '';
itemc.forEach( item => {
  innHtml+= ` <div class="new1_container">
            <img src="${item.image}" class="must_bitic" alt="loii">
      
            <div class="akJagah">
            <div class="rating">
               ${item.rating.star}⭐| ${item.rating. noOfReviews}k
            </div>
            <div class="company_name">${item.company_name}
              
            </div>
            <div class="item_name">${item.item_name }</div>
            <div  class="price">
           <span class="current-price">Rs ${item.current_price} </span>
           <span class="original-price">Rs ${item.original_Price}  </span>
           <span class="discount">(${item.discount_Precentage}% OFF)</span>
      
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id}) " >Add to Bag
      
            </button>
            
          </div>
        </div> `
});

 createScript.innerHTML = innHtml;

 
 
  console.log(`tytytyt ${arr}`);
console.log( `klklklk ${arr.length} `);
