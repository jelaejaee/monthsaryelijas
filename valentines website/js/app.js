const mwua = document.querySelector("#mwua");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
const img = document.querySelector('#gif')
let count = 2;

const gifs = [
  "../resources/cat-heart.gif",
  "../resources/rusure.gif",
  "../resources/3shocked-1.gif",
  "../resources/4.crying.gif",
  "../resources/5.crying.gif",
  "../resources/idc.gif"
];

// to load the gifs faster
gifs.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when mwua button is clicked
mwua.addEventListener("click", () => {
  vid.style.display = "block";
  img.src = "resources/bebi.jpg";
  text.innerHTML = "I love you baby! You always make my day feel better even when the skies are dark and gloomy. Kahit sobrang big ng distance between us, I've always felt close with you even through our calls.  😘";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
