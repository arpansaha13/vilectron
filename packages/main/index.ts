import { join } from 'path'
import { app, BrowserWindow } from 'electron'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 650,
    minHeight: 500,
    title: 'Vilectron',
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs'), // path to built preload script (in dist folder)
    },
  })

  const isProd = app.isPackaged

  // Load the index.html of paskaged app
  // In case of dev mode, open the vite dev server that was created in scripts/watch.mjs
  mainWindow.loadURL(
    isProd
      ? `file://${join(__dirname, '../renderer/index.html')}`
      : `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`
  )
  // Open the DevTools.
  // Use { mode: 'detach' } to open the app and dev tools in seperate windows
  if (!isProd) mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
