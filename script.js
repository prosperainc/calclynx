// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        themeToggle.textContent = "Switch to Dark Mode";
    }
});

// You can add more JS for individual calculators later
