const btnHamburger = document.querySelector(`#btnHamburger`);
const body = document.querySelector(`body`);
const header = document.querySelector(`.header`);
const overlay = document.querySelector(`.overlay`);
const fadeElems = document.querySelectorAll(`.has-fade`);

//Event
btnHamburger.addEventListener(`click`, function() {
    console.log("Click Hamburger");
     
     //Close Hamburger Menu
    if(header.classList.contains(`open`)){
        body.classList.remove(`noscroll`);
        header.classList.remove(`open`);
        fadeElems.forEach(function(elements) {
        elements.classList.remove(`fade-in`);
        elements.classList.add(`fade-out`);
        });

    }else { //Open Hamburger Menu
     body.classList.add(`noscroll`);
     header.classList.add(`open`);
     fadeElems.forEach(function (elements) {
        elements.classList.remove(`fade-out`);
        elements.classList.add(`fade-in`);
     });
    }
});