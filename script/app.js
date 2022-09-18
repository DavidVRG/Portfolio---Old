/* NAVBAR */
const toggleButton = document.querySelector('.toggle');
const dropdown = document.querySelector('.dropdown');

toggleButton.addEventListener('click', () => {
    dropdown.classList.toggle('toggle-show')
})
