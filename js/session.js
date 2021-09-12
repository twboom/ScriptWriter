// Object to store session data
const session = [];

// All the lines in the document
session.lines = [];
session.elements = [];

// Get current line index
session.getCurrentLineIndex = _ => {
    return parseInt(document.activeElement.dataset.line);
}