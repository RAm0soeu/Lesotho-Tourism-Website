document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Theme Toggle Feature (Dark / Light Mode)
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem('lesotho-theme') || 'light';
    htmlElement.setAttribute('data-bs-theme', savedTheme);

    function updateThemeButton() {
        if (!themeToggleBtn) return;
        const dark = htmlElement.getAttribute('data-bs-theme') === 'dark';
        themeToggleBtn.textContent = dark ? '☀️ Light Mode' : '🌙 Dark Mode';
        themeToggleBtn.classList.toggle('btn-outline-warning', dark);
        themeToggleBtn.classList.toggle('btn-outline-light', !dark);
    }

    updateThemeButton();
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const nextTheme = htmlElement.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-bs-theme', nextTheme);
            localStorage.setItem('lesotho-theme', nextTheme);
            updateThemeButton();
        });
    }

    // 2. JavaScript Form Validation (Contact & Booking Form)
    const bookingForm = document.getElementById('bookingForm');
    const formAlert = document.getElementById('formAlert');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (bookingForm.checkValidity()) {
                // Show success alert
                formAlert.classList.remove('d-none');
                bookingForm.reset();
                bookingForm.classList.remove('was-validated');
            } else {
                formAlert.classList.add('d-none');
                bookingForm.classList.add('was-validated');
            }
        });
    }
});

// 3. Image Lightbox Modal Preview Function
function previewImage(element) {
    const modalImageDisplay = document.getElementById('modalImageDisplay');
    const imageModalLabel = document.getElementById('imageModalLabel');
    if (modalImageDisplay && element) {
        modalImageDisplay.src = element.src;
        imageModalLabel.textContent = element.alt;
    }
}