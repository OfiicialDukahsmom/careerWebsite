// Takes its sweet time letting the page load until it runs the stuff below
document.addEventListener("DOMContentLoaded", function () {

    // Finds every part of HTML styled with typewriter
    const items = document.querySelectorAll(".typewriter");

    // JavaScript has no idea what a checkScroll is so we tell it what it is (line 72 is where the check is)
    function checkScroll() {
        // Goes through the selected parts styled with typewriter (which was done on line 5) with the script below
        items.forEach(function (el) {

            // If it's already animated? Oh yeah then we're not doing anything there since it already played its animation
            if (el.dataset.animated === "true") return;

            // Locate where the <p> tag (the thing affected by the typewriter class) is on the page
            const rect = el.getBoundingClientRect();

            // Then it asks itself, is the <p> tag visible on the screen?
            const visible = rect.top < window.innerHeight && rect.bottom > 0;

            // If those requirements are met, then it starts the animation
            if (visible) {
                el.dataset.animated = "true"; // Says to JavaScript that from this point forward it'll be used and not reanimateable

                // Begins the typewriter animation you'll see when you pop open salary&benefits
                startTypewriter(el);
            }
        });
    }

    // JavaScript asks, "Define typewriter animation, because I have ZERO clue what you're talking about.", thus this code
    function startTypewriter(el) {

        // Extracts the selected text from the HTML
        const fullText = el.textContent.trim();

        // Speed between letters appearing in milliseconds
        const speed = Number(el.dataset.speed) || 20;

        // Always has how much characters have been typed so far, just like p5.js loops keeping track of ellipses drawn
        let index = 0;

        // The content of the text here? Yeah it's gone now, we're going fresh slate
        el.textContent = "";

        // Shows the effect of the blinking pipe (|), CSS handles the rest of the effect
        el.classList.add("show");

        // "I don't know what typeNextLetter is either." Says JavaScript, but don't worry, here's what it is
        function typeNextLetter() {

            // JavaScript asks, "have we typed the whole text?"
            if (index <= fullText.length) {

                // Shows every character from 0, let's just say character 0 is N all the way to index, so if index equaled 1, character 0 and 1 would appear at the same time, and since character 1 is actually a zero, it spells "No"
                // Basically it just makes text visible from character 0 to whatever number index is, basically little puzzle pieces of a text
                el.textContent = fullText.substring(0, index);

                // Just the +=1 of JavaScript, by moving index one up
                index++;

                // Waits to type the next letter after speed, which is 20 milliseconds by default, we didn't set a speed so it's default right now
                setTimeout(typeNextLetter, speed);
            }
        }

        // Runs the function of course
        typeNextLetter();

    }

    // Right below here is where it checks every 100 milliseconds
    setInterval(checkScroll, 100);

});

// Think of it as like every single <p> getting their seperate JavaScript instructions except they're the all the same thing
// we're just telling these <p> tags to really just do their typewriting magic when the monitor sees them