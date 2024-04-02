export default function menu() {
    const content = document.getElementById('content');
    const menuBody = document.createElement('p');
    menuBody.textContent = 'Yummy food';

    content.appendChild(menuBody);
}