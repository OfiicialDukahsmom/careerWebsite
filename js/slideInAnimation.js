// Waits for the HTML to load before running anything below
document.addEventListener("DOMContentLoaded", () => {

    // Finds every element that has either slideInRight or slideInLeft
    const elements = document.querySelectorAll(".slideInRight, .slideInLeft");



    // Creates something called an IntersectionObserver
    // It just tells JavaScript when an element enters the screen
    const observer = new IntersectionObserver((entries) => {

        // Runs this loop below for each styled slideIn
        entries.forEach(entry => {

            // Checks if the element is actually visible on screen
            if (entry.isIntersecting) {

                // Adds the class that makes the element slide into view (CSS handles the animation)
                entry.target.classList.add("slideInShow");

                // Stops watching this element so it doesn't slide in again
                observer.unobserve(entry.target);
            }
        });

    }, {
        // How much of the element must be visible before triggering
        threshold: 0.1  // 10% visible on screen = start animation
    });



    // Now we tell the observer to watch for the slideIn styled parts of the HTML in visibility
    elements.forEach(el => observer.observe(el));
});