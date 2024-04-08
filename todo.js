// Κώδικας που θα εκτελείται όταν φορτωθεί η σελίδα:
// Code that will run when the page is loaded:
colorEveryOddTask();
countCalculator();

function countCalculator(){
    // changes the text content to total count
    const total = document.querySelector(".total");
    total.textContent = getTotalCount();
    //same procedure for left to do
    const leftToDo = document.querySelector(".left-todo");
    leftToDo.textContent = getTotalCount() - getDoneCount();
}

//
// Γράψτε εδώ τον κώδικά σας
// Write your code here
// remove button
removeFunctionality();

function removeFunctionality(){
    const buttons = document.querySelectorAll("button");
    const toDoList = document.querySelectorAll("li");
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click", function(){ 
            toDoList[i].classList.add("done");
            const leftToDo = document.querySelector(".left-todo");
            leftToDo.textContent = getTotalCount() - getDoneCount();
        });
    }
}

//input
const input  = document.getElementById("item");

input.addEventListener("keyup", function(e){
    if(e.key==='Enter'){
        //add task
        const listItem = document.createElement("li");
        listItem.innerHTML += "<span>"+ input.value +"</span><button>Αφαίρεση</button>";

        let toDoList = document.querySelector(".task-list");
        toDoList.appendChild(listItem);
        input.value = "";
        colorEveryOddTask();
        removeFunctionality();
        countCalculator();
    }
});


//--------------------------------------------------
// Ο παραπάνω κώδικας θα κάνει χρήση των εξής συναρτήσεων:
// The above code will use the following functions:

// 1. Επιστρέφει το πλήθος των εργασιών που έχουν σημειωθεί ως ολοκληρωμένες
// 1. Returns the count of the tasks that have been marked as done
function getDoneCount() {
    const doneItems = document.querySelectorAll('.done');
    const count = doneItems.length;
    return count;
}

// 2. Επιστρέφει το πλήθος όλων των εργασιών
// 2. Returns the total count of all the tasks
function getTotalCount() {
    const listItems = document.querySelectorAll('li');
    const count = listItems.length;
    return count;
}

// 3. Χρωματίζει όλες τις άρτιες εργασίες
// 3. Colors every odd task
function colorEveryOddTask() {
    const toBeColored = document.querySelectorAll("li:nth-child(2n)");
    toBeColored.forEach((item) => item.firstChild.style.backgroundColor= "white");
}




