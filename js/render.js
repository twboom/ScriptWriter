function render() {
    // Establish some constants
    const field = document.getElementById('text-field');
    const lines = session.lines;

    // Clear the field
    field.innerHTML = '';

    // Render the lines
    lines.forEach(line => {
        field.appendChild(line);
    });
}