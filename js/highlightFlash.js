// It just chooses to run this script with href's that are internal links like #apple
document.querySelectorAll('a[href^="#"]').forEach(link => {

    // Implements something that detects if the mouse clicks one of these links
    link.addEventListener("click", function () {

        // It locates the target by selecting specifically the answer of HTML to JavaScript for the href's content, so if href answered "#apple" it'll select the section that has the id, "apple" inside it to run the lines below
        const target = document.querySelector(this.getAttribute("href"));

        // If the target just doesn't exist, it's gonna do nothing
        if (!target) return;

        // Remove old highlights to avoid stacking
        target.classList.remove("highlightFlash");

        // Makes the browser forget happened so the animation can replay
        void target.offsetWidth;

        // Adds the highlight class
        target.classList.add("highlightFlash");
    });
});
