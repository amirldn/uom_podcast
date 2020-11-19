function pollDOM () {
  var removed = false;
  var el = document.querySelector("#playerContainer_videoContainer > div.play-button-on-screen.dimmed");
  if (el !== null && removed == false) {
      console.log("Found: ", el);
      el.parentElement.removeChild(el);
      var el = "REMOVED";
      removed = true;
    } else {
      setTimeout(pollDOM, 300); // try again in 300 milliseconds
      console.log("Not found element, retrying...");
    }
}
pollDOM();