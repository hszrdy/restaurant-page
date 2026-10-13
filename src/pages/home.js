export default function home() {
    const test = document.createElement("p");
    test.textContent = "This is the home page";
    document.getElementById("content").appendChild(test);
}
