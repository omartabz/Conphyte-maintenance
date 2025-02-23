const logTools = document.getElementById("log");

const issueTypes = ["Type of Issue", "Sorted/Not sorted"]; 

if (logTools) {
    for (let i = 0; i < issueTypes.length; i++) {
        const issueDiv = document.createElement("div")
        issueDiv.classList.add("problem");
        issueDiv.innerText = issueTypes[i];
        logTools.appendChild(issueDiv);
    }
}