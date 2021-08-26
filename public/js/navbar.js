let menuToggle = document.querySelector('.nav__toggle');
let navigation = document.querySelector('.nav_list');
let bar1 = document.querySelector('.bar1');
let bar2 = document.querySelector('.bar2');
let bar3 = document.querySelector('.bar3');

menuToggle.onclick = function () {
    // menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
    bar1.classList.toggle('change')
    bar2.classList.toggle('change')
    bar3.classList.toggle('change')
}


//login form popup on vector-2 img
document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.toggle("active");
    document.querySelector(".dropdown-menu").style.opacity = 0;
    });
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".dropdown-menu").style.opacity = 1;
    });
//signup form popup on vector-2 img
document.querySelector("#show-register").addEventListener("click",function(){
    document.querySelector(".popup2").classList.toggle("active2");
    });
    document.querySelector(".popup2 .close-btn2").addEventListener("click",function(){
    document.querySelector(".popup2").classList.remove("active2");
    });
    document.getElementById("login-reappear").addEventListener("click", function(){
      document.querySelector('.popup2.active2').classList.remove("active2");
    })