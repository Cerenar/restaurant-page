export default function menu() {
    const content = document.getElementById('content');
    const menuHeader = document.createElement('h2');
    const menuBody = document.createElement('div');
    const itemWrapper = document.createElement('div');
    const itemImage = document.createElement('img');
    const itemPara = document.createElement('p');
    const itemWrapper2 = document.createElement('div');
    const itemImage2 = document.createElement('img');
    const itemPara2 = document.createElement('p');

    menuHeader.textContent = 'Our Food';
    menuBody.classList.add('menu-wrapper');
    itemPara.textContent = 'Bacon and eggs, cooked in a sentient pan';
    itemPara.classList.add('menu-item-desc')
    itemImage.src = 'https://www.seriouseats.com/thmb/x6dcqHE-keGtGRMbwaEJqKxHeeQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__07__20200715-studio-ghibli-Howls_BaconEggs1500-ebebd31467c24b89af81d18bc73f638e.jpg';
    itemImage.classList.add('menu-item-img');
    itemWrapper.classList.add('menu-item-left');
    itemWrapper.appendChild(itemPara);
    itemWrapper.appendChild(itemImage);

    itemPara2.textContent = 'Bacon and eggs, cooked in a sentient pan';
    itemPara2.classList.add('menu-item-desc');
    itemImage2.src = 'https://www.seriouseats.com/thmb/x6dcqHE-keGtGRMbwaEJqKxHeeQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__07__20200715-studio-ghibli-Howls_BaconEggs1500-ebebd31467c24b89af81d18bc73f638e.jpg';
    itemImage2.classList.add('menu-item-img');
    itemWrapper2.classList.add('menu-item-right');
    itemWrapper2.appendChild(itemImage2);
    itemWrapper2.appendChild(itemPara2);

    content.appendChild(menuHeader);
    content.appendChild(menuBody);
    menuBody.appendChild(itemWrapper);
    menuBody.appendChild(itemWrapper2);
}