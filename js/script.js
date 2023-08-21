window.addEventListener('DOMContentLoaded', () =>{
    document.body.onload = function(){
        setTimeout(() => {
            let preloader = document.getElementById('page-preloader');
            if(!preloader.classList.contains('done')){
                preloader.classList.add('done')
            }
        }, 1000);
    }
});

let burger = document.querySelector('.burger__menu');
let sidebar1 = document.querySelector('.sidebar');
let arrow = document.querySelector('.icon__arrow')

burger.addEventListener('click', function () {
  burger.classList.toggle('active');
  sidebar1.classList.toggle('active');
});

arrow.addEventListener('click', function () {
    arrow.classList.toggle('active');
    burger.classList.remove('active');
    sidebar1.classList.remove('active');
});
// document.querySelector('burger__menu').addEventListener('click', function() {
//     $('burger__menu, .sidebar').toggleClass('active');
// })