export default function about() {
    const content = document.getElementById('content');
    const aboutHeader = document.createElement('h2');
    const aboutBody = document.createElement('p');
    aboutBody.classList.add('about-blurb');
    aboutHeader.textContent = 'About Us';
    aboutBody.textContent = 'We serve food here, sir.';
    content.appendChild(aboutHeader);
    content.appendChild(aboutBody);
}