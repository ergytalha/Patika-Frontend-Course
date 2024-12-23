async function getJoke(){
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    document.getElementById("chuk").innerHTML = data.value;

}
document.getElementById("buton").addEventListener("click",function(){
    getJoke();
});
getJoke();