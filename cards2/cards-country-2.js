const row = document.querySelector('.row');

fetch(`https://restcountries.com/v3.1/name/belarus`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let flag = data[0].flags.svg;
        let country = data[0].name.official;
        let region = data[0].region;
        let population = data[0].population;
        let language = Object.values(data[0].languages);
        let money = Object.values(data[0].currencies);
        let arrLeng = [],
            arrSymb = [];
        money.forEach((item) => {
            arrLeng.push(item.name);
            arrSymb.push(item.symbol);
        })
        row.insertAdjacentHTML("beforeend", createCards(flag, country, region, `👨‍👩‍👧‍👦 ${population}`, `🗣️ ${language}`, `💰 ${arrSymb} ${arrLeng}`))
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


fetch(`https://restcountries.com/v3.1/name/latvia`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let flag = data[0].flags.svg;
        let country = data[0].name.official;
        let region = data[0].region;
        let population = data[0].population;
        let language = Object.values(data[0].languages);
        let money = Object.values(data[0].currencies);
        let arrLeng = [],
            arrSymb = [];
        money.forEach((item) => {
            arrLeng.push(item.name);
            arrSymb.push(item.symbol);
        })
        row.insertAdjacentHTML("beforeend", createCardsNeighbors(flag, country, region, `👨‍👩‍👧‍👦 ${population}`, `🗣️ ${language}`, `💰 ${arrSymb} ${arrLeng}`))
    });


function createCardsNeighbors(flag, countryName, region, population, languageStr, moneyStr) {
    return `
    <div class= 'col-1'>
    <div class = 'card'>
        <p class = 'neighbor'>Соседняя страна</p>
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