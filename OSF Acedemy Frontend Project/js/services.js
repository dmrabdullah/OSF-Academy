// LOAD MORE FUNCTION 

let loadMoreBtn1 = document.querySelector(".click-see2");
loadMoreBtn1.onclick = () =>{
    let boxes1 = [...document.querySelectorAll(".secondary-items")];
    for (let i = 0; i < boxes1.length; i++) {
        boxes1[i].className = 'col-md-6 col-lg-3 item';
        console.log(boxes1[i].sytle);
    }
}

// COLOR CHANGING FUNCTION

function colorChange(value) {
    document.getElementById("board").style.backgroundColor = value;
}


var notify = document.querySelector('.notify');
var btn = document.querySelectorAll('.add-cart');
// btn.addEventListener('click', active);

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click',active);
}
function active() {
    let add =  Number(notify.getAttribute('data-count') || 0);
    notify.setAttribute('data-count', add + 1);
    if (add === 0) {
        notify.classList.add('add-numb');
    }
    false;
}

let wsh = document.querySelector('.wish');
let bttn = document.querySelectorAll('.wish-list');

for (let i = 0; i < bttn.length; i++) {
	bttn[i].addEventListener('click',active1);
}
function active1() {
	let add1 = Number(wsh.getAttribute('data-count-1') || 0);
	wsh.setAttribute('data-count-1', add1 + 1);

	if (add1 == 0) {
		wsh.classList.add('add-numb1');
	}
	true;
}



// SLIDER RULES 
let slider = tns({
    container : ".my-slider",
    "slideBy" : 1,
    "speed" : 400,
    "nav" : false,
    controlsContainer : ".arrows",
    prevButton : "#previous",
    nextButton : "#next",
    responsive: {
        1200: {
            items : 4,
            gutter : 10
        },
        1024: {
            items : 3,
            gutter : 10
        },
        768: {
            items : 2,
            gutter : 10
        },
        480: {
            items : 1,

        }
    }

}) 

