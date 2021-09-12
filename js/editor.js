// Create a new line
function createLine(content, type, index) {
    const line = document.createElement('p');
    line.classList.add('line');
    line.classList.add(type);
    line.innerText = content;
    line.setAttribute('contenteditable', 'true');

    const obj = {
        content: content,
        type: type,
    };

    if (index === 'LAST') {
        index = session.lines.length;
        session.elements.push(line);
        session.lines.push(obj);
    } else {
        session.elements.splice(index, 0, line);
        session.lines.splice(index, 0, obj);
    };

    line.addEventListener('input', _ => {
        editLine(line.innerText, index);
    });

    return line
};

// Edit an already existing line
function editLine(newContent, index) {
    console.log(newContent, index);
    session.elements[index].innerText = newContent;
    session.lines[index].content = newContent;
};

// Change the line type
function changeLineType(newType, index) {
    session.elements[index].classList.remove(session.lines[index].type);
    session.elements[index].classList.add(newType);
    session.lines[index].type = newType;
};

// Remove a line
function deleteLine(index) {
    session.elements.splice(index, 1);
    session.lines.splice(index, 1);
};
