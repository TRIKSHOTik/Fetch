const row = document.querySelector('.row');

fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i += 10) {
            let flag = data[i].flags.svg;
            let country = data[i].name.official;
            let region = data[i].region;
            let population = data[i].population;
            let language = Object.values(data[i].languages);
            let money = Object.values(data[i].currencies);
            let arrLeng = [],
            arrSymb = [];
            money.forEach((item) => {
                arrLeng.push(item.name);
                arrSymb.push(item.symbol);
            })
            row.insertAdjacentHTML("beforeend",createCards(flag, country, region, `👨‍👩‍👧‍👦 ${population}`, `🗣️ ${language}`, `💰 ${arrSymb} ${arrLeng}`))
        }
    });

function createCards(flag, countryName, region, population, languageStr, moneyStr) {
    return `
    <div class= 'col'>
    <div class = 'card'>
        <img src="${flag}" class="card-img-top">
        <div class="card-body">
        <h2 class='country'>${countryName}</h2>
        <p class='region'>${region}</p>
        <p class='population'>${population}</p>
        <p class='language'>${languageStr}</p>
        <p class='money'>${moneyStr}</p>
        </div>
    </div>
    </div>
    `
}