const storage = [];


// Persistant settings
storage.settings = [];

storage.settings.get = key => {

    const ls = localStorage.getItem('settings');

    if (ls) {
        return JSON.parse(ls)[key];
    } else {
        localStorage.setItem('settings', JSON.stringify({}));
        return undefined;
    }

};

storage.settings.set = (key, value) => {
    
    const ls = localStorage.getItem('settings');

    if (ls) {
        const current = JSON.parse(ls);
        current[key] = value;
        localStorage.setItem('settings', JSON.stringify(current));
        return true;
    } else {
        localStorage.setItem('settings', JSON.stringify({key: value}));
        return true;
    }
    
}

// Saved scripts
storage.scripts = [];

storage.scripts.get = key => {

    const ls = localStorage.getItem('scripts');

    if (ls) {
        return JSON.parse(ls)[key];
    } else {
        localStorage.setItem('scripts', JSON.stringify({}));
        return undefined;
    }

};

storage.scripts.set = (key, value) => {
    
    const ls = localStorage.getItem('scripts');

    if (ls) {
        const current = JSON.parse(ls);
        current[key] = value;
        localStorage.setItem('scripts', JSON.stringify(current));
        return true;
    } else {
        localStorage.setItem('scripts', JSON.stringify({key: value}));
        return true;
    }
    
}

storage.scripts.getAll = _ => {

    const ls = localStorage.getItem('scripts');

    if (ls) {
        return JSON.parse(ls);
    }

}