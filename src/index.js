import about from './about.js';
import home from './home.js';
import menu from './menu.js';

const content = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

function viewChange() {
    while(content.children.length > 0) {
        content.removeChild(content.firstChild);
    }
}

homeBtn.addEventListener('click', () => {
    viewChange();
    home();
})

menuBtn.addEventListener('click', () => {
    viewChange();
    menu();
});

aboutBtn.addEventListener('click', () => {
    viewChange();
    about();
});

home();