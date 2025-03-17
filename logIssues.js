const logTools = document.getElementById("log");

const issueTypes = ["Plumbers on strike : Recent news has shown that plumbers, pipefitters, and welders, often union members, have engaged in strike action over disputes concerning fair compensation, particularly regarding travel allowances. These strikes have disrupted construction projects across various locations, highlighting the tension between workers seeking to maintain their living standards and employers aiming to manage costs.", "Building maintenance has been restored."]; 

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