function search(){
    let searchbar = document.querySelector('.search-input').value.toUpperCase();
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
        //
        item.innerHTML = `
            <div class="order" data-price="${price}">
            <button type="button" class="btn btn-danger" style="padding: 0.70rem 1.6875rem; margin-top: 0; margin-right: 4%;">X</button>
              <img src="${imageSrc}">
              <div class="item-info">
                <p>${title}</p>
                <h5>$${price.toFixed(2)}</h5>
                <div class="item-quantity no-select">
                </div>
              </div>
            </div>`;
        leftSidebar.appendChild(item);
    
        // Add the item to the items array
        items.push({ title: title, price: price, quantity: quantity });
    
        updateTotals();
      });
    });
    
    // Function to update the totals
    function updateTotals() {
      let subtotal = 0;
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
    
    // Event delegation to handle deleting items
    // document.addEventListener('click', function (event) {
    //   if (event.target && event.target.className == 'btn btn-danger') {
    //     const itemToDelete = event.target.parentElement.parentElement;
    //     const itemIndex = Array.from(itemToDelete.parentElement.children).indexOf(itemToDelete);
    
    //     // Remove the item from the DOM
    //     itemToDelete.remove();
    
    //     // Remove the item from the items array
    //     items.splice(itemIndex, 1);
    
    //     updateTotals();
    //   }
    // });

    document.addEventListener('click', function (event) {
      if (event.target && event.target.className == 'btn btn-danger') {
        const itemToDelete = event.target.parentElement;
        const itemToDelete2 = event.target.parentElement.parentElement;
        const itemIndex = Array.from(itemToDelete.parentElement.children).indexOf(itemToDelete);
    
        // Remove the item from the items array
        items.splice(itemIndex, 1);
    
        // Remove the item from the DOM
        itemToDelete2.remove();
    
        updateTotals();
      }
    });
    
    
    
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
    
      alert("The payment was completed successfully!");
    });
    


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








    