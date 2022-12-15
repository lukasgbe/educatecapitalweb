let closeButton = document.getElementById('close-button');

// Listen for a click event on the close button
closeButton.addEventListener('click', () => {
let newsBar = document.getElementById('news-bar');

// Set the id of newsBar to "news-bar-hidden"
newsBar.removeAttribute("id")
newsBar.setAttribute("id","news-bar-hidden")
});
