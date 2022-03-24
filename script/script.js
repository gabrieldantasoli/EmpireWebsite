document.querySelector('#daymode').addEventListener('click',() => {
    document.querySelector('body').classList.toggle('active') ;
})

let bar = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
let changecolor = document.querySelector('#daymode');

bar.addEventListener('click',function(e) {
    if (e.target.classList == 'fas fa-bars') {
        navbar.classList.add('active');
        bar.classList.replace('fa-bars','fa-times')
    }else if (e.target.classList == 'fas fa-times'){
        navbar.classList.remove('active');
        bar.classList.replace('fa-times','fa-bars')
    }
})

changecolor.addEventListener('click',function(e) {
    if (e.target.classList == 'fas fa-moon'){
        document.body.classList.add('active');
        changecolor.classList.replace('fa-moon','fa-sun')
    }else if (e.target.classList == 'fas fa-sun'){
        document.body.classList.remove('active');
        changecolor.classList.replace('fa-sun','fa-moon')
    }
})

navbar.addEventListener('click',function(e) {
    if (e.target.classList == 'link') {
        navbar.classList.remove('active');
        bar.classList.replace('fa-times','fa-bars')
    }
})

window.onscroll = (e) => {
    navbar.classList.remove('active');
    bar.classList.replace('fa-times','fa-bars')
}

window.onresize = () => {
    if (window.innerWidth > 650) {
        navbar.classList.remove('active');
        bar.classList.replace('fa-times','fa-bars')
    }
}

var links = document.querySelectorAll('.navbar a') ;

links.forEach(item => item.addEventListener('click',function(e) {
    links.forEach(item => item.classList.remove('active'))
    document.querySelector(`.${e.target.classList}`).classList.add('active')
})) ;

