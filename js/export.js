function generateText() {
    const lineTypeConversion = {
        "NAME": "N",
        "TEXT": "T",
        "ACTION": "A",
        "CUT": "C",
        "LOCATION": "L"
    }

    const lines = session.lines;

    let output = "";

    lines.forEach(line => {
        const type = lineTypeConversion[line.type];
        output += `${type}:${line.content}`
        output += '\n'
    });

    return output

};

function generateMeta() {

    let output = "";

    output += `MT:` + script.title;
    output += '\n';
    output += `MD:` + script.description;
    output += '\n';
    output += `MA:` + script.author;
    output += '\n';
    output += `MV:` + script.version;
    output += '\n';


    return output
};

function generateFile() {
    const meta = generateMeta();
    const text = generateText();

    let data = "";

    data += meta;
    data += "-----"
    data += '\n'
    data += text;

    const encoded = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);
}