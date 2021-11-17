window.addEventListener("load", function () {

    // Инициализация Current Data
    setDataInCurrent("alfacrm");

    // Обработчик кнопки Edit. Измененяем chrome.storage
    document.querySelector("#editButton").addEventListener("click", function () {
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#password").value;
        let service = document.querySelector("#services").value;
        let currentService = document.querySelector("#currentServiceSelect").value;
        let agreement = confirm("Apply changes?");

        if (agreement) {
            setDataInStorage(email, password, service);
            if(service === currentService){
                setDataInCurrent(service);
            }
        }
    });

    document.querySelector("#currentServiceSelect").addEventListener("change", function () {
        let currentService = document.querySelector("#currentServiceSelect").value;
        setDataInCurrent(currentService);
    });

})

function setDataInStorage(email, password, service) {

    let emailKey = service + "Email";
    let passwordKey = service + "Password";

    chrome.storage.sync.set({[emailKey]: email }, function () {
        console.log("email has been changed in " + service)
    });

    chrome.storage.sync.set({[passwordKey]: password }, function () {
        console.log("password has been changed in " + service)
    });
}

function setDataInCurrent(currentService) {
    document.querySelector("#currentService").innerText = currentService;

    let emailKey = currentService + "Email";
    let passwordKey = currentService + "Password";

    chrome.storage.sync.get(emailKey, function (obj) {
        document.querySelector("#currentEmail").innerText = obj[emailKey];
    });

    chrome.storage.sync.get(passwordKey, function (obj) {
        document.querySelector("#currentPassword").innerText = obj[passwordKey];
    });
}