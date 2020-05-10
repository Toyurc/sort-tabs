chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
  document.write(`<h3>This is a list of the current tabs in your window:</h3>`);
  document.write('<ul>');
  for (let i = 0; i < tabs.length; i++) {
    document.write(`<li>${tabs[i].url}</li>`);
  }
  document.write('</ul>');
});