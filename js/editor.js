/* 
Editing script itself
*/

// Create a new line
function createLine(content, type, index, doFocus) {
    const line = document.createElement('p');
    line.classList.add('line');
    line.classList.add(type);
    line.innerText = content;
    line.setAttribute('contenteditable', 'true');
    line.dataset.line = index;

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
        editLine(line.innerText, index, false);
    });

    line.addEventListener('focus', _ => {
        session.lastActiveLine = line;
    });

    renderLine(line, index);

    if (doFocus) {
        line.focus();
    }

    updateIndexes();
};

// Edit an already existing line
function editLine(newContent, index, doEditHTML) {
    if (doEditHTML) {
        session.elements[index].innerText = newContent;
    }
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
    console.log(index)
    session.elements[index].remove();
    session.elements.splice(index, 1);
    session.lines.splice(index, 1);
    updateIndexes();
};

// Update element indexes
function updateIndexes() {
    for (let i = 0; i < session.elements.length; i++) {
        session.elements[i].dataset.line = i;
    }
}

/*
Editing META data
*/

// Update the title
function updateTitle(newTitle, doEditHTML) {
    script.title = newTitle;
    if (doEditHTML) {
        document.getElementById('title').innerText = newTitle;
    };
}

// Update the author
function updateAuthor(newAuthor, doEditHTML) {
    script.author = newAuthor;
    if (doEditHTML) {
        document.getElementById('author').innerText = newAuthor;
    };
}

// Update the description
function updateDescription(newDescription) {
    script.description = newDescription;
}

// Update the version
function updateVersion(newVersion) {
    script.version = newVersion;
}

function infoModal() {
    // Modal body
    const body = document.createElement('div');

    // Inputs
    const title = document.createElement('p');
    title.classList.add('modal-input-text');
    title.innerText = 'Title:';
    body.appendChild(title);

    const titleInput = document.createElement('input');
    titleInput.classList.add('modal-input');
    titleInput.id = 'title-input';
    titleInput.value = script.title;
    titleInput.addEventListener('input', _ => {
        updateTitle(titleInput.value, true);
    });
    title.appendChild(titleInput);
    
    const author = document.createElement('p');
    author.classList.add('modal-input-text');
    author.innerText = 'Author:';
    body.appendChild(author);

    const authorInput = document.createElement('input');
    authorInput.classList.add('modal-input');
    authorInput.id = 'author-input';
    authorInput.value = script.author;
    authorInput.addEventListener('input', _ => {
        updateAuthor(authorInput.value, true);
    });
    author.appendChild(authorInput);

    const description = document.createElement('p');
    description.classList.add('modal-input-text');
    description.innerText = 'Description:';
    body.appendChild(description);

    const descriptionInput = document.createElement('input');
    descriptionInput.classList.add('modal-input');
    descriptionInput.id = 'author-input';
    descriptionInput.value = script.description;
    descriptionInput.addEventListener('input', _ => {
        updateDescription(descriptionInput.value);
    });
    description.appendChild(descriptionInput);

    const version = document.createElement('p');
    version.classList.add('modal-input-text');
    version.innerText = 'Version:';
    body.appendChild(version);

    const versionInput = document.createElement('input');
    versionInput.classList.add('modal-input');
    versionInput.id = 'version-input';
    versionInput.value = script.version;
    versionInput.addEventListener('input', _ => {
        updateVersion(versionInput.value);
    });
    version.appendChild(versionInput);

    new Modal('Script Info', body).show()
}

window.onbeforeunload = evt => {
    evt.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
}