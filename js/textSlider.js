// I'm gonna try narrating this in JavaScripts point of view or something idk lol

// Let's see, what are all the things that have "tickerForJavaScript" as a class..
const tickers = document.querySelectorAll(".tickerForJavaScript");

// Now, we make something that can watch if it goes off the browsers screen
const observer = new IntersectionObserver((entries) => {

    // This one's for everything we got after searching for the things that had "tickerForJavaScript" as a class
    entries.forEach(entry => {

        // Let's select tickerTrack for this next one
        const track = entry.target.querySelector(".tickerTrack");

        // If it's not track we just don't do nothing (I literally have 30% of a clue what this is trying to say)
        if (!track) return;

        // If we're instecting with the browser's point of view, we're gonna do this, or else.. (get it?)
        if (entry.isIntersecting) {

            // Let me just get rid of you..
            track.classList.remove("tickerAnimate");

            // You saw nothing browser.. (it just makes the browser "forget" track.offsetWidth's value apparently)
            void track.offsetWidth;

            // Okay there, now we give you a new one and we're set, animation has been resetted as the browser came into view of it
            track.classList.add("tickerAnimate");

            // So we're not in the browsers point of view, oh well time to stop you indefinitely until the browser sees you again
        } else {
            // This'll stop the animation while the browser is away
            track.classList.remove("tickerAnimate");
        }
    });
}, {
    // I think if even about %10 is visible, I'm gonna run these events
    threshold: 0.1
});

// For each of these tickers line below this comment, tell observer to well, observe them.
tickers.forEach(ticker => observer.observe(ticker));