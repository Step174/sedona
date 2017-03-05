var active = document.querySelector(".js-active");
var popup = document.querySelector(".popup");

active.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("popup-show");
})

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
        }
    }
});