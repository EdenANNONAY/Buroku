let navbar = document.getElementById('nav');
let mainContent = document.getElementById('Main');
let btn = document.getElementById('create');
let X = document.getElementById('inputX').value;
let Y = document.getElementById('inputY').value;
let message = document.getElementById('message');
let squareContainer = document.getElementById('squareContainer');
// Set the main content height relative to the navbar
mainContent.style.height = ((window.innerHeight - navbar.offsetHeight).toString()) + "px";
// Create blocks
btn.addEventListener("click", function () {
    X = document.getElementById('inputX').value;
    Y = document.getElementById('inputY').value;
    squareContainer.innerHTML = "";
    if (X != "" && isNaN(parseInt(X)) != true && Y != "" && isNaN(parseInt(Y)) != true) {
        message.style.visibility = 'hidden';
        message.innerText = '';
        squareContainer.innerHTML += '<div id="sqc" style="display:grid;grid-template-columns:repeat(' + Y + ',1fr);"></div>';
        for (let i = 0; i < parseInt(X); i++) {
            document.getElementById('sqc').innerHTML += '<div class="square"></div>';
        }
    }
    else {
        message.style.visibility = 'visible';
        message.innerText = 'Enter a numeric value for X and Y';
        console.log(X);
        console.log(Y);
    }
});
export {};
