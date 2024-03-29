$(document).ready(function() {

    if (sessionStorage.getItem("completed") == "true") {
        $(".phone2").append(`
            <img class="band-bear" src="assets/bear-bass-band.png"/>
            <img class="band-gus" src="assets/gus.png"/>
            <img class="band-elephant" src="assets/elephant-drums-band.png"/>
        `);
        $(".streak-text").text("5");
        $(".phone2").after(`
            <div>
                <audio autoplay loop style="margin: 0 auto; display: block;">
                    <source id="audio-band" src="audio/guitar.mp3" type="audio/mp3">
                </audio>
            </div>
        `)
    } else {
        $(".phone2").append(`
            <img class="band-bear" src="assets/bear-bass-band.png"/>
            <img class="band-elephant" src="assets/elephant-drums-band.png"/>
        `);
        $(".streak-text").text("4");
        $(".phone2").after(`
            <div>
                <audio autoplay loop style="margin: 0 auto; display: block;">
                    <source id="audio-band" src="audio/no_guitar.mp3" type="audio/mp3">
                </audio>
            </div>
        `)
    }

    $(".sidebar-lessons").click(function() {
        $(".sidebar-band").removeClass("selected");
        $(".sidebar-lessons").addClass("selected");
    
        location.href = 'index.html';
    });

});
