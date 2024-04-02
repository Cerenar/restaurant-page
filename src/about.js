export default function about() {
    const content = document.getElementById('content');
    const aboutBody = document.createElement('p');
    aboutBody.textContent = 'We serve food here, sir';
    content.appendChild(aboutBody);
}