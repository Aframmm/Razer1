const form = document.getElementById("form");

const popup = document.getElementById("popup");
popup.addEventListener("click", Popup);

const closePopup = document.getElementById("closePopup");
closePopup.addEventListener("click", ClosePopup);



function Popup() {
    form.style.display = "block";
  }

function ClosePopup() {
    form.style.display = "none";
}