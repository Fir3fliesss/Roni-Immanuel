const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
  e.name = e.name === 'menu' ? 'close' : 'menu'
  navLinks.classList.toggle('top-[150%]')
}

var video = $('.wrap-video').hover(hoverVideo, hideVideo);
function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

const observer = lozad();
observer.observe();

var typed = new Typed('#element', {
    strings: ['Drone',
    'Fpv'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
    });