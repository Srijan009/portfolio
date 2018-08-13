//select dom
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.nav-item');
// console.log(menuBtn);
// console.log(menu);
// console.log(menuBrand);
// console.log(menuNav);
// console.log(menuItems);
// menu Btn initially assign to false
var showmenu = false;
// add event listerner in menu btn
 menuBtn.addEventListener('click',toggleMenu);
 // function defination toggleMenu
 function toggleMenu(){
     if(!showmenu){
       menuBtn.classList.add('close');
       menu.classList.add('show');
       menuBrand.classList.add('show');
       menuNav.classList.add('show');
       menuItems.forEach(item => {
           item.classList.add('show');
       });
       showmenu = true;
     }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBrand.classList.remove('show');
        menuNav.classList.remove('show');
        menuItems.forEach(item => {
            item.classList.remove('show');
        });
        showmenu = false;
     }
 }
