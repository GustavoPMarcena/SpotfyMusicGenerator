const buttonDiscover = document.getElementById("discoverButton");
const fade = document.getElementById("fade");
const modal = document.getElementById("modal");

buttonDiscover.addEventListener("click", () => {
    fade.style.visibility = "visible";
    modal.style.visibility = "visible";
});

fade.addEventListener("click", () => {
    fade.style.visibility = "hidden";
    modal.style.visibility = "hidden";
});