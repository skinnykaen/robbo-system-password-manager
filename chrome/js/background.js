chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    if (changeInfo.status === "complete") {
        const url = new URL(tab.url);
        switch (url.hostname) {

            case "https://demo.alfacrm.pro/*":
                chrome.tabs.executeScript(tabId, { file: "alfacrm.js" });
                break;
            case "https://www.maqiatto.com/login/*":
                chrome.tabs.executeScript(tabId, { file: "maqiatto.js" });
                break;
        }
    }
});