export default function home() {
    const content = document.getElementById('content');
    const homeHeader = document.createElement('h2');
    const homeBody = document.createElement('p');
    const homeImage = document.createElement('img');
    homeHeader.textContent = 'Really Good Restaurant';
    homeBody.textContent = 'Thanks for looking at our restaurant page!';
    homeImage.src = 'https://www.seriouseats.com/thmb/mrmfowJ7eHraUpKn5OmQRRSrHiY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__07__20200715-studio-ghibli-Ponyo_Ramen-2deccc3fadcb406db06d660885e6ac87.jpg'
    homeImage.alt = 'Some food'

    content.appendChild(homeHeader);
    content.appendChild(homeBody);
    content.appendChild(homeImage);
}