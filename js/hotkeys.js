const hotkeys = [
    {
        key: 'Enter',
        function: _ => {
            createLine('', 'ACTION', 'LAST', true)
            return true
        },
        altKey: false,
        ctrlKey: false,
        shiftKey: false
    },
    {
        key: 'Backspace',
        function: evt => {
            if (evt.target.innerText === '') {
                index = session.lines.findIndex( ({ content }) => content === evt.target.innerText)
                deleteLine(index)
            }
            else {
                return false
            }
        },
        altKey: false,
        ctrlKey: false,
        shiftKey: false
    },
    {
        key: 'n',
        function: _ => {
            changeLineType('NAME', session.getCurrentLineIndex())
            return true
        },
        altKey: true,
        ctrlKey: false,
        shiftKey: false
    },
    {
        key: 't',
        function: _ => {
            changeLineType('TEXT', session.getCurrentLineIndex())
            return true
        },
        altKey: true,
        ctrlKey: false,
        shiftKey: false
    },
    {
        key: 'a',
        function: _ => {
            changeLineType('ACTION', session.getCurrentLineIndex())
            return true
        },
        altKey: true,
        ctrlKey: false,
        shiftKey: false
    },
    {
        key: 'c',
        function: _ => {
            changeLineType('CUT', session.getCurrentLineIndex())
            return true
        },
        altKey: true,
        ctrlKey: false,
        shiftKey: false
    },
    {
        key: 'l',
        function: _ => {
            changeLineType('LOCATION', session.getCurrentLineIndex())
            return true
        },
        altKey: true,
        ctrlKey: false,
        shiftKey: false
    }
]

function initHotkeys(hotkeys) {
    hotkeys.forEach(hotkey => {
        document.addEventListener('keydown', evt => {
            if (
                evt.key === hotkey.key &&
                evt.altKey === hotkey.altKey &&
                evt.ctrlKey === hotkey.ctrlKey &&
                evt.shiftKey === hotkey.shiftKey
                ) {
                result = hotkey.function(evt)
                if (result) { evt.preventDefault() };
            }
        })
    });
};

initHotkeys(hotkeys)