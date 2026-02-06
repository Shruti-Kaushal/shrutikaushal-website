const nodes = document.querySelectorAll('.step-node');
const tooltip = document.getElementById('project-tooltip');

nodes.forEach(node => {
    node.addEventListener('mousemove', (e) => {
        const text = node.getAttribute('data-project');
        tooltip.innerHTML = `<strong>Project Detail:</strong><br>${text}`;
        tooltip.classList.remove('tooltip-hidden');
        
        // Dynamic positioning
        const offset = 20;
        tooltip.style.left = (e.pageX + offset) + 'px';
        tooltip.style.top = (e.pageY - 100) + 'px';
    });

    node.addEventListener('mouseleave', () => {
        tooltip.classList.add('tooltip-hidden');
    });
});