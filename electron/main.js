// 控制應用生命周期和創建原生瀏覽器窗口的模組
const { app, BrowserWindow } = require('electron')
const path = require('path')

const  createWindow = () => {
  // 創建瀏覽器窗口
  const mainWindow = new BrowserWindow({
    // frame: false,     //無邊框
    // titleBarStyle: 'hidden',  // 隱藏標題工作列
    // transparent: true,        // 透明背景(需隱藏標題工作列or無邊框才有用)
    width: 1080,
    height: 800,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 加載 index.html
  mainWindow.loadFile('dist/index.html') // 此處跟electron官網路徑不同，需要注意

  // 打開開發工具
  // mainWindow.webContents.openDevTools()
}

// 這段程序將會在 Electron 結束初始化
// 和創建瀏覽器窗口的時候調用
// 部分 API 在 ready 事件觸發後才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // 通常在 macOS 上，當點擊 dock 中的應用程序圖標時，如果沒有其他
    // 打開的窗口，那麼程序會重新創建一個窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 除了 macOS 外，當所有窗口都被關閉的時候退出程序。 因此，通常對程序和它們在
// 任務欄上的圖標來說，應當保持活躍狀態，直到用戶使用 Cmd + Q 退出。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 在這個文件中，你可以包含應用程序剩餘的所有部分的代碼，
// 也可以拆分成幾個文件，然後用 require 導入。