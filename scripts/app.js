//select movie poster original image
let moviePoster = document.querySelector('.movie-poster');
//select model windov layer
let modal = document.querySelector('#myModal');
//select close button
let closeBtn = document.querySelector('.closeBtn');
//select modal window image
let modalImage = document.querySelector('.modal-content img');


moviePoster.addEventListener('click',()=> {
console.log('image cliced');
modal.style.display = 'block';
modalImage.src = moviePoster.src;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';   
} );

window.addEventListener('click', (event) => {
if(event.target === modal){
    modal.style.display = 'none'  
}
} );