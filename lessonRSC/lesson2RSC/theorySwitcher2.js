const body = document.getElementById("body")

// Lesson 2 shit
function lesson2_2() {
    body.innerHTML = `
    <h1>Eye flow</h1>
	<p>We always start the flow from the middle of the cockpit. We verify, landing gear is down, throttle idle, wx & pws is off, flaps match to their position.</p>
	<p>When ready to continue, press "next question"</p>
	<button onclick="updateProgress(2, 3); onclick=lesson2_3();">Next question</button>
	<button onclick="lesson2_1()">Previous Page</button>
    <button onclick="CloseLesson2()">Back to main menu</button>
    `
};

function lesson2_1() {
    body.innerHTML = `
    <h1>Hi and welcome to the A320 cockpit setup course</h1>
	<p>In this course, you are going to learn how to set up the cockpit for the A320.</p>
	<p>When ready to continue, press "next question"</p>
	<button onclick="updateProgress(2, 1); onclick=lesson2_2();">Next question</button>
	<button onclick="CloseLesson2()">Back to main menu</button>
    `
};

function lesson2_3(){
    body.innerHTML = `
    
    <h1>Conclusion</h1>
	<p>From this course you should have succsesfully learnt the eye flow and the layout fo the a320 cockpit. Be welcome to test your skills inside of the </p>
	<p>When finished, click "finish study" to close the app"</p>
    <button onclick="updateProgress(2, 3); onclick=CloseLesson2();">Finish study</button>
    <button onclick="lesson2_2()">Previous page</button>
    `
};