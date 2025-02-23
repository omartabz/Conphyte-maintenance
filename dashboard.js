const dashboardTools = document.getElementById("dash")

const dash = ["Notifications",
    "Logged Issues",
    "Building News"
]
for(let i = 0; i < dash.length; i++){
    const log = document.createElement("div");
    log.classList.add("issue");
    log.innerText = dash[i];
    dashboardTools.appendChild(log);
}

