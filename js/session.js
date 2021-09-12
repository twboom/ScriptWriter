// Object to store session data
const session = [];

// All the lines in the document
session.lines = [];
session.elements = [];

// Get current line index
session.getCurrentLineIndex = _ => {
    let el = document.activeElement;
    if (el.classList.contains('line')) {
        return parseInt(document.activeElement.dataset.line);
    } else { return session.lastActiveLine.dataset.line; };
};

// Last active line
session.lastActiveLine = null;

// Object to store script data
let script = {};
script.title = 'MyScript';
script.description = null;
script.author = 'ThisUser';
script.version = null;