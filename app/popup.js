function byAlphabeticalURLOrder(tab1, tab2) {
  if (tab1.url < tab2.url) {
    return -1;
  } else if (tab1.url > tab2.url) {
    return 1;
  }
  return 0;
}

chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {  
  tabs.sort(byAlphabeticalURLOrder);

  chrome.tabs.move(tabs[0].id, {index: 0});

  for (let i = 0; i < tabs.length; i++) {
    chrome.tabs.move(tabs[i].id, {index: i});
  }
  document.write(`<h3>This is a list of the current tabs in your window:</h3>`);
  document.write('<ul>');
  for (let i = 0; i < tabs.length; i++) {
    document.write(`<li>${tabs[i].url}</li>`);
  }
  document.write('</ul>');
});