function CheckExam() {

    let score = 0;

    // Get selected answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');

    // Make sure everything is answered
    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        alert("Answer all questions before finishing the exam.");
        return;
    }

    // Correct answers:
    // Q1 = a (Mist)
    // Q2 = b (Freezing Fog)
    // Q3 = c (Heavy showers of rain)
    // Q4 = a
    // Q5 = b

    if (q1.value === "b") score++;
    if (q2.value === "c") score++;
    if (q3.value === "c") score++;
    if (q4.value === "g") score++;
    if (q5.value === "e") score++;

    // Pass mark = 70% (4 out of 5)
    localStorage.setItem("4", score);
    window.location.href = "mainScreen.html";
}