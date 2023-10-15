function setupContextMenu() {
    chrome.contextMenus.create({
      id: 'sidebar-example',
      title: 'Open Sidebar using selection',
      contexts: ['selection']
    });
  }
  
  chrome.runtime.onInstalled.addListener(() => {
    setupContextMenu();
  });
  
  chrome.contextMenus.onClicked.addListener((data) => {
    chrome.runtime.sendMessage({
      name: 'sidebar-example',
      data: { value: data.selectionText }
    });
  });