javascript
function editAboutMe() {
  var aboutMeText = document.getElementById("about-me-text");
  var newText = prompt("Enter new text:");
  if (newText != null) {
    aboutMeText.textContent = newText;
  }
}
