// Create a toggle button that changes the screen to dark mode when clicked & light mode when clicked again.
// Toggling
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; 

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark"); // accesing class dark
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light"); // accesing class light
        body.classList.remove("dark");
    }
});