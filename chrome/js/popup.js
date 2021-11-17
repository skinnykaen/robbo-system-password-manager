window.addEventListener("load", function(){

    // Инициализация Current Data
    chrome.storage.sync.get("email",function(obj){
        document.querySelector("#currentEmail").innerText = obj.email; 
    });

    chrome.storage.sync.get("password",function(obj){
        document.querySelector("#currentPassword").innerText = obj.password; 
    });

    // Обработчик кнопки Edit. Измененяем chrome.storage
    document.querySelector("#editButton").addEventListener("click", function (){ 
        let email = document.querySelector("#email").value;
        let password =  document.querySelector("#password").value;

        let agreement = confirm("Apply changes?");

        if(agreement){
            chrome.storage.sync.set({"email": email},function(){
                console.log("email has been changed")
            });
             
            chrome.storage.sync.set({"password": password},function(){
                console.log("password has been changed")
            });

            chrome.storage.sync.get("email",function(obj){
                document.querySelector("#currentEmail").innerText = obj.email; 
            });
        
            chrome.storage.sync.get("password",function(obj){
                document.querySelector("#currentPassword").innerText = obj.password; 
            });
        }
    });

   
})