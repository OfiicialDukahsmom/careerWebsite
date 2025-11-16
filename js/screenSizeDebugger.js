// JavaScript finds the debug tag by grabbing its id which is "bpOverlay" and will use the lines below on it
const el = document.getElementById('bpOverlay');

// Defines what "paint" means
function paint() {

    // Creates a new constant giving us the width of the viewport (basically what the webpage looks like alone not your entire window) and it'll store this information as the window is resized
    const w = window.innerWidth;

    // Creates a variable called bp and sets the value to "xs" and the color of it to gray
    let bp = 'xs', color = '#6c757d';

    // If w (our constant) is of certain values, it'll switch bp's value accordingly, aswell as the color
    if (w >= 1400) { bp = 'xxl'; color = '#7952b3'; }
    else if (w >= 1200) { bp = 'xl'; color = '#0d6efd'; }
    else if (w >= 993) { bp = 'lg'; color = '#198754'; }
    else if (w >= 768) { bp = 'md'; color = '#fd7e14'; }
    else if (w >= 576) { bp = 'sm'; color = '#dc3545'; }

    // It changes the background color according to "color"s value
    el.style.background = color;

    // This is just JavaScript's way of using variables in text, just like how p5.js would use print(width); for variables put into text
    el.textContent = `Width: ${w}px  •  Bootstrap: ${bp}`;
}

// Adds an event listener called resize, every time the windows size changes, the paint function will run
window.addEventListener('resize', paint, { passive: true });

// Runs the function we made before once so it's accurate before anything happens
paint();