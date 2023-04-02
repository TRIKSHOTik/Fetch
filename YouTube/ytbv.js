const input = document.querySelector('input');
const form = document.querySelector('form');
const player = document.querySelector('.player');
const preview = document.querySelector('.preview');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let poisk = input.value;

    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${poisk}&type=video`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let content = data.items[0].id.videoId;
            console.log(content);
            player.innerHTML = "";
            player.insertAdjacentHTML("afterbegin", videoPlayer(content));
            preview.innerHTML = "";
            for (let i = 0; i < 5; i++) {
                let view = data.items[i].snippet.thumbnails.medium.url;
                preview.insertAdjacentHTML("beforeend", imgs(view));
            }
            let previews = document.querySelectorAll('img');
            previews.forEach(item => {
                item.addEventListener('click', (event) => {
                    player.innerHTML = "";
                    player.insertAdjacentHTML("afterbegin", videoPlayer(event.target.src.split('/')[4]));
                })
            })
        });

    input.value = '';
})

function videoPlayer(content) {
    return `<iframe class="video" width="700" height="400" src="https://www.youtube.com/embed/${content}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
}
function imgs(content) {
    return `<img src="${content}">`
}