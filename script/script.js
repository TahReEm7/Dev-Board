const buttons = document.querySelectorAll(".complete");
let activitiesLog = document.getElementById("act-log");
let clickedCount = 0;
let taskName = "";
let title = document.getElementsByTagName("h1");

for(let j = 0; j < title.length; j++){
    taskName = title[j].innerText;
}



for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        newLog = document.createElement("div");
        let date = new Date().toLocaleString();
        newLog.innerHTML = `
        <p class="m-2 p-2">You have Complete ${taskName} at ${date}</p>
        `
        newLog.classList.add('bg')
        newLog.classList.add('rounded-lg')
        newLog.classList.add('mx-4')
        newLog.classList.add('shadow-md')
        activitiesLog.appendChild(newLog)

        buttons[i].disabled = true;
        buttons[i].innerText = "Completed";

        alert("Board updated successfully")

        clickedCount++;
        if( clickedCount===buttons.length){
            alert("Congrats, you've completed all the tasks!");
        }
    });
}

document.getElementById("clear").addEventListener("click", function(){
    activitiesLog.innerHTML = "";
})