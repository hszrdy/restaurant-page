export default function home() {
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("contentContainer");

    document.getElementById("content").appendChild(contentContainer);
    
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Cafe Kivotos!";
    document.getElementsByClassName("contentContainer")[0].appendChild(heading);

}
