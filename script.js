
document.addEventListener('DOMContentLoaded', (event) => {
    const checkBoxList = document.querySelectorAll(".checkBox");
    const inputFields = document.querySelectorAll(".goalInput");
    const errerLable = document.querySelector(".errerLable");
    const progresreport = document.querySelector(".progresreport");
    const progress = document.querySelector("#progress");


    checkBoxList.forEach((checkBox, index) => {
        checkBox.addEventListener("click", () => {
            const allGoalsWritten = [...inputFields].every(input => input.value.trim() !== ""); 
            if (allGoalsWritten) {
                checkBox.parentElement.classList.toggle("completed");
                progresreport.style.width = `${(index + 1) / checkBoxList.length * 100}%`;
                updateProgress();
            } else {
                errerLable.style.display = "block";
                
            }
        });
    });
   
    inputFields.forEach((input) =>{
        input.addEventListener("focus",() =>{
            errerLable.style.display = "none"; 
        })
    })


    function updateProgress() {
        const completedGoals = document.querySelectorAll(".Goalcheck.completed").length;
        const totalGoals = inputFields.length;
        const progressReport = document.querySelector("#progres_report");
        progress.innerHTML = `(${completedGoals}/${totalGoals} completed)`;
    }
});

