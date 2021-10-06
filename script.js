this.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () => {

        if (question.parentNode.classList.contains("active")) {
            question.parentNode.classList.toggle("active")
        }
        else {
            questions.forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active")
        }
    }))
})

let side1 = document.getElementById('side1');
let side2 = document.getElementById('side2');
let parasplit1 = document.getElementById('parasplit1');
let parasplit2 = document.getElementById('parasplit2');

window.addEventListener('scroll', function img() {
    side1.style.left = -window.pageYOffset + 'px';
    console.log(window.pageYOffset)
    side2.style.left = window.pageYOffset + 'px';
}
)
window.addEventListener('scroll',
    function para() {
        parasplit1.style.left = -window.pageYOffset + 'px';
        parasplit2.style.left = window.pageYOffset + 'px';
    })

var lastscrolltop = 60;
var hidethis = document.querySelector('.hidethis')
var hideside = document.querySelector('.logoside')
var hideside1 = document.querySelector('.logoside1')
var hidearrow = document.querySelector('.hidei')

window.addEventListener('scroll', function () {
    var scrolltop = window.pageYOffset || document.documentElement.scrolltop;
    if (scrolltop > lastscrolltop) {
        hidethis.classList.add("active12");
        hideside.classList.add('hideside')
        hideside1.classList.add('hideside1')
        hidearrow.classList.add('hidearrow')
        console.log('scroll done');
    }

    else {
        hidethis.classList.remove("active12");
        hideside.classList.remove('hideside')
        hideside1.classList.remove('hideside1')
        hidearrow.classList.remove('hidearrow')
        console.log('scroll done');
    }
})



let button = document.querySelector('.fa-thumbs-up')
var clicks = 500;
var hasClicked = false;

    function onClick() 
    {
        if(!hasClicked)
        {
           clicks += 1;
           document.getElementById("output").innerHTML = clicks;
            // button.style.color = "blue"
           hasClicked = true;
        }

};




// let button = document.querySelector('.fa-heart')
// var clicks1 = 500;
// var hasClicked1 = false;

//     function onClick1() 
//     {
//         if(!hasClicked1)
//         {
//            clicks1 += 1;
//            document.getElementById("output1").innerHTML = clicks1;
//             button.style.color = "yellow"
//             console.log("dobsdfnj")
//            hasClicked1 = true;
//         }

// };
