const body = document.getElementById("body")

// Lesson 1 shit
function lesson1_2() {
    body.innerHTML = `
    <h1>Eye flow</h1>
	<p>We always start the flow from the middle of the cockpit. We verify, landing gear is down, throttle idle, wx & pws is off, flaps match to their position.</p>
	<p>When ready to continue, press "next question"</p>
	<button onclick="updateProgress(1, 2); onclick=lesson2_3();">Next question</button>
	<button onclick="lesson2_1()">Previous Page</button>
    <button onclick="CloseLesson1()">Back to main menu</button>
    `
};

function lesson2_1() {
    body.innerHTML = `
    <h1>Hi and welcome to the A320 introduction course</h1>
	<p>In this course, we are going to get to know the layout of the A320 cockpit, the normal eye-flow and where different components are located at</p>
	<p>When ready to continue, press "next question"</p>
	<button onclick="updateProgress(1, 1); onclick=lesson1_2();">Next question</button>
	<button onclick="CloseLesson1()">Back to main menu</button>
    `
};

function lesson2_3(){
    body.innerHTML = `
    
    <h1>Conclusion</h1>
	<p>From this course you should have succsesfully learnt the eye flow and the layout fo the a320 cockpit. Be welcome to test your skills inside of the </p>
	<p>When finished, click "finish study" to close the app"</p>
    <button onclick="updateProgress(1, 3); onclick=CloseLesson1();">Finish study</button>
    <button onclick="lesson1_2()">Previous page</button>
    `
};