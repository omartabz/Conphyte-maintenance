const dashboard = document.getElementById("dash")

// const dash = ["Notifications",
//     "Logged Issues",
//     "Building News"
// ]
for(let i = 0; i < dash.length; i++){
    const log = document.createElement("div");
    log.classList.add("issue");
    log.innerText = dash[i];
    dashboard.appendChild(log);
}

dashboard.addEventListener("submit", function (e) {
    e.preventDefault();
  
    let logIssue = document.getElementById("log Issue");
    let description = document.getElementById("description");
    if (logIssue.value == "" || description.value == ""){
        alert("Issue Logged Successfully")
        
        return
}
})

