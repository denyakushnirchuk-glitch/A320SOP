const body = document.getElementById("body")

// Lesson 2 shit
function lesson3_2() {
    body.innerHTML = `
    <h1>Eye flow</h1>
	<p>We always start the flow from the middle of the cockpit. We verify, landing gear is down, throttle idle, wx & pws is off, flaps match to their position.</p>
	<p>When ready to continue, press "next question"</p>
	<button onclick="updateProgress(3, 2); onclick=lesson3_3();">Next question</button>
	<button onclick="lesson3_1()">Previous Page</button>
    <button onclick="CloseLesson2()">Back to main menu</button>
    `
};

function lesson3_1() {
    body.innerHTML = `
    <h1>Hi and welcome to the last chapter of this course</h1>
	<p>In this course you will have a brief introduction to how to read the METAR properly.</p>
	<p>When ready to continue, press "next question"</p>
	<button onclick="updateProgress(3, 1); onclick=lesson3_2();">Next question</button>
	<button onclick="CloseLesson3()">Back to main menu</button>
    `
};

function lesson3_3(){
    body.innerHTML = `
    
    <h1>Conclusion</h1>
	<p>From this course you should have succsesfully learnt the eye flow and the layout fo the a320 cockpit. Be welcome to test your skills inside of the </p>
	<p>When finished, click "finish study" to close the app"</p>
    <button onclick="updateProgress(3, 3); onclick=CloseLesson3();">Finish study</button>
    <button onclick="lesson3_2()">Previous page</button>
    `
};