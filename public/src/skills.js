function fetchSkills() {
    var skillsHeaders = new Headers();
    skillsHeaders.append('Content-Type', 'application/json');
    var request = new Request("http://localhost:8000/skills/", {headers: skillsHeaders});
    fetch(request).then(response => {
        if(response.status === 200) {
            return response.text()
        }
    }).then(text => {
        var data = JSON.parse(text);
        for (var i in data) {
            var ul = document.getElementById("skillslist");
            var li = document.createElement("LI");
            li.className = "skillsli"
            li.appendChild(document.createTextNode(JSON.stringify(data[i]["skill"]).slice(1,-1)));
            ul.appendChild(li);

        }
    });
}