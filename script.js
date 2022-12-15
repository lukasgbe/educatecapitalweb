var closeButton = document.getElementById('close-button');

// Listen for a click event on the close button
closeButton.addEventListener('click', () => {
    var newsBar = document.getElementById('news-bar');

    // Set the display of the news bar to "none" to hide it
    newsBar.style.display = 'none';
});