



let createScript = document.querySelector('.new_container');



let arr = [];

display();
function addToBag(itemId){
 arr.push(itemId);
 display();
}

function display(){
let display = document.querySelector('.bahItem');
if(arr.length > 0){
  display.style.visibility = 'visible';
 display.innerText = arr.length;}
else{
  display.style.visibility = 'hidden';
}

}


const itemc = [
  {
    id : '001',
  image :'Image/must1.png',
  rating : {
    star: 4.5,
    noOfReviews : 1400,
  },

  company_name : ' Malvia',

item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
original_Price : '1045.000',
discount_Precentage: '45',
  },



  {
    id : '002',
    image :'Image/must3.png',
    rating : {
      star: 4.5,
      noOfReviews : 1400,
    },
  
    company_name : ' Malvia',
  
  item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
  original_Price : '1045.000',
  discount_Precentage: '45',
    },

    {
      id :'003',
      
      image :'Image/must2.png',
      rating : {
        star: 4.5,
        noOfReviews : 1400,
      },
    
      company_name : ' Malvia',
    
    item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
    original_Price : '1045.000',
    discount_Precentage: '45',
      },

      {
        id :'004',
        image :'Image/must4.png',
        rating : {
          star: 4.5,
          noOfReviews : 1400,
        },
      
        company_name : ' Malvia',
      
      item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
      original_Price : '1045.000',
      discount_Precentage: '45',
        },
      
      
      
        { 
          id : '005',
          image :'Image/must5.png',
          rating : {
            star: 4.5,
            noOfReviews : 1400,
          },
        
          company_name : ' Malvia',
        
        item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
        original_Price : '1045.000',
        discount_Precentage: '45',
          },
      
          {
            id :'006',

            image :'Image/must6.png',
            rating : {
              star: 4.5,
              noOfReviews : 1400,
            },
          
            company_name : ' Malvia',
          
          item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
          original_Price : '1045.000',
          discount_Precentage: '45',
            },

            {
              id :'007',
              image :'Image/must7.png',
              rating : {
                star: 4.5,
                noOfReviews : 1400,
              },
            
              company_name : ' Malvia',
            
            item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
            original_Price : '1045.000',
            discount_Precentage: '45',
              },
              {
                id :'008',
                image :'Image/must8.png',
                rating : {
                  star: 4.5,
                  noOfReviews : 1400,
                },
              
                company_name : ' Malvia',
              
              item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
              original_Price : '1045.000',
              discount_Precentage: '45',
                },

                {
                  id :'009',
                  image :'Image/must9.png',
                  rating : {
                    star: 4.5,
                    noOfReviews : 1400,
                  },
                
                  company_name : ' Malvia',
                
                item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
                original_Price : '1045.000',
                discount_Precentage: '45',
                  },    
                  {id :'010',

                    image :'Image/must10.png',
                    rating : {
                      star: 4.5,
                      noOfReviews : 1400,
                    },
                  
                    company_name : ' Malvia',
                  
                  item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
                  original_Price : '1045.000',
                  discount_Precentage: '45',
                    },

                    {
                      id :'011',
                      image :'Image/must11.png',
                      rating : {
                        star: 4.5,
                        noOfReviews : 1400,
                      },
                    
                      company_name : ' Malvia',
                    
                    item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
                    original_Price : '1045.000',
                    discount_Precentage: '45',
                      },

                      {id :'012',

                        image :'Image/must12.png',
                        rating : {
                          star: 4.5,
                          noOfReviews : 1400,
                        },
                      
                        company_name : ' Malvia',
                      
                      item_name : 'Rhodium-Plated CZ Floral Studs',current_price : '10,000.000',
                      original_Price : '1045.000',
                      discount_Precentage: '45',
                        },

]
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

 
 
  console.log(arr);