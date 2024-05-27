 let id = 0;
let adatok = []

fetch("https://pizza.kando-dev.eu/Pizza")
.then(function (res) {
    return res.json();
})
.then(function (res) {
    console.log(res);
    let content = document.getElementById("pizda");
    for (const data of res) {
        id = data.id;
        content.innerHTML += `<tr class="zipda">
        <td><h3>${data.name}
            <img src="${data.kepURL}" alt="${data.name}" width="300">
        </h3></td>
        <td><h3>Az űr legfrissebb gyümölcsei préselve</h3></td>
        <td><h3>5 GP</h3></td>
    </tr>
    <button onclick="proba(${id})">Részletek</button>`
    
    }
    
})

function proba(id) {
    fetch("https://pizza.kando-dev.eu/Pizza/"+id)
.then(function (res) {
    return res.json();
})
.then(function (res) {
    console.log(res);
    let content = document.getElementById("pizda");
    {
        content.innerHTML = `<tr class="zipda">
        <td><h3>${res.name}
            <img src="${res.kepURL}" alt="${res.name}" width="300">
        </h3></td>
        <td><h3>Az űr legfrissebb pizzái</h3></td>
        <td><h3>7 GP</h3></td>
    </tr>
    `}})
}