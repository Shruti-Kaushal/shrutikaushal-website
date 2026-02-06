// --- THEME TOGGLE LOGIC ---
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    // Check current theme and toggle it
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    root.setAttribute('data-theme', newTheme);
});
const nodes = document.querySelectorAll('.step-node');
const tooltip = document.getElementById('experience-tooltip');

nodes.forEach(node => {
    node.addEventListener('mousemove', (e) => {
        // Only trigger for nodes with experience data
        const text = node.getAttribute('data-project');
        if (!text) return;

        tooltip.innerHTML = text;
        tooltip.classList.remove('tooltip-hidden');
        
        // Offset positioning
        const offset = 20;
        tooltip.style.left = (e.pageX + offset) + 'px';
        tooltip.style.top = (e.pageY - 60) + 'px';
    });

    node.addEventListener('mouseleave', () => {
        tooltip.classList.add('tooltip-hidden');
    });
});