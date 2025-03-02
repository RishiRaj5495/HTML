
 let bagItem ;
 console.log(bagItem+'tttttt');
onload()
function onload(){
  getItem();
  displays() ;
}

function getItem(){
 bagItem = arr.map(element => {

for(i = 0 ; i < itemc.length ; i++){

  if(element ==  itemc[i].id){
    return itemc[i] ;
    }
   

}


});
// console.log(bagItem);

}
function removeBagItem(itemID){
  arr = arr.filter(element => element != itemID );
  console.log(arr)
   localStorage.setItem('itemI',JSON.stringify(arr));

  getItem()
  displays() 
}


function displays(){

  let bag = document.querySelector('#bag-container');
  console.log(bagItem);
 let innHtml = '';
bagItem.forEach(element => {

  innHtml +=  displayBagItem(element) ;


});
bag.innerHTML = innHtml;
}


// bag.innerHTML = displayBagItem();
function  displayBagItem(array){
return` <div class="bag-item-container">
            <div class="item-left-part">
             <img src="${array.image}" class="left-image" alt="loii">
        
            </div>
            <div class="item-right-part">
          <div class= "bag-company">${array.company_name}</div>
           <div class="item_name">${array.item_name }</div>
            <div  class="price">
           <span class="current-price">Rs ${array.current_price} </span>
           <span class="original-price">Rs ${array.original_Price}  </span>
           <span class="bag-discount">(${array.discount_Precentage}% OFF)</span>
           </div>

          <div class=" return-period">
          <span class=" return-period-days"> 14 days</span>  return available </div>
          <div class=" delivery-details"> 
          <span class="delivery">Deliver by</span> <span class="details-days">10 ocr 2023</span></div>
          </div>
 
           <div class=" remove-from-cart" onclick=" removeBagItem(${array.id}) " >x</div>
</div> 
          `


}
