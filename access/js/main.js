let viewmain = document.querySelector('.app');
let viewimg = document.querySelector('.user-img');
let viewtext = document.querySelector('.imgtext');
viewmain.addEventListener('click', function(){
    viewimg.classList.toggle('active');
    viewtext.classList.toggle('active');
    viewmain.classList.toggle('active');
})

