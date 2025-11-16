document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function () {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        // Remove old highlights to avoid stacking
        target.classList.remove("highlight-flash");
        
        // Force a reflow so animation can replay
        void target.offsetWidth;

        // Add highlight class
        target.classList.add("highlight-flash");
    });
});