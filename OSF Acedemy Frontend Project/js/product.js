// AMOUNT SEC 

let plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 1;

plus.addEventListener("click",()=> {
	a++;
	console.log('Calisiyo mu bari ?');
	a = (a < 10) ? a : a;
	num.innerHTML = a;
});

minus.addEventListener("click",()=> {
	if(a > 1) {
		a--;
		a = (a < 10) ? a : a;
		num.innerHTML = a;
	}
	
})

// NOTIFICATION SECTION

var notify = document.querySelector('.notify');
var btn = document.querySelectorAll('.add-cart');
// btn.addEventListener('click', active);

for (let i = 0; i < btn.length; i++) {
	btn[i].addEventListener('click',active);
}
function active() {
    let add =  Number(notify.getAttribute('data-count') || 0);
	notify.value = 0;
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

// COLOR SELECT SEC

const colorSelect = document.querySelector("div.colorpick > select");

(function () {

	const colors = document.querySelectorAll("div.colorpick > ul > li");

	colorSelect.addEventListener("change", () => {

		colors.forEach(color => {
			color.classList.remove("active");
		});

		colors[colorSelect.selectedIndex].classList.add("active");
	});

})();


// TABS INTERACTION

(function () {

	let btns = document.querySelectorAll(".info ul > li");
	let tabs = document.querySelectorAll(".info .tab-box .tab");


	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", () => {
			btns.forEach(btn => {
				btn.classList.remove("active");
			});
			tabs.forEach(tab => {
				tab.classList.remove("active");
			});

			btns[i].classList.add("active");
			tabs[i].classList.add("active");
		}, true);
	}

})();


// Product images interaction ..............................
(function () {

	const bigImages = document.querySelectorAll("section.container div.subwrpper div.left img");
	const smallImages = document.querySelectorAll("section.container div.subwrpper div.middle img");

	// Small -> Big

	for (let i = 0; i < smallImages.length; i++) {
		smallImages[i].addEventListener("click", () => {
			smallImages.forEach(btn => {
				btn.classList.remove("active");
			});
			bigImages.forEach(tab => {
				tab.classList.remove("active");
			});

			smallImages[i].classList.add("active");
			bigImages[i].classList.add("active");
		}, true);
	}

	// Big -> Full
	let overlay = document.getElementById("overlay");

	for (let i = 0; i < bigImages.length; i++) {

		bigImages[i].addEventListener("click", () => {

			bigImages[i].classList.contains("full") ? (
				bigImages[i].classList.remove("full"),
				overlay.classList.remove("active")
			) : (
				overlay.classList.add("active"),
				bigImages[i].classList.add("full")
			);

		}, true);

	}

	overlay.addEventListener("click", () => {
		bigImages.forEach(bigImage => {
			bigImage.classList.remove("full");
		});

		document.body.classList.remove("noscroll");
		overlay.classList.remove("active");
	}, true);

})();

// Read more interaction ..............................
let text = document.querySelector("section.container div.products div.right #rd-more");

// If the text is too long
if (text.innerHTML.length > 100) {

	// Remember the original amount
	var originalAmount = text.innerHTML;

	// Shorten the text
	var newAmount = originalAmount.slice(0, 100);
	text.innerHTML = newAmount;

	// Create "Read more" button, then append to p
	let more = document.createElement("button");
	more.classList.add("more");
	more.innerText = "Read more";

	// Find the right place for button
	const share = document.querySelector("section.container div.products div.right div.share");
	// Find the parent element to insert button
	const parent = share.parentNode;

	parent.insertBefore(more, share);

	// Add event listener
	more.addEventListener("click", () => {
		text.innerHTML = originalAmount;
	}, true);
}

