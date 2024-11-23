document.addEventListener('DOMContentLoaded', async () => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const date = urlParams.get('date');
    const camera = urlParams.get('camera');

    // Validate parameters (to prevent errors in case of missing or incorrect parameters)
    if (!date || !camera) {
        document.getElementById('marsPhotoResults').innerHTML = `<p>Missing date or camera parameter.</p>`;
        return;
    }

    // Construct API URL with extracted parameters
    const apiUrl = `https://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?earth_date=${date}&camera=${camera}`;

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Check if there are photos in the response
        if (data.photos.length === 0) {
            document.getElementById('marsPhotoResults').innerHTML = `<p>No photos available for this date and camera. Here are some ideas for dates and cameras that have fun puctures: </p>
            <ul>
            <li>May 11, 2016 and the Mars Hand Lens Imager - If you scroll through the pictures, you'll see a fun Curiosity Rover selfie</li>
            <li>November 16, 2021 and the Navigation Camera - just some cool rocks</li>
            <li>November 20, 2021 and the Mars Hand Lens Imager - This camera is cool because it takes pictures in color vs black and white, this specific date has more cute Curiosity selfies</li>
            <li>January 14, 2015 and the Mars Hand Lens Imager - Some HD pictures of Mars and Curiosity (there's so many, they might take a minute to load!)</li>`;
            return;
        }

        // Call the function to display the photos
        displayPhotos(data.photos);
    } catch (error) {
        console.error('Error fetching Mars photos:', error);
        document.getElementById('marsPhotoResults').innerHTML = `<p>Sorry, there was an error fetching the photos.</p>`;
    }
});

// Function to display photos in the results container
function displayPhotos(photos) {
    const resultsContainer = document.getElementById('marsPhotoResults');
    resultsContainer.innerHTML = ''; // Clear any previous results

    photos.forEach((photo) => {
        // Create an image element for each photo
        const imgElement = document.createElement('img');
        imgElement.src = photo.img_src;
        imgElement.alt = `Mars photo taken by ${photo.camera.full_name} on ${photo.earth_date}`;
        imgElement.classList.add('mars-photo'); // Optional: Add a CSS class for styling

        // Append the image element to the results container
        resultsContainer.appendChild(imgElement);
    });
}
