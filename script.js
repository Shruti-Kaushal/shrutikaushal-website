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