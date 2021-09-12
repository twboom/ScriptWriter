// Render a single line
function renderLine(line, index) {
    // Establish some constants
    const field = document.getElementById('text-field');

    if (index === 'LAST') {
        field.appendChild(line);
    } else {
        const referenceChild = field.children.item(index);
    
        field.insertBefore(line, referenceChild);
    };
};
