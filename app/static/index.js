document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('#home').addEventListener('click', () => load_page('home'));
    document.querySelector('#menu').addEventListener('click', () => load_menu('menu'));
    document.querySelector('#order').addEventListener('click', () => load_order('order'));
    document.querySelector('#history').addEventListener('click', () => load_history('history'));

    load_menu('menu');
    
    

});

function load_page()
{
  document.querySelector('#home-page').style.display = 'block';
  document.querySelector('#menu-page').style.display = 'none';
  document.querySelector('#order-page').style.display = 'none';
  document.querySelector('#history-page').style.display = 'none';
}

function load_menu(){
    document.querySelector('#menu-page').style.display = 'block';
    document.querySelector('#home-page').style.display = 'none';
    document.querySelector('#order-page').style.display = 'none';
    document.querySelector('#history-page').style.display = 'none';
}

function load_order(){
    document.querySelector('#order-page').style.display = 'block';
    document.querySelector('#home-page').style.display = 'none';
    document.querySelector('#menu-page').style.display = 'none';
    document.querySelector('#history-page').style.display = 'none';
}

function load_history(){
    document.querySelector('#history-page').style.display = 'block';
    document.querySelector('#home-page').style.display = 'none';
    document.querySelector('#menu-page').style.display = 'none';
    document.querySelector('#order-page').style.display = 'none';

}

let quantityElements = document.getElementsByClassName("quantity");
let buttons = document.getElementsByClassName("myButton");



for (let i = 0; i < quantityElements.length; i++) {
    let element = quantityElements[i].innerHTML;
    let quantityValue = parseInt(element);

    if (quantityValue === 0 && buttons[i]) {
        console.log(buttons[i]);
        buttons[i].disabled = true;
        buttons[i].style.backgroundColor = "grey";
        buttons[i].style.cursor = "default";
    }
}

// sidebar icons 
let list = document.querySelectorAll(".list")
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0;
        while (j < list.length) {
            list[j++].className = "list"
        }
        list[i].className = "list active"
    }
}

let showOrder = document.querySelector('.show-order');

showOrder.addEventListener("click", function() {

    document.querySelector('.title').style.display = 'none';
    document.querySelector('.All-product').style.display = 'none';


})



var sidebarLift = document.querySelector('.higher-lower');
var toggleB = document.getElementById('display_side_bar_lift');
var main_menu=document.querySelector('.main_menu');
var arrow=document.getElementById('arrow');

toggleB.addEventListener('click', function() {
            sidebarLift.style.display = 'block';
            main_menu.style.display='none';})
arrow.addEventListener('click',function(){
                sidebarLift.style.display = 'none';
                main_menu.style.display='block'
            })