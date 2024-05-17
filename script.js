fetch("https://pizza.kando-dev.eu/Pizza")
.then(function (res) {
    return res.json();
})
.then(function (datas) {
    console.log(datas);
    let content = document.getElementById("pizda");
    for (const data of datas) {
        content.innerHTML += `<tr class="zipda">
        <td><h3>${data.name}
            <img src="${data.kepURL}" alt="${data.name}" width="300">
        </h3></td>
        <td><h3>Az űr legfrissebb gyümölcsei préselve</h3></td>
        <td><h3>5 GP</h3></td>
    </tr>`
    }
})