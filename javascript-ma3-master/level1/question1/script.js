//Use RegEx to validate form


function submitCheck()
{
    var fName = document.getElementById('fName');
    var phoneNumber = document.getElementById('phone').value;
    var eMail = document.getElementById('email').value;
    var fNameCheck = /.*\S.*/;
    var phoneCheck = /^[+]?\d+$/;
    var eMailCheck = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;
    var fNameInput = fNameCheck.test(fName);
    var phoneInput = phoneCheck.test(phoneNumber);
    var eMailInput = eMailCheck.test(eMail);
    alert("first name:"+fNameInput );
    alert("phone:"+phoneInput );
    alert("email:"+eMailInput );
    // console.log("first name"+fNameInput );
    // console.log("phone:"+phoneInput );
    // console.log("email:"+eMailInput );
}


// Using VS with live server, I had a hard time with the console.log as the page were immediately refreshed, therefor alert instead.

// I am not to sure about the regex for name check, but would repeat it for last name
