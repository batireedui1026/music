let playBtn = document.getElementById("playBtn");
let audio = document.getElementsByTagName("audio")[0];
let pauseBtn = document.getElementById("pauseBtn");
let nextBtn = document.getElementById("nextBtn");

let songs = [
  "./Justin Bieber - Mistletoe (Official Music Video) (320).mp3",
  "./Shawn Mendes, Camila Cabello - Señorita (320).mp3",
  "./Justin Bieber - Mistletoe (Official Music Video) (320).mp3",
  "./Shawn Mendes, Camila Cabello - Señorita (320).mp3",
];

let currenSong = 0;
// songs = ["son1", "son2"] -> songs[0]
// songs = [{name: "name", songPath: "son1"}, {name: "name", songPath: "son1"}, {name: "name", songPath: "son1"}] -> songs[1].name = "name"
function play() {
  if (audio.paused) {
    playBtn.textContent = "pause";
    audio.src = songs[currenSong];
    audio.play();
  } else {
    playBtn.textContent = "play";
    audio.pause();
  }
}

function nextSong() {
  currenSong++;
  audio.src = songs[currenSong];
  audio.play();
}

playBtn.addEventListener("click", play);
nextBtn.addEventListener("click", nextSong);
