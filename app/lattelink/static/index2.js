function search(){
    let searchbar = document.querySelector('.search-input').value.toUpperCase();
    let productlist = document.querySelector('.All-product');
    let product = document.querySelectorAll('.card-group');
    let productname = document.getElementsByClassName('productname')

    
    for(let i = 0; i < productname.length; i++){
        if(productname[i].innerHTML.toUpperCase().indexOf(searchbar) >= 0)
        {
            product[i].style.display = '';
        }
        else{
            product[i].style.display = 'none';
        }
    }
    }


    // const button_of_add = document.querySelectorAll('.myButton'); // Select the button by its id
    // const img_item = document.querySelectorAll('.img_sidebar');
    // const title_item=document.querySelectorAll('.productname')
    // const price_item=document.querySelectorAll('.price_sidebar')

    // let sum = 0;
    // function total_price(price){
    //     sum += parseFloat(price);
    //     console.log(sum);
    // }

    // button_of_add.forEach((button, index) => {
    //     button.addEventListener("click", function() {
    //     const left_sid_bar = document.querySelector('.left-sidbar');
    //     const item = document.createElement('div');
    //     item.classList.add('order');
    //     item.setAttribute('data-price', '10');
    //      // Add the 'order' class to the new item
    //     // Add the content for the new item
    //     const imageSrc = img_item[index].src;
    //     const title_list = title_item[index].textContent;
    //     const price_list = price_item[index].textContent;
    //     console.log(title_list);
    //     item.innerHTML = `
    //             <img src="${imageSrc}">
    //             <div class="item-info">
    //                 <p>${title_list}</p>
    //                 <h5>${price_list}</h5>
    //                 <div class="item-quantity no-select">
    //                     <span class="material-symbols-outlined decrement">do_not_disturb_on</span>
    //                     <p class="counter">${5}</p>
    //                     <span class="material-symbols-outlined increment">add_circle</span>
    //                 </div>
    //             </div>
                
    //     `;
    //     left_sid_bar.appendChild(item); // Append the new item to the sidebar
    //     });
    // });









    
    ///////////////////////////////////////////////////////////////////////////////////////////
    const paymentButton_1 = document.querySelector('.btn');
    const buttonsOfAdd = document.querySelectorAll('.myButton');
    const imgItems = document.querySelectorAll('.img_sidebar');
    const titleItems = document.querySelectorAll('.productname');
    const priceItems = document.querySelectorAll('.price_sidebar');
    
    let items = [];
    let counter_of_table = 0;
    
    buttonsOfAdd.forEach((button, index) => {
      button.addEventListener('click', function () {
        const leftSidebar = document.querySelector('.left-sidbar');
        const item = document.createElement('div');
        item.classList.add('order');
    
        const imageSrc = imgItems[index].src;
        const title = titleItems[index].textContent;
        const price = parseFloat(priceItems[index].textContent.replace('$', ''));
    
        let quantity = 1;
        let total = quantity * price;
    
        item.innerHTML = `
            <div class="order" data-price="${price}">
              <img src="${imageSrc}">
              <div class="item-info">
                <p>${title}</p>
                <h5>$${price.toFixed(2)}</h5>
                <div class="item-quantity no-select">
                  <span class="material-symbols-outlined decrement">remove_circle</span>
                  <p class="counter">${quantity}</p>
                  <span class="material-symbols-outlined increment">add_circle</span>
                </div>
              </div>
            </div>`;
    
        const decrementButton = item.querySelector('.decrement');
        const incrementButton = item.querySelector('.increment');
        const counterElement = item.querySelector('.counter');
    
        decrementButton.addEventListener('click', () => {
          if (quantity > 1) {
            quantity--;
            counterElement.textContent = quantity;
            total = quantity * price;
            updateTotals(total);
          }
        });
    
        incrementButton.addEventListener('click', () => {
          quantity++;
          counterElement.textContent = quantity;
          total = quantity * price;
          updateTotals(total);
        });
    
        const newItem = { price, quantity, total };
        items.push(newItem);
        leftSidebar.appendChild(item);
        updateTotals(total);
      });
    });
    
    function updateTotals(subtotal) {
      items.forEach((item) => {
        item.total = item.quantity * item.price;
        subtotal += item.total;
      });
    
      let discount = 2;
      let total = subtotal - discount;
    
      const subtotalElement = document.querySelector('.subtotal p');
      const discountElement = document.querySelector('.discount p');
      const totalElement = document.querySelector('.total p');
    
      subtotalElement.textContent = '$' + subtotal.toFixed(2);
      discountElement.textContent = '-$' + discount.toFixed(2);
      totalElement.textContent = '$' + total.toFixed(2);
    }
    
    const paymentButton = document.querySelector('.btn');
    paymentButton.addEventListener("click", function () {
      // Replace with your actual payment processing logic
      const table_of_order = document.querySelector('.table_of_order');
      const total_of_price = document.querySelector('.total p');
      const item_of_order = document.createElement('tr');
      item_of_order.style.width = '100%';
      counter_of_table++;
      const currentDate = new Date();
      item_of_order.innerHTML = `
        <td>${counter_of_table}</td>
        <td>${currentDate}</td>
        <td>${total_of_price.innerHTML}</td>
        <td>cash</td>
      `;
      table_of_order.appendChild(item_of_order);
    
      // Clear items and update totals
      items = [];
      const leftSidebar = document.querySelector('.left-sidbar');
      leftSidebar.innerHTML = '';
      updateTotals(0);
      leftSidebar.appendChild(arrow);
      leftSidebar.appendChild(order_list_word);
    
      alert("Process to payment!");
    });
    

/*paymentButton_1.addEventListener("click", function() {
  // Replace with your actual payment processing logic
  alert("Process to payment!");
  // window.location.reload();
});*/


    /*const button_of_add = document.querySelectorAll('.myButton'); // Select the buttons by their class
    const img_items = document.querySelectorAll('.img_sidebar');
    const title_items = document.querySelectorAll('.productname');
    const price_items = document.querySelectorAll('.price_sidebar');

    let subtotal = 0; // Initialize subtotal variabl

    button_of_add.forEach((button, index) => {
    button.addEventListener("click", function() {
      const left_sidebar = document.querySelector('.left-sidbar');
      const item = document.createElement('div');
      item.classList.add('order'); // Add the 'order' class to the new item

      // Add the content for the new item
      const imageSrc = img_items[index].src;
      const title = title_items[index].textContent;
      const price = parseFloat(price_items[index].textContent.replace('$', '')); // Convert price to a number

      let quantity = 1; // Initialize quantity to 1
      let total = quantity * price;

      item.innerHTML = `
        <div class="order" data-price="${price}">
          <img src="${imageSrc}">
          <div class="item-info">
            <p>${title}</p>
            <h5>$${price.toFixed(2)}</h5>
            <div class="item-quantity no-select">
              <span class="material-symbols-outlined decrement">do_not_disturb_on</span>
              <p class="counter">${quantity}</p>
              <span class="material-symbols-outlined increment">add_circle</span>
            </div>
          </div>
        </div>`
      ;

      const decrementButton = item.querySelector('.decrement');
      const incrementButton = item.querySelector('.increment');
      const counterElement = item.querySelector('.counter');
      decrementButton.addEventListener('click', () => {
        if (quantity > 1) {
          quantity--;
          counterElement.textContent = quantity;
          total = quantity * price;
          updateTotals(subtotal);
          }
      });

      incrementButton.addEventListener('click', () => {
        quantity++;
        counterElement.textContent = quantity;
        total = quantity * price;
        updateTotals(subtotal);
      });

      left_sidebar.appendChild(item); // Append the new item to the sidebar

      subtotal += total; // Update the subtotal
      updateTotals(subtotal);
    });
  });
  function updateTotals(subtotal) {
    let discount = 2; // Replace with the actual discount amount
    let total = subtotal - discount;
    // Update the elements displaying totals
    const subtotalElement = document.querySelector('.subtotal p');
    const discountElement = document.querySelector('.discount p');
    const totalElement = document.querySelector('.total p');

    subtotalElement.textContent = "$" + subtotal.toFixed(2);
    discountElement.textContent = "-$" + discount.toFixed(2);
    totalElement.textContent = "$" + total.toFixed(2);
}*/
//////////////////////////////////////////////////////////////////////////////////////






















/*
const currentDate = new Date();
 const paymentButton = document.querySelector('.btn');
let counter_of_table = 0;
paymentButton.addEventListener("click", function() {
  // Replace with your actual payment processing logic
  const table_of_order = document.querySelector('.table_of_order');
  const total_of_price = document.querySelector('.total p');
  const item_of_order = document.createElement('tr')
    counter_of_table++;
  item_of_order.innerHTML = `
  <td>${counter_of_table}</td>
  <td>${currentDate}</td>
  <td>${total_of_price.innerHTML}</td>
  <td>cash</td>
  `;
  table_of_order.appendChild(item_of_order);
  console.log(totalElement.innerHTML);
  // // // // //
  items = [];
  const leftSidebar = document.querySelector('.left-sidbar');
  leftSidebar.innerHTML = ''; // Remove all child elements
  updateTotals(0); // Reset totals to zero
  alert("Process to payment!");
  // window.location.reload();
});

//////////////////////////////

// paymentButton.addEventListener("click", function() {
//   const total_of_price = document.querySelector('.total p');
//   const currentDate = new Date();
  
//   // Replace with your actual payment processing logic
//   const formData = new FormData();
//   formData.append('user', 'hassan'); // Replace with actual user data
//   formData.append('total_price', total_of_price.innerHTML);
//   formData.append('date', currentDate);

//   fetch('/store_order/', {
//     method: 'POST',
//     body: formData,
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data.message);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// });
*/
const order_list_word=document.querySelector('.order_list_word')
const clearButton = document.querySelector('.btn_clear_all');
clearButton.addEventListener('click', function () {
    // Clear items and update totals
    items = [];
    const leftSidebar = document.querySelector('.left-sidbar');
    leftSidebar.innerHTML = '';
    updateTotals(0);
    leftSidebar.appendChild(arrow);
    leftSidebar.appendChild(order_list_word);
});


var sidebar = document.getElementById('sidebar');
var home22 = document.getElementById('home');
var menu22 = document.getElementById('menu');
var oredr22 = document.getElementById('order');
var history22 = document.getElementById('history');
var toggleButton = document.getElementsByClassName('display_side_bar_right')[0];
// Check if the button exists before trying to add an event listener
if (toggleButton) {
    // Toggle the sidebar on button click
    toggleButton.addEventListener('click', function () {
        if (sidebar.style.display === 'none' || sidebar.style.display === '') {
            sidebar.style.display = 'block';
            home22.addEventListener('click', function(){
              sidebar.style.display = 'none';
            })
            menu22.addEventListener('click', function(){
              sidebar.style.display = 'none';
            })
            oredr22.addEventListener('click', function(){
              sidebar.style.display = 'none';
            })
            history22.addEventListener('click', function(){
              sidebar.style.display = 'none';
            })
        } else {
            sidebar.style.display = 'none';
        }
    });
}








    