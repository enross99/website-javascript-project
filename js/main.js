let cats = document.querySelector('#cats');
let pug = document.querySelector('#pug');

cats.onclick = () => {
   if (cats.getAttribute('src') === 'images/kittenredblanket.jpg') {
     cats.setAttribute('src', 'images/kittenwhitebed.jpg');
   } else {
     cats.setAttribute('src', 'images/kittenredblanket.jpg');
   }
};

pug.onmouseenter = (e) => {
   e.target.setAttribute('src', 'images/sleepingdogs.jpg');
};

pug.onmouseleave = (e) => {
   e.target.setAttribute('src', 'images/blanketpug.jpg');
};
