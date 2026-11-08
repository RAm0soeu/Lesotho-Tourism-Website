document.addEventListener('DOMContentLoaded', () => {
    
   
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            
            if (currentTheme === 'light') {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                themeToggleBtn.textContent = '☀️ Light Mode';
                themeToggleBtn.classList.replace('btn-outline-light', 'btn-outline-warning');
            } else {
                htmlElement.setAttribute('data-bs-theme', 'light');
                themeToggleBtn.textContent = '🌙 Dark Mode';
                themeToggleBtn.classList.replace('btn-outline-warning', 'btn-outline-light');
            }
        });
    }

    
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


function previewImage(element) {
    const modalImageDisplay = document.getElementById('modalImageDisplay');
    const imageModalLabel = document.getElementById('imageModalLabel');
    if (modalImageDisplay && element) {
        modalImageDisplay.src = element.src;
        imageModalLabel.textContent = element.alt;
    }
}