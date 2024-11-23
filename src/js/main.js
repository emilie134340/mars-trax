import { injectForm } from './formTemplate.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inject the form into the container
    injectForm('formContainer');

    // Dynamically assign elements after form injection
    const formButton = document.getElementById('form_button');
    const popupForm = document.getElementById('popupForm');
    const closeForm = document.getElementById('closeForm');
    const form = document.getElementById('marsImageForm');

    // Show popup form
    formButton.addEventListener('click', () => {
        popupForm.style.display = 'flex';
        popupForm.setAttribute('aria-hidden', 'false');
    });

    // Close popup form
    closeForm.addEventListener('click', closePopup);

    // Close form when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            closePopup();
        }
    });

    // Close form with Escape key
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closePopup();
        }
    });

    // Handle form submission by redirecting to findaphoto.html with URL parameters
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const dateInput = document.getElementById('date').value;
        const cameraInput = document.getElementById('camera').value;

        // Date validation (within Curiosity mission range, 2012-present)
        if (new Date(dateInput) < new Date("2012-08-06") || new Date(dateInput) > new Date()) {
            alert('Please select a date within the Curiosity mission timeline (2012-present).');
            return;
        }

        // Ensure a camera is selected
        if (!cameraInput) {
            alert('Please select a camera.');
            return;
        }

        // Redirect to findaphoto.html with date and camera as URL parameters
        const redirectUrl = `findaphoto.html?date=${dateInput}&camera=${cameraInput}`;
        window.location.href = redirectUrl;
    });

    // Function to close popup
    function closePopup() {
        popupForm.style.display = 'none';
        popupForm.setAttribute('aria-hidden', 'true');
    }
});
