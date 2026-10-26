export default function contact() {
    const bgContainer = document.createElement("div");
    bgContainer.classList.add("main-bg-container");
    document.getElementById("content").appendChild(bgContainer);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    
    const contactHeading = document.createElement("h1");
    contactHeading.textContent = "Contact Us!";

    contactContainer.appendChild(contactHeading);

    const contactInfo = document.createElement("p");
    contactInfo.textContent = "For inquiries, please reach out to us at info@restaurant.com";

    const disclaimer = document.createElement("p");
    disclaimer.textContent = "Please note that this is a fictional restaurant and the contact information provided is not valid.";

    const disclaimer2 = document.createElement("p");
    disclaimer2.textContent = "This website is created for educational purposes only and is not affiliated with any real restaurant.";

    const referenceWebsite = document.createElement("p");
    referenceWebsite.textContent = "This website is inspired by: https://www.bluearchivecafe.com (Cafe Memorial)";

    const credits = document.createElement("h2");
    credits.textContent = "Credits: ";
    const creditsList = document.createElement("ul");
    const credit1 = document.createElement("li");
    credit1.textContent = "Background image by Ran9u on X/Twitter (https://x.com/ran9u/status/1948307167603548197/photo/2)";
    const credit2 = document.createElement("li");
    credit2.textContent = "Menu item images by Cafe Memorial (Blue Archive Cafe) (https://www.bluearchivecafe.com/)";
    const credit3 = document.createElement("li");
    credit3.textContent = "Glow-sans Font by welai (https://github.com/welai/glow-sans)";
    
    creditsList.appendChild(credit1);
    creditsList.appendChild(credit2);
    creditsList.appendChild(credit3);

    contactContainer.appendChild(credits);
    contactContainer.appendChild(creditsList);
    contactContainer.appendChild(disclaimer);
    contactContainer.appendChild(contactInfo);
    contactContainer.appendChild(disclaimer2);
    contactContainer.appendChild(referenceWebsite);

    bgContainer.appendChild(contactContainer);

}
