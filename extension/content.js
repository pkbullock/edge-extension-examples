console.log("Content script loaded - I'm here I promise lol");

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed, finding words to highlight");
    highlightWord("Sharepoint");
});

// Generated by GitHub Copilot :-) Thank you.
// Prompt: Generate a function that looks at the html of a page and highlights a specific word
function highlightWord(word) {
    // Get all the text nodes in the document
    const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

    // Loop through each text node
    while (textNodes.nextNode()) {
        const node = textNodes.currentNode;

        // Check if the node contains the word
        if (node.textContent.includes(word)) {
            console.log("Found word: " + word)
            // Split the text node into three parts: before the word, the word itself, and after the word
            const index = node.textContent.indexOf(word);
            const before = node.textContent.substring(0, index);
            const after = node.textContent.substring(index + word.length);
            const wordNode = document.createTextNode(word);

            // Create a new span element to wrap the word
            const span = document.createElement('span');
            span.style.backgroundColor = 'yellow';
            span.appendChild(wordNode);

            // Replace the original text node with the three new nodes
            node.parentNode.replaceChild(document.createTextNode(before), node);
            node.parentNode.insertBefore(span, node.nextSibling);
            node.parentNode.insertBefore(document.createTextNode(after), span.nextSibling);
        }
    }
}