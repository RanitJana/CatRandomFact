const URL = "https://meowfacts.herokuapp.com/?count=1";
let dis = document.querySelector(".text");

let btn = document.querySelector("button");

const getFact = async () => {
    dis.innerText = "Getting a fact...🙀";
    let response = await fetch(URL);
    let data = await response.json();
    dis.innerText = data.data[0];
}

btn.addEventListener('click', getFact);
getFact();