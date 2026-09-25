```javascript
// Dark mode

let darkModeButton = document.getElementById("darkMode");

darkModeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});


// Contact form

function sendMessage() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill all the fields.");

    } else {

        alert("Thank you " + name + "! Your message has been sent.");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

    }

}
```
