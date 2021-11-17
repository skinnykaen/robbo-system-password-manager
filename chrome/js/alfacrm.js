// Вставка данных из chrome.storage для alfacrm
chrome.storage.sync.get("alfacrmEmail", function (obj) {
    document.querySelector("#loginform-username").value = obj.alfacrmEmail;
});

chrome.storage.sync.get("alfacrmPassword", function (obj) {
    document.querySelector("#loginform-password").value = obj.alfacrmPassword;
});
