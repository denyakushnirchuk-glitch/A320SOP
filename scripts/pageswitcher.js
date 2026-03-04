// switchToStudy()
// switchToExams()


const container = document.getElementById("container");

function switchToStudy(){
    location.reload();
    container.innerHTML = `
    <div class="searchparent">
        <p>Study Books</p>
    </div>
        <div class="lessonparent">
            <div class="lesson-card" id="Lesson_1">
                <div class="headerr">
                    <div class="lessonName">
                    <p>A320 S.O.P. Cockpit familirization</p>
                    </div>
                    <div class="joinn" onclick="OpenLesson1()" href>
                        <p>Join</p>
                    </div>
                </div>
                
                <div class="stats">
                    <div class="difficultyy">
                        <p>Hard</p>
                    </div>
                    <div class="percentagee">
                        <p id="lesson1Percentage"></p>
                    </div>
                </div>
            </div>

            <div class="lesson-card" id="Lesson_2">
                <div class="headerr">
                    <div class="lessonName">
                    <p>A320 S.O.P Cockpit setup</p>
                    </div>
                    <div class="joinn">
                        <p>Join</p>
                    </div>
                </div>
                
                <div class="stats">
                    <div class="difficultyy">
                        <p>Medium</p>
                    </div>
                    <div class="percentagee">
                        <p>0%</p>
                    </div>
                </div>
            </div>

            <div class="lesson-card" id="Lesson_3">
                <div class="headerr">
                    <div class="lessonName">
                    <p>A320 Briefing & Weather</p>
                    </div>
                    <div class="joinn">
                        <p>Join</p>
                    </div>
                </div>
                
                <div class="stats">
                    <div class="difficultyy">
                        <p>Very hard</p>
                    </div>
                    <div class="percentagee">
                        <p>0%</p>
                    </div>
                </div>
            </div>
        </div>
    `
};

function switchToExams() {

    container.innerHTML = `
    <div class="searchparent">
        <p>Exams</p>
    </div>



    `

}