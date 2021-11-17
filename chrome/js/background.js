setTimeout(function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function (tabs) {
        tabURL = tabs[0].url;
        alert("URL from background.js " + tabURL);
    });
}, 5000);