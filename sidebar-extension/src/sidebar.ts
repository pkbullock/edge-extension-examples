

function Sidebar(selectionData:string) {
    console.log('Sidebar', selectionData);
}










// Adds a listener for the message from the extension popup
// then perform an appropriate action based on the message name
chrome.runtime.onMessage.addListener(({ name, data }) => {
    if (name === 'sidebar-example') {
        Sidebar(data);
    }
  });