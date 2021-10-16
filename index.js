
navbtn = document.querySelector('.fa-bars');
navbtn.addEventListener('click', opennav)

function opennav(){
	list2  = document.querySelector('.lists2')
	list2.classList.toggle('active')
	
	
	document.querySelector(".blur").classList.add("active2")
	document.querySelector(".blured1").addEventListener("click", function () {
	});
	
}



document.querySelector(".submit").addEventListener("click", function () {
	document.querySelector(".popup").classList.add("active")
});

document.querySelector(".submit1").addEventListener("click", function () {
	document.querySelector(".popup1").classList.add("active")
});

document.querySelector(".submit2").addEventListener("click", function () {
	document.querySelector(".popup2").classList.add("active")
});



document.querySelector(".popup .crosbtn").addEventListener("click", function () {
	document.querySelector(".popup").classList.remove("active")
});

document.querySelector(".popup1 .crosbtn").addEventListener("click", function () {
	document.querySelector(".popup1").classList.remove("active")
});

document.querySelector(".popup2 .crosbtn").addEventListener("click", function () {
	document.querySelector(".popup2").classList.remove("active")
});




document.querySelector(".blured1").addEventListener("click", function () {
	document.querySelector(".blur").classList.add("active2")
});

document.querySelector(".crosbtn").addEventListener("click", function () {
	document.querySelector(".blur").classList.remove("active2")
});

document.querySelector(".blured2").addEventListener('click', function () {
	document.querySelector(".blur1").classList.add("active12")
});

document.querySelector(".crosbtn").addEventListener('click', function () {
	document.querySelector(".blur1").classList.remove("active12")
});


document.querySelector(".blured3").addEventListener("click", function () {
	document.querySelector(".blur2").classList.add("active23")
});

document.querySelector(".crosbtn").addEventListener("click", function () {
	document.querySelector(".blur2").classList.remove("active23")
});



