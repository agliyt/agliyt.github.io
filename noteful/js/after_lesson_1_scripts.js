$(document).ready(function() {

    function changeProgressBar() {
        $(".additional-xp-text").remove();
        $(".xp-text").text("276 XP");
        var i = 0;
        if (i == 0) {
            i = 1;
            var elem = document.getElementsByClassName("progress-bar")[0];
            var width = 124;
            var id = setInterval(frame, width);

            function frame() {
                if (width >= 140) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + 'px';
                }
            }
        }
    }

    function showSkills() {
        $(".level-rewards-text").remove();
        $(".diamond-box").remove();
        $(".diamond-text").remove();
        $(".phone2").append(`
            <h1 class="skills skills-mastered">Skills Mastered:</h1>
            <h1 class="skills-topic skills-topic-1">Quarter Notes</h1>
            <h1 class="skills skills-learned">Skills Learned:</h1>
            <h1 class="skills-topic skills-topic-2">Key Signatures</h1>  
        `);
        $(".next-button").click(function() {
            location.href = 'after-lesson-2.html';
        });
    }

    function showRewards() {
        $(".phone2").append(`
            <h1 class="level-rewards-text">Level Rewards:</h1>
            <div class="diamond-box">
                <img class="diamond" src="assets/diamond.png"/>
            </div>
            <h1 class="diamond-text">+5 diamonds</h1>
            <div class="next-button">
                <h1 class="next-text">Next</h1>
            </div>
        `);
        $(".next-button").click(function() {
            showSkills();
        });
    }

    setTimeout(changeProgressBar, 1000);
    setTimeout(showRewards, 2000);
});
