// Initialize the local database IF Doesnt exist yet.

let l1p = document.getElementById("lesson1Percentage");
let l2p = document.getElementById("Lesson2Percentage");
let l3p = document.getElementById("Lesson3Percentage")


function syncl1p(){
    let tempvar = Number(localStorage.getItem("1"));
    
    if (isNaN(tempvar)) {
        l1p.innerHTML = `0% Done`;
    } 
    else if (tempvar === 1){
        l1p.innerHTML = `33% Done`;
    }
    else if (tempvar === 2){
        l1p.innerHTML = `66% Done`;
    }
    else if (tempvar === 3){
        l1p.innerHTML = `Complete!`;
    };
};
function syncl2p(){
    let tempovar = Number(localStorage.getItem("2"))

    if (isNaN(tempovar)) {
        l2p.innerHTML = `0% Done`;
    } 
    else if (tempovar === 1){
        l2p.innerHTML = `33% Done`;
    }
    else if (tempovar === 2){
        l2p.innerHTML = `66% Done`;
    }
    else if (tempovar === 3){
        l2p.innerHTML = `Complete!`;
    };
}
function syncl3p(){
    let tempovar = Number(localStorage.getItem("3"))

    if (isNaN(tempovar)) {
        l3p.innerHTML = `0% Done`;
    } 
    else if (tempovar === 1){
        l3p.innerHTML = `33% Done`;
    }
    else if (tempovar === 2){
        l3p.innerHTML = `66% Done`;
    }
    else if (tempovar === 3){
        l3p.innerHTML = `Complete!`;
    };
}

function ShowExamResult(){
    let savedScore = Number(localStorage.getItem("4"));
    if (savedScore >= 4) {
        alert("PASSED \n Score: " + savedScore + "/5");
    } else {
        alert("FAILED \n Score: " + savedScore + "/5");
    }
    
    
};
function updateProgress(lesson, value){
    localStorage.setItem(lesson, value);
};

