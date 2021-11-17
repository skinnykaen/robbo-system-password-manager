// Вставка данных из chrome.storage для maqiatto
chrome.storage.sync.get("maqiattoEmail", function (obj) {
    document.querySelector("#email").value = obj.maqiattoEmail;
});

chrome.storage.sync.get("maqiattoPassword", function (obj) {
    document.querySelector("#password").value = obj.maqiattoPassword;
});