document.getElementById("send").onclick = function(){

    let glutennumber = 0; 

    if(document.getElementById("isglutenfree").checked){
        glutennumber = 1;
    }
    let adatok = {
        name: document.getElementById("name").value,
        kepurl:document.getElementById("kepurl").value,
        isglutenfree: document.getElementById("isglutenfree").checked ? 1 : 0
    }
    console.log(adatok);

    fetch("https://pizza.kando-dev.eu/Pizza/", {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {
            "Content-Type": "application"
        }
    })
}