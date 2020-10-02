async function getJoke(){
    let response = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
      });
    let data = await response.json();
    console.log(data);
    h2.innerText = data.joke;
    upPic.src = "thumbs-up.png";
    downPic.src = "thumbs-down.png";
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
let groanSound = document.querySelector("#groan");
console.log(groanSound);
let laughingSound = document.querySelector("#laugh");
console.log(laughingSound);



function upReaction(){
  upPic.src = "harold_up1.jpg";
  laughingSound.play();
  downPic.src = "";
}

function downReaction(){
  downPic.src = "harold_down.jpeg";
  groanSound.play();
  upPic.src = "";
}



// when reaction is clicked remove other reaction thumb
//after joke reaction timeOut, a pop up clickable image asks if you want another joke?
//then reset to the original page layout












