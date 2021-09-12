function render() {
    // Establish some constants
    const field = document.getElementById('text-field');
    const lines = session.elements;

    // Clear the field
    field.innerHTML = '';

    // Render the lines
    lines.forEach(line => {
        field.appendChild(line);
    });
};

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