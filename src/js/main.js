document.addEventListener('DOMContentLoaded', () => {
    const formButton = document.getElementById('form_button');
    const popupForm = document.getElementById('popupForm');
    const closeForm = document.getElementById('closeForm');
    const form = document.getElementById('marsImageForm');

    // Show popup form
    formButton.addEventListener('click', () => {
        popupForm.style.display = 'block';
        popupForm.setAttribute('aria-hidden', 'false');
    });

    // Close popup form
    closeForm.addEventListener('click', () => {
        popupForm.style.display = 'none';
        popupForm.setAttribute('aria-hidden', 'true');
    });

    // Close form when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === popupForm) {
            popupForm.style.display = 'none';
            popupForm.setAttribute('aria-hidden', 'true');
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
});
