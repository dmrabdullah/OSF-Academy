// Load More Button

let loadMoreBtn = document.querySelector(".click-see");
// col-md-6 col-lg-3 item
loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll(".secondary-items")];
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].className = 'col-md-6 col-lg-3 item';
        console.log(boxes[i].sytle);
    }
}

// Notification Section

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


// SECOND SLIDER 
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



document.getElementById("year").innerText = new Date().getFullYear();