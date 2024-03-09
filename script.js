const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
  e.name = e.name === 'menu' ? 'close' : 'menu'
  navLinks.classList.toggle('top-[150%]')
}

document.addEventListener('DOMContentLoaded', function () {
    const modelViewer = document.querySelector('model-viewer');
    if (modelViewer && modelViewer.shadowRoot) {
        const shadowRoot = modelViewer.shadowRoot;
        const userInput = shadowRoot.querySelector('.userInput');
        
        userInput.style.width = '70%';
        userInput.style.height = '70%';
        // userInput.style.left = '3%';
    }
});

var video = $('.wrap-video').hover(hoverVideo, hideVideo);
function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}

const observer = lozad();
observer.observe();
