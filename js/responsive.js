let menubtn = document.querySelector('.menubtn');
let header = document.querySelector('header');
let nav = document.querySelector('header nav')
menubtn.onclick = function(){
    header.classList.toggle('active');
    // nav.style.display = "block";
}