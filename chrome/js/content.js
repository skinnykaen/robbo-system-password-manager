// Необходимо добавить выбор сценария в зависимости от текущего url
// Вставка данных из chrome.storage для alfacrm
chrome.storage.sync.get("email", function (obj) {
    document.querySelector("#loginform-username").value = obj.email;
});

chrome.storage.sync.get("password", function (obj) {
    document.querySelector("#loginform-password").value = obj.password;
});


// Вставка данных из chrome.storage для maqiatto
chrome.storage.sync.get("email", function (obj) {
    document.querySelector("#email").value = obj.email;
});

chrome.storage.sync.get("password", function (obj) {
    document.querySelector("#password").value = obj.password;
});