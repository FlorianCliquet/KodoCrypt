const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load your HTML file.
    win.loadFile('UI.html');
}

app.whenReady().then(createWindow);
