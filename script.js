const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesbtn = document.querySelector('.btn-yes');
const nobtn = document.querySelector('.btn-no');


yesbtn.addEventListener("click",()=>{
    question.innerHTML= "I love you too";
    gif.src = "image2.gif";
    yesbtn.style.display = 'none';
    nobtn.style.display = 'none'
});

nobtn.addEventListener('mouseover', ()=>{
    const nobtnRect = nobtn.getBoundingClientRect();
    const maxx= window.innerWidth- nobtnRect.width;
    const maxy= window.innerHeight- nobtnRect.height;

    const randomx = Math.floor(Math.random()*maxx);
    const randomy = Math.floor(Math.random()*maxy);

    nobtn.style.left = randomx + 'px';
    nobtn.style.top = randomy + 'px';

    yesbtnSize = 100;
    yesbtn.style.width = yesbtnSize + 'px';
    yesbtn.style.height = yesbtnSize + 'px';
    
    
    nobtn.addEventListener('mousemove', () => {
        // Increase the size of the 'Yes' button
        yesbtnSize += 1;
        yesbtn.style.width = yesbtnSize + 'px';
        yesbtn.style.height = yesbtnSize + 'px';
    });

    
})