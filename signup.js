let loginForm = document.getElementById("loginForm");

function isAlphanumeric(char) {
    if (char.length !== 1) {
      
        return false; // Only check single characters
    }
    const code = char.charCodeAt(0);
    return (
      (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122)   // a-z
    );
  }

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");
if (username.value == "value" || password.value == null){
    alert("Please enter your username")
    return
} 
 for (let i = 0; i<username.value.length; i++){
    if (!isAlphanumeric(username.value.charAt(i))){
        alert ('Please enter a valid username');
        return
    }
 }
// password too short


  if (username.value == "text" || password.value == "0") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    window.location.href ="dashboard.html";
  }
});
// if (isEmpty(firstName)) {
//     statusBoxErrorMessage(statusMessageBox, "Dear Hacker, please enter your name :)");
//     return;
// } else if (invalidText(firstName)) {
//     statusBoxErrorMessage(statusMessageBox, "Dear Hacker, please enter a valid name :)");
//     return;
// }

// if (isEmpty(email)) {
//     statusBoxErrorMessage(statusMessageBox, "Dear Hacker, please enter your email :)");
//     return;
// } else if (invalidEmail(email)) {
//     statusBoxErrorMessage(statusMessageBox, "Dear Hacker, please enter a valid email address :)");
//     return;
// }
