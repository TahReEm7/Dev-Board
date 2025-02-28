const buttons = document.querySelectorAll(".complete");
let activitiesLog = document.getElementById("act-log");
let counterDisplay = document.getElementById("count+");
let counterDisplayM = document.getElementById("count-");
let clickedCount = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() { 
        let taskName = document.getElementsByTagName("h1")[i].innerText; 

        let newLog = document.createElement("div");
        let date = new Date().toLocaleString();

        newLog.innerHTML = `<p class="m-2 p-2">You have completed ${taskName} at ${date}</p>`;

        newLog.classList.add('bg', 'rounded-lg', 'mx-4', 'shadow-md');
        activitiesLog.appendChild(newLog);

        buttons[i].disabled = true;
        buttons[i].innerText = "Completed";

        alert("Board updated successfully");

        clickedCount++;
       
        let currentCount = parseInt(counterDisplay.innerText);
        counterDisplay.innerText = currentCount + 1;
        
        let currentCountM = parseInt(counterDisplayM.innerText);
        counterDisplayM.innerText = currentCountM - 1;

        if (clickedCount === buttons.length) {
            alert("Congrats, you've completed all the tasks!");
        }
    });
}

document.getElementById("clear").addEventListener("click", function() {
    activitiesLog.innerHTML = "";
    // clickedCount = 0;
});


document.getElementById("clear").addEventListener("click", function(){
    activitiesLog.innerHTML = "";
})