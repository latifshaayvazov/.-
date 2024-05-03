const btnCreate = document.querySelector(".btnCreate");
const content = document.querySelector(".content");

let images = [
  "./style/umg/AdobeStock_117748132.jpg",
  "./style/umg/doga-kutlu-apart.jpg",
  "./style/umg/images.jpg",
];
    


btnCreate.addEventListener("click", () => {


// img
let rnd = Math.floor(Math.random() * images.length)
let box = document.createElement("div");
box.setAttribute("class", "salom");

box.style.backgroundImage = `url(${images[rnd]})`

content.append(box)





});
