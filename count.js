let value = 0;
document.getElementById('btn-danger').addEventListener('click', function () {
    value++;
    document.getElementById('counter').innerText = value;
});

document.getElementById('btn-success').addEventListener('click', function () {
    value--;
    document.getElementById('counter').innerText = value;
});