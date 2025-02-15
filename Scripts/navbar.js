// Adding search popup functionality
document.getElementById('open-search-panel').addEventListener('click', function () {
    document.getElementById('search-panel').classList.add('show');
});

document.getElementById('close-search-panel').addEventListener('click', function () {
    document.getElementById('search-panel').classList.remove('show');
});
