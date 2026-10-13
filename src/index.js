import "./styles.css";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js";

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

function clearContent() {
    document.getElementById("content").innerHTML = "";
}

homeButton.addEventListener("click", () => {
    clearContent();
    home();
});

menuButton.addEventListener("click", () => {
    clearContent();
    menu();
});

contactButton.addEventListener("click", () => {
    clearContent();
    contact();
});

home();