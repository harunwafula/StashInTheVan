


// var agsList = document.getElementById("ags-list");
// agsList.addEventListener("click", () => {
//     console.log("testtt")
// })

window.onload = function () {
    var componentContainer = document.getElementById("component-container");
    var homeContainer = document.getElementById("home-container");
    var songListContainer = document.getElementById("song-list-container")
    var ctaBtn = document.getElementById("cta-btn");
    var homeBtn = document.getElementById("home-btn");
    homeContainer.style.display = "block";

    ctaBtn.addEventListener("click", () => {
        // if(homeContainer.style.display = "none") {
        //     homeContainer.style.display = "block";

        // }else{
        //     console.log("best")
        //     homeContainer.style.display = "none";
        // }
        switchComponent(homeContainer, songListContainer);

    });

    homeBtn.addEventListener("click", () => {
        switchComponent(songListContainer, homeContainer);
    });
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
    }
    

};


function switchComponent(preComponent, nextComponent){
    preComponent.style.display = "none";
    nextComponent.style.display = "block";
}
