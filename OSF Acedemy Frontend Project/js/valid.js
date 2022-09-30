////////////////////////// COLOR SELECT ///////////////////////////////


const colorSelect = document.querySelector("div.colorpick > select");

// Color select ..............................
(function () {

	const colors = document.querySelectorAll("div.colorpick > ul > li");

	colorSelect.addEventListener("change", () => {

		colors.forEach(color => {
			color.classList.remove("active");
		});

		colors[colorSelect.selectedIndex].classList.add("active");
	});

})();

/////////////////////////////// BIG IMAGE SECTION//////////////////////////////////////

// (function () {

// 	let btns = document.querySelectorAll(".wrpper .subwrpper .info ul > li");
// 	let tabs = document.querySelectorAll(".wrpper .subwrpper .info .tab-box .tab");

// 	for (let i = 0; i < btns.length; i++) {
// 		btns[i].addEventListener("click", () => {
// 			btns.forEach(btn => {
// 				btn.classList.remove("active");
// 			});
// 			tabs.forEach(tab => {
// 				tab.classList.remove("active");
// 			});

// 			btns[i].classList.add("active");
// 			tabs[i].classList.add("active");
// 		}, true);
// 	}

// })();


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


// CART CLOSE BUTTON 

// let carts = document.querySelectorAll(".add-cart");

// for (let i=0; i < carts.length; i++) {
//     carts[i].addEventListener("click", () => {
//         cartNumbers(products[i]);
//         totalCost(products[i]);
//     })
// }

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if(productNumbers) {
//         document.querySelector('.cart span').textContent = productNumbers
//     }
// }

// function cartNumbers(products) {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);

//     if(productNumbers ) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.cart span').textContent = productNumbers + 1;
//     } else {
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('.cart span').textContent = 1;
//     }

//     setItem(products);
// }

// function setItem(products) {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if(cartItems != null) {
//         if(cartItems[products.tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [products.tag]: products
//             }
//         }
//         cartItems[products.tag].inCart += 1; 
//     } else {
//         products.inCart = 1;
//         cartItems = {
//             [products.tag]: products
//         }
//     }   
//     localStorage.setItem('productsInCart', JSON.stringify(cartItems));

// }

// function totalCost(products) {
//     // console.log('The product price is', products.price);
//     let cartCost = localStorage.getItem('totalCost');
    
//     console.log('My cart cost is', cartCost);
//     console.log(typeof cartCost);

//     if(cartCost != null) {
//         cartCost = parseInt(cartCost);
//         localStorage.setItem('totalCost', cartCost + products.price);
//     } else {
//         localStorage.setItem('totalCost', products.price);
//     }

// }

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



// onLoadCartNumbers();
// displaycart();