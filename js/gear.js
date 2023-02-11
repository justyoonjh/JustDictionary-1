const HTMLPage = document.querySelector('#container2 button:first-child');
const CSSPage = document.querySelector('#container2 button:nth-child(2)');
const JSPage = document.querySelector('#container2 button:nth-child(3)');

function MoveHTML() {
  location.href = 'HTML.html';
}

function MoveCSS() {
  location.href = 'CSS.html';
}

function MoveJS() {
  location.href = 'JS.html';
}

HTMLPage.addEventListener('click', MoveHTML);
CSSPage.addEventListener('click', MoveCSS);
JSPage.addEventListener('click', MoveJS);
