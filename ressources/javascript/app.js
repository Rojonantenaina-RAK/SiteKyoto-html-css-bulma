const btn_humberger = document.querySelector('.btn-show-nav');
const header = document.querySelector('header');
const all_navtop_links = document.querySelectorAll('header>nav a');

btn_humberger.addEventListener('click', function(){header.classList.toggle('btn-active');});
all_navtop_links.forEach(function(item){
    item.addEventListener('click', function(){header.classList.toggle('btn-active')});
});