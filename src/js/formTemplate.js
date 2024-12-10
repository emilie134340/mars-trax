export function injectForm(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID '${containerId}' not found.`);
        return;
    }

    container.innerHTML = `
    <div id="popupForm" class="form-popup" role="dialog" aria-labelledby="formTitle" aria-modal="true" aria-hidden="true">
    <form id="marsImageForm" class="form-container" action="findaphoto.html" method="GET">
        <h2 id="formTitle">Find an Image</h2>
        <div class="image_message">
        <p>The Mars Curiosity Rover touched down on Mars on August 5, 2012, so any date you search should be after that! Curiosity doesn't take pictures with every camera every day. We recommend:</p>
        <ul>
            <li>Checking anniversaries, birthdays, or other fun dates to you!</li>
            <li>Playing around with the camera options just in case your first try doesn't work.</li>
        </ul>
    </div>
        <label for="name" id="your_name"><b>Your Name</b></label>
        <input type="name" id="name" name="name" aria-required="true">
        <label for="date"><b>Date</b></label>
        <input type="date" id="date" name="date" required aria-required="true">

        <label for="camera"><b>Curiosity Rover Camera</b></label>
        <select id="camera" name="camera" required aria-required="true">
            <option value="">Select a camera</option>
            <option value="FHAZ">Front Hazard Avoidance Camera</option>
            <option value="RHAZ">Rear Hazard Avoidance Camera</option>
            <option value="MAST">Mast Camera</option>
            <option value="CHEMCAM">Chemistry and Camera Complex</option>
            <option value="MAHLI">Mars Hand Lens Imager</option>
            <option value="MARDI">Mars Descent Imager</option>
            <option value="NAVCAM">Navigation Camera</option>
        </select>

        <button type="submit" class="btn">Submit</button>
        <button type="button" class="btn cancel" id="closeForm">Close</button>
        <img id="form_traxs"  src="images/marstraxlogo-01.png">
    </form>
</div>
</div>
    `;
}



