const coversDiv = document.querySelector('.row__covers');
const imageName = /^[0-9]{4}\s[c][0-9]{2,}\s[a-zA-Z0-9\s]{3,}\.(jpg|gif|png|mp4)$/gm;
const pathToImage = `../assets/img/covers/${imageName}`;

const covers = [];

// console.log(pathToImage);