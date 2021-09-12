function initControls() {
    const controls = [
        {
            id: 'control-ct-n',
            function: _ => {
                changeLineType('NAME', session.getCurrentLineIndex())
            }
        },
        {
            id: 'control-ct-t',
            function: _ => {
                changeLineType('TEXT', session.getCurrentLineIndex())
            }
        },
        {
            id: 'control-ct-a',
            function: _ => {
                changeLineType('ACTION', session.getCurrentLineIndex())
            }
        },
        {
            id: 'control-ct-c',
            function: _ => {
                changeLineType('CUT', session.getCurrentLineIndex())
            }
        },
        {
            id: 'control-ct-l',
            function: _ => {
                changeLineType('LOCATION', session.getCurrentLineIndex())
            }
        },
    ]

    controls.forEach(control => {
        // console.log(document.getElementById(control.id))
        document.getElementById(control.id).addEventListener('click', control.function)
    });

    document.querySelectorAll('.control.ct').forEach(btn => {
        btn.addEventListener('click', _ => {
            session.lastActiveLine.focus()
        })
    });

    document.getElementById('title').addEventListener('input', evt => {
        updateTitle(evt.target.innerText, false)
    });

    document.getElementById('author').addEventListener('input', evt => {
        updateAuthor(evt.target.innerText, false)
    });

    document.getElementById('more-info').addEventListener('click', _ => {
        infoModal()
    });
};

initControls();
