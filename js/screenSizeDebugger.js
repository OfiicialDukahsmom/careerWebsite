const el = document.getElementById('bpOverlay');

function paint() {
    const w = window.innerWidth;
    let bp = 'xs', color = '#6c757d';      // gray

    if (w >= 1400) { bp = 'xxl'; color = '#7952b3'; }  // purple
    else if (w >= 1200) { bp = 'xl'; color = '#0d6efd'; }  // blue
    else if (w >= 993) { bp = 'lg'; color = '#198754'; }   // green
    else if (w >= 768) { bp = 'md'; color = '#fd7e14'; }   // orange
    else if (w >= 576) { bp = 'sm'; color = '#dc3545'; }   // red

    el.style.background = color;
    el.textContent = `Width: ${w}px  •  Bootstrap: ${bp}`;
}

window.addEventListener('resize', paint, { passive: true });
paint();