// Object to store session data
const session = [];

// All the lines in the document
session.lines = [];
session.elements = [];

// Get current line index
session.getCurrentLine = _ => {
    return document.activeElement.dataset.line;
}