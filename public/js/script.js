const page = document.getElementById('page');
const face = document.getElementById('face');

page.addEventListener('click', function() {
    fetch('/color')
    .then(function (response) {
        return response.text()
        .then(function (text) {
            page.style.backgroundColor = 'rgb(' + text + ')';
        });
    });

    fetch('/face')
    .then(function (response) {
        return response.text()
        .then(function (text) {
            face.innerHTML = text;
        });
    });
});
