const coversDiv = document.querySelector('.row__covers');
const imageName = /^[0-9]{4}\s[c][0-9]{2,}\s[a-zA-Z0-9\s]{3,}\.(jpg|gif|png|mp4)$/gm;
const pathToImage = `../assets/img/covers/${imageName}`;

const covers = [];

// console.log(pathToImage);

// const len = 2000000; //How long you want to wait.
// let pics = [];
// for(let i = 0; i < len; i++){
//   a = new Image();
//   a.onload = function(){
//     pics.push(this);
//   }
//   a.src = '../assets/img/covers/' + i + '.jpg';
// }