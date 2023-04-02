const comp = document.querySelector('.comp');

fetch(`http://api.citybik.es/v2/networks`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let arr = data.networks;
        for (let i = 0; i < arr.length; i++) {
            
            if(arr[i].location.city == "Hamburg"){
                arr[i].company.forEach(item => {
                    render(item)
                });
            }
        }
});


function render(compan) {
    let li = document.createElement('li');
    li.innerText = compan;
    comp.append(li)
}