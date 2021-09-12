// Read metadata
function readMeta(data) {
    const meta = {};
    const lines = data.split('\n');
    lines.forEach(line => {
        if (line === '') { return };

        const key = line.slice(0, 2);
        const value = line.slice(3);

        switch(key) {
            case 'MT':
                meta.title = value;
                break;

            case 'MA':
                meta.author = value;
                break;
            
            case 'MD':
                meta.description = value;
                break;

            case 'MV':
                meta.version = value;
                break;
        };

    });

    return meta
}

// Read script
function readScript(data) {
    const lines = data.split('\n');
    const script = [];

    lines.forEach(line => {
        if (line === '') { return };

        const key = line.slice(0, 1);
        const value = line.slice(2);

        switch(key) {
            case 'N':
                script.push({
                    type: 'NAME',
                    content: value
                });
                break;

            case 'T':
                script.push({
                    type: 'TEXT',
                    content: value
                });
                break;
            
            case 'A':
                script.push({
                    type: 'ACTION',
                    content: value
                });
                break;

            case 'C':
                script.push({
                    type: 'CUT',
                    content: value
                });
                break;

            case 'L':
                script.push({
                    type: 'LOCATION',
                    content: value
                });
                break;
        };
    });

    return script

}

function readFile(file) {
    file = file.split('-----');
    const meta = readMeta(file[0]);
    const lines = readScript(file[1]);

    updateTitle(meta.title, true);
    updateAuthor(meta.author, true);
    updateDescription(meta.description);
    updateVersion(meta.version);

    lines.forEach(({content, type}) => {
        createLine(content, type, 'LAST');
    });

}

function upload() {
    const file = document.createElement('input')
    file.type = 'file';
    file.accept = '.sw';
    file.click();
    file.addEventListener('change', _ => {
        file.files[0].text().then(text => readFile(text));
        file.remove();
    })
}