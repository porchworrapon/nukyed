function AppendImageElement(keyword, Index) {
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${Index}`;
    const galleryElem = document.querySelector('.Gallery');
    galleryElem.appendChild(imgElem);
}

function deleteOld() {
    const galleryElem = document.querySelector('.Gallery')
    galleryElem.innerHTML = '';
}

function searchPhotos(event) {
    const keyword = event.target.value;

    if (event.key == 'Enter' && keyword) {
        deleteOld();

        for (let i = 1; i <= 9; i++) {
            AppendImageElement(keyword, i);
        }

    }
}


function run() {
    /*   for (let i = 1; i <= 9; i++) {
          AppendImageElement("sex", i);
      } */

    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhotos);
}

run();