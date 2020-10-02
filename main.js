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

let upPic = document.querySelector("#upPic");
let downPic = document.querySelector("#downPic");

upPic.addEventListener("click", upReaction);
downPic.addEventListener("click", downReaction);

/*write a function to add a reaction to the joke when the viewer clicks upvote
write a function to add a reaction to the joke when the viewer clicks downvote
when clicks display corresponding image and sound effect..

if working and is too repetetive add more reactions to add variety.. 

*/
function upReaction(){
  upPic.src = "harold_up1.jpg";
  //play audio
}

function downReaction(){
  downPic.src = "harold_down.jpeg";
  //play audio
}