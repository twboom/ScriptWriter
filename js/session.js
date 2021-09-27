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

// Reset the session
session.reset = _ => {

    // Confirmation
    if (!confirm('Are you sure you want to reset the session?')) { return; };

    session.lines = [];
    session.elements = [];
    session.lastActiveLine = null;

    // Remove all lines
    document.getElementById('text-field').innerHTML = '';

    // Reset all data
    updateTitle('MyScript', true)
    updateAuthor('ThisUser', true);
    updateDescription(null, true);
    updateVersion(null, true);

};

// Last active line
session.lastActiveLine = null;

// Object to store script data
let script = {};
script.title = 'MyScript';
script.description = null;
script.author = 'ThisUser';
script.version = null;