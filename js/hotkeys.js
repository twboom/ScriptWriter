const hotkeys = [
    {
        key: 'Enter',
        function: _ => {
            createLine('', 'ACTION', 'LAST', true)
            return true
        }
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
        }
    }
]

function initHotkeys(hotkeys) {
    hotkeys.forEach(hotkey => {
        document.addEventListener('keydown', evt => {
            if (evt.key === hotkey.key) {
                result = hotkey.function(evt)
                if (result) { evt.preventDefault() };
            }
        })
    });
};

initHotkeys(hotkeys)