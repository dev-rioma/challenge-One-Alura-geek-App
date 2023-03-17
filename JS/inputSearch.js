const toggleButton = document.querySelector('.search_bar');

toggleButton.addEventListener('click', function() {
    this.classList.toggle('active');
    console.log(toggleButton)
});