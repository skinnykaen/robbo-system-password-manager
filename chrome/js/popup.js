window.addEventListener("load", function(){

    let listAccounts  = [];
    console.log(localStorage.key(0));

    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        listAccounts.push(localStorage.getItem(key));
    }

    document.querySelector("#addButton").addEventListener("click", function (){ 
        let email = document.querySelector("#email").value;
        let password =  document.querySelector("#password").value;

        let dataObj = {};
        dataObj[email] = email;
        // dataObj[password] = password;
        localStorage.setItem(email, password);
        console.log(listAccounts);

    });

    document.querySelector("#delete").addEventListener("click", function (){ 
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    });

})