import about from './about.js';
import home from './home.js';
import menu from './menu.js';
import './style.css';

const content = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

home();
homeBtn.classList.add('active-tab');

function viewChange() {
    while(content.children.length > 0) {
        content.removeChild(content.firstChild);
    }
}

homeBtn.addEventListener('click', () => {
    viewChange();
    home();
    homeBtn.classList.add('active-tab');
    menuBtn.classList.remove('active-tab');
    aboutBtn.classList.remove('active-tab');
})

menuBtn.addEventListener('click', () => {
    viewChange();
    menu();
    homeBtn.classList.remove('active-tab');
    menuBtn.classList.add('active-tab');
    aboutBtn.classList.remove('active-tab');
});

aboutBtn.addEventListener('click', () => {
    viewChange();
    about();
    homeBtn.classList.remove('active-tab');
    menuBtn.classList.remove('active-tab');
    aboutBtn.classList.add('active-tab');
});

