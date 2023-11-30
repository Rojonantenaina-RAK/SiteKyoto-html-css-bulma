const btnHumberger = document.querySelector('.btn-show-nav');
const header = document.querySelector('header');
const allNavtopLinks = document.querySelectorAll('header>nav a');

btnHumberger.addEventListener('click', function(){header.classList.toggle('btn-active');});
allNavtopLinks.forEach(function(item){
    item.addEventListener('click', function(){header.classList.toggle('btn-active')});
});


function scrollToSectionWithDelay(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
  
    const targetId = event.currentTarget.getAttribute('href'); // Récupère l'ID de la cible depuis le lien
    const targetSection = document.querySelector(targetId); // Trouve la section correspondante
  
    if (targetSection) {
      setTimeout(() => {
        const offsetTop = targetSection.offsetTop; // Récupère la position verticale de la section
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth' // Active le défilement fluide
        });
      }, 100); // Attend une seconde (1000 millisecondes) avant de faire le scroll
    }
  }
  
  // Ajoute un gestionnaire d'événement de clic à tous les liens de navigation
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', scrollToSectionWithDelay);
  });
  