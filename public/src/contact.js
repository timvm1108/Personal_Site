function postContact(){
    var form = document.getElementById("contactform").elements;
    body = {name: form["name"].value, email: form["email"].value, message: form["message"].value};
    var contactHeaders = new Headers();
    contactHeaders.append('Content-Type', 'application/json');
    var request = new Request("http://localhost:8000/contact/", {method: 'POST', body: JSON.stringify(body), headers: contactHeaders});
    fetch(request).then(    response => {
        if(response.status === 201) {
            var form = document.getElementById("contactform");
            var success = document.createElement("P");
            success.appendChild(document.createTextNode("Email sent, Thank you!"));
            form.appendChild(success);
        }
        else {
            var form = document.getElementById("leftbox");
            var failure = document.createElement("P");
            failure.appendChild(document.createTextNode("An error occured, please try again soon!"));
            form.appendChild(failure);
        }
    }).catch(   error => {
        var p = document.createElement("P");
        p.innerHTML = "An error occurred locally: " + error;
        document.getElementById("leftbox").appendChild(p); 
    });
    document.getElementById("contactform").elements["submit"].disabled = true;
}