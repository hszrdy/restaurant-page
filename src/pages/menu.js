import arisdrink from "../images/aris-hawaiian-aid.png";
import keidrink from "../images/kei-pear-grapefruit-smoothie.png";
import midoridrink from "../images/midori-apology-aid.png";
import momoidrink from "../images/momoi-peach-lacle.png";
import yuzudrink from "../images/yuzu-cherry.png";
import arisfood from "../images/aris-hamburger-set.png";
import keifood from "../images/kei-strawberry-foorenois.png";
import yuzufood from "../images/yuzu-firehouse-pizza.png";

export default function menu() {
    const bgContainer = document.createElement("div");
    bgContainer.classList.add("main-bg-container");
    document.getElementById("content").appendChild(bgContainer);

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Our offerings!";

    const menuHeadingContainer = document.createElement("div");
    menuHeadingContainer.appendChild(menuHeading);
    menuHeadingContainer.classList.add("heading-container");

    const menuGridContainer = document.createElement("div");
    menuGridContainer.classList.add("grid-container");

    const menuItems = [
        { name: "Aris Hawaiian Aid",  image: arisdrink },
        { name: "Kei Pear Grapefruit Smoothie",  image: keidrink },
        { name: "MidorI Apology Aid",  image: midoridrink },
        { name: "Momoi Peach Lacle", image: momoidrink },
        { name: "Yuzu Cherry", image: yuzudrink },
        { name: "Aris Hamburger Set", image: arisfood },
        { name: "Kei Strawberry Foorenois", image: keifood },
        { name: "Yuzu Firehouse Pizza", image: yuzufood }
    ];

    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = document.createElement("div");
        const menuItemName = document.createElement("h2");
        const menuItemImage = document.createElement("img");

        menuItemName.textContent = menuItems[i].name;
        menuItemImage.src = menuItems[i].image;
        menuItemImage.alt = menuItems[i].name;
        menuItemImage.classList.add("card-img");

        menuItem.appendChild(menuItemImage);
        menuItem.appendChild(menuItemName);
        menuGridContainer.appendChild(menuItem);
        menuItem.classList.add("item-card");
    }

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuContainer.appendChild(menuHeadingContainer);
    menuContainer.appendChild(menuGridContainer);
    bgContainer.appendChild(menuContainer);

}
