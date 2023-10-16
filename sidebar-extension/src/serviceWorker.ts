function setupContextMenu() {
  chrome.contextMenus.create({
    id: 'sidebar-example',
    title: 'Open Sidebar using selection',
    contexts: ['selection']
  });
}

chrome.runtime.onInstalled.addListener(() => {
  setupContextMenu();

  // Allow users to open the sidebar by clicking the action toolbar icon
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
});

chrome.contextMenus.onClicked.addListener((data, tab) => {

  if (data.menuItemId === 'sidebar-example') {
    // Open the sidebar in all the tabs of the current window.
    if (tab != null && tab.windowId != null) {
      // chrome.sidePanel.open({ windowId: tab.windowId })
      //   .catch((error:any) => console.error(error));
    }
  }

  chrome.runtime.sendMessage({
    name: 'sidebar-example',
    data: { value: data.selectionText }
  });
});