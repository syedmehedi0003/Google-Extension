let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {

    chrome.storage.sync.set({ color });

    console.log('Default background color set to', `color: ${color}`);

});