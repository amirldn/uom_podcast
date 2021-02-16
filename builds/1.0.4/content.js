var removed = false;

function pollDOM() {
    var isBlackboard = null;
    if (window.location.href.includes("video.manchester.ac.uk/embedded")) {
        isBlackboard = true;
    } else if (window.location.href.includes("video.manchester.ac.uk/lectures") || window.location.href.includes("video.manchester.ac.uk/paella")) {
        isBlackboard = false;
    }

    // console.log("isBlackboard: " + isBlackboard)
    if (isBlackboard == false) {
        // Podcast Player
        var el = document.querySelector("#playerContainer_videoContainer > div.play-button-on-screen > div");
        if (el !== null) {
            console.log("Found: ", el);
            el.parentElement.removeChild(el);
            var el = "REMOVED";
            removed = true;
            console.log("Element has now been removed.");
            console.log("www.github.com/amirmaula");
            console.log("www.linkedin.com/in/amirmaula");
        } else {
            console.log("Not found element, retrying...");
        }

    } else {
        // Blackboard  
        console.log("here2");
        var el = document.querySelector("#video > div.vjs-title-bar-link");
        if (el !== null) {
            console.log("Found: ", el);
            el.parentElement.removeChild(el);
            var el = "REMOVED";
            removed = true;
            console.log("Element has now been removed.");
            console.log("www.github.com/amirmaula");
            console.log("www.linkedin.com/in/amirmaula");
        } else {
            console.log("Not found element, retrying...");
        }
    };
};

if (removed == false) {
    setTimeout(pollDOM, 5000);
}