export default function home() {
    const content = document.getElementById('content');
    const homeBody = document.createElement('p');
    homeBody.textContent = 'Lorem ipsum dolem metra ipsy bipsy boop...';

    content.appendChild(homeBody);
}