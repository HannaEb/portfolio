
const images = document.querySelectorAll('img.project-image');
const modals = document.querySelectorAll('.modal');
const spans = document.getElementsByClassName('close');


for (let i = 0; i < images.length; i++) {
    images[i].onclick = event => {
        event.preventDefault();
        modal = document.querySelector(event.target.getAttribute('href'));
        modal.style.display = 'block';
    }
}

for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = () => {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') {
                modals[index].style.display = 'none';    
            }
        }
    }
}

window.onclick = event => {
    if (event.target.classList.contains('modal')) {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') {
                modals[index].style.display = 'none';   
            } 
        }
    }
}