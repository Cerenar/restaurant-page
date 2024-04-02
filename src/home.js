export default function home() {
    const content = document.getElementById('content');
    const homeHeader = document.createElement('h2');
    const homeBody = document.createElement('p');
    const homeImage = document.createElement('img');
    homeHeader.textContent = 'This is home';
    homeBody.textContent = 'Lorem ipsum dolem metra ipsy bipsy boop...';
    homeImage.src = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png'
    homeImage.alt = 'Some food'

    content.appendChild(homeHeader);
    content.appendChild(homeBody);
    content.appendChild(homeImage);
}