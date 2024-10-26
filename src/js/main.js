// import { getApodData } from './apodService.js';

document.addEventListener('DOMContentLoaded', () => {
    const formButton = document.getElementById('form_button');
    const popupForm = document.getElementById('popupForm');
    const closeForm = document.getElementById('closeForm');

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

    // Validation before form submission
    const form = document.getElementById('marsImageForm');
    form.addEventListener('submit', (event) => {
        const dateInput = document.getElementById('date').value;
        const cameraInput = document.getElementById('camera').value;

        // Date validation (within Curiosity mission range, 2012-present)
        if (new Date(dateInput) < new Date("2012-08-06") || new Date(dateInput) > new Date()) {
            alert('Please select a date within the Curiosity mission timeline (2012-present).');
            event.preventDefault();
        }

        // Ensure a camera is selected
        if (!cameraInput) {
            alert('Please select a camera.');
            event.preventDefault();
        }
    });
});

// async function init() {
//     try {
//         const { url, title } = await getApodData();
//         document.getElementById('apod-image').src = url;
//         document.getElementById('apod-title').innerText = title;
//     } catch (error) {
//         console.error("Error fetching APOD data:", error);
//     }
// }

// init();
