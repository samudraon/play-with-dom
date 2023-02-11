let count = 0;
document.getElementById('input-btn').addEventListener('click', function () {
    const myElementValue = document.getElementById("input-value").value;
    count++;

    const parent = document.getElementById("content-container");
    const tr = document.createElement('tr');
    parent.appendChild(tr);
    tr.innerHTML = `
        <td>${count}</td>
        <td>${myElementValue}</td>
        <td>
            <button class='btn btn-success done-btn'>Done</button>
            <button class='btn btn-danger delete-btn'>Delete</button>
        </td>
    `
    document.getElementById("input-value").value = '';

    const deleteButton = document.getElementsByClassName('delete-btn');
    for (const element of deleteButton) {
        element.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none';
        })
    }
    const doneButton = document.getElementById('done-btn');
    for (const element of doneButton) {
        element.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecoration = 'underline';
        })
    }
})

document.getElementById("clear-btn").addEventListener('click', function (event) {
    event.target.parentNode.style.display = 'none';
})