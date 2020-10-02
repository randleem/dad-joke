console.log("hi");

async function getJoke(){
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: { accept: "application/json" },
      });
      let data = await response.json();
      console.log(data);
    h2.innerText = data.joke;
}
let h2 = document.querySelector("h2")
getJoke()
// h2.innerText = getJoke();

