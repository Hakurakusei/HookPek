const menu = document.querySelector(".hamburger");
menu.addEventListener('click',function(){
   document.querySelector('.hamburger').classList.toggle('active');
   document.querySelector('.globalMenuSp').classList.toggle('open');
});


const service = document.querySelector(".nav-open");
service.addEventListener('click',function(){
   document.querySelector('.service-items').classList.toggle('open');
   document.querySelector('.service-img').classList.toggle('toggle');
});