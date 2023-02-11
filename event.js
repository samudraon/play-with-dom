/* by event handler */
function makeRed() {
    document.body.style.backgroundColor = 'tomato';
    document.getElementById('heading').innerText = 'Testing Events';
}

/* by event listener */
document.getElementById('gray-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'gray'
    document.getElementById('h2').innerText = 'Teddy'
})