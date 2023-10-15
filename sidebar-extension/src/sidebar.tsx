// FILEPATH: /c:/Git/contrib/edge-extension-examples/sidebar-extension/src/sidebar.ts
import ReactDOM from 'react-dom';
import SidebarComponent from './components/SidebarComponent';
import React from 'react';

function RenderSidebar(selectionData: string) {
    console.log('sidebar-example: RenderSidebar');
    ReactDOM.render(<SidebarComponent data={selectionData} />, document.getElementById('app'));
}

// Adds a listener for the message from the extension popup
// then perform an appropriate action based on the message name
chrome.runtime.onMessage.addListener(({ name, data }) => {
    if (name === 'sidebar-example') {
        RenderSidebar(data);
    }
});