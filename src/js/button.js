function menuButton() {
    const menuButton = document.querySelector('.menu-button');
    const hiddenMenu = document.querySelector('.hidden-menu');

    menuButton.addEventListener('click', () => {
        hiddenMenu.classList.toggle('open');
    });
}
menuButton();

document.getElementById("marsImageForm").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the name value from the input
    const name = document.getElementById("name").value;
    
    // Store the name in local storage
    localStorage.setItem("userName", name);
    
    // Optionally: Redirect or display a message
    alert("Name saved!");
});

// Later, to retrieve the name from local storage
const storedName = localStorage.getItem("userName");
if (storedName) {
    console.log("Stored Name:", storedName);
    // You could display it somewhere on the page
    document.getElementById("welcome").textContent = `Welcome, ${storedName}!`;
}
