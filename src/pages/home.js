import bgimage from "../images/bg-ran9u.jpg";

export default function home() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("main-bg-container");
    homeContainer.id = "home-container";
    document.getElementById("content").appendChild(homeContainer);



    const callingcard = document.createElement("div");
    callingcard.classList.add("calling-card");

    document.getElementById("home-container").appendChild(callingcard);
    

    const heading = document.createElement("h1");
    heading.textContent = "Sensei, Welcome to Cafe Kivotos!";
    document.getElementsByClassName("calling-card")[0].appendChild(heading);

    const description = document.createElement("h3");
    description.textContent = "Experience the the cafe where all miracles begins.";
    document.getElementsByClassName("calling-card")[0].appendChild(description);





}
