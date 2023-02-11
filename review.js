document.getElementById('review-btn').addEventListener('click', function () {
    const myElement = document.getElementById('floatingTextarea2');
    const myElementValue = myElement.value;

    const p = document.createElement('p');
    p.innerText = myElementValue;
    const parent = document.getElementById('comment-container');
    parent.appendChild(p);
    document.getElementById('floatingTextarea2').value = '';
})