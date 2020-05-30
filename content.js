// content.js
// alert("Hello from your Chrome extension! v0.2")
function pollDOM () {
  var el = document.querySelector("#paella_plugin_PlayButtonOnScreen > canvas");
  if (el !== null) {
      console.log("Found: ", el);
      el.parentElement.removeChild(el);
      var el = "REMOVED";
    } else {
      setTimeout(pollDOM, 300); // try again in 300 milliseconds
      console.log("Not found element, retrying...");
    }
}

pollDOM();
