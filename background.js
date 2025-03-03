const images = ["0.jpeg", "1.jpeg", "2.webp", "3.webp", "4.jpg"];

const todaysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todaysImage}`;

document.body.appendChild(bgImage);
