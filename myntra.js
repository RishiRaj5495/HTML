



let createScript = document.querySelector('.new_container');
const itemc = [
  {
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
            <button class="btn-add-bag">Add to Bag
      
            </button>
            
          </div>
        </div> `
});

 createScript.innerHTML = innHtml;
