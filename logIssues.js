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

// res.json({ registered: 'yes' })
// res.json({ issues1: "handle", issues2: "door" })
// res.json({ data: [
//     { description: "handle was broken"},
//     { description :"sink tap came off"},
//     { description :"stove connection damaged"},
//     ] }