const {app, BrowserWindow} = require("electron");

const createWindow = function() {
  const window = new BrowserWindow({
    width: 900,
    height: 700,
  });

  /**
   * remove menu-bar
   */
  window.removeMenu();

  window.loadFile("index.html");
};

app.whenReady().then(function() {
  createWindow();
});

/**
 * close app when all windows are closed
 */
app.on("window-all-closed", function() {
    if(process.platform !== "darwin") {
        app.quit();
    }
});