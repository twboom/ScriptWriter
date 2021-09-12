// Create a new line
function createLine(content, type, number) {
    const line = document.createElement('p');
    line.classList.add('line');
    line.classList.add(type);
    line.innerText = content;

    if (number === 'LAST') {
        session.lines.push(line);
    } else {
        session.lines.splice(number, 0, line);
    };
    
    return line
};

// Edit an already existing line
function editLine() {};

// Change the line type
function changeLineType() {};

// Remove a line
function deleteLine() {};