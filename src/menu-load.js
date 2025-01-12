import chcolate from "./img/chocolate.jpg";
import vanilla from "./img/vanilla.jpg";
import butterscotch from "./img/butterscotch.jpg";
import strawberry from "./img/strawberry.jpg";
import mango from "./img/mango.jpg";

class Menu
{
    constructor(){}
    
    MenuLoad()
    {
        const content = document.querySelector("#content");
        content.textContent = "";

        const heading = document.createElement("h1")
        heading.textContent = "Menu";

        const menus = document.createElement("div");

        const menuOne = document.createElement("div");
        const menuOneName = document.createElement("h3");
        menuOneName.textContent = "Chocolate Icecream";
        const menuOnePrice = document.createElement("p");
        menuOnePrice.textContent = "$2";
        const menuOneImg = document.createElement("img");
        menuOneImg.src = chcolate;
        menuOneImg.setAttribute("height", "200px");
        menuOneImg.setAttribute("width", "200px");
        menuOne.append(menuOneName, menuOnePrice, menuOneImg);

        const menuTwo = document.createElement("div");
        const menuTwoName = document.createElement("h3");
        menuTwoName.textContent = "Vanilla Icecream";
        const menuTwoPrice = document.createElement("p");
        menuTwoPrice.textContent = "$2";
        const menuTwoImg = document.createElement("img");
        menuTwoImg.src = vanilla;
        menuTwoImg.setAttribute("height", "200px");
        menuTwoImg.setAttribute("width", "200px");
        menuTwo.append(menuTwoName, menuTwoPrice, menuTwoImg);

        const menuThree = document.createElement("div");
        const menuThreeName = document.createElement("h3");
        menuThreeName.textContent = "Butterscotch Icecream";
        const menuThreePrice = document.createElement("p");
        menuThreePrice.textContent = "$2";
        const menuThreeImg = document.createElement("img");
        menuThreeImg.src = butterscotch;
        menuThreeImg.setAttribute("height", "200px");
        menuThreeImg.setAttribute("width", "200px");
        menuThree.append(menuThreeName, menuThreePrice, menuThreeImg);

        const menuFour = document.createElement("div");
        const menuFourName = document.createElement("h3");
        menuFourName.textContent = "Strawberry Icecream";
        const menuFourPrice = document.createElement("p");
        menuFourPrice.textContent = "$2";
        const menuFourImg = document.createElement("img");
        menuFourImg.src = strawberry;
        menuFourImg.setAttribute("height", "200px");
        menuFourImg.setAttribute("width", "200px");
        menuFour.append(menuFourName, menuFourPrice, menuFourImg);

        const menuFive = document.createElement("div");
        const menuFiveName = document.createElement("h3");
        menuFiveName.textContent = "Mango Icecream";
        const menuFivePrice = document.createElement("p");
        menuFivePrice.textContent = "$2";
        const menuFiveImg = document.createElement("img");
        menuFiveImg.src = mango;
        menuFiveImg.setAttribute("height", "200px");
        menuFiveImg.setAttribute("width", "200px");
        menuFive.append(menuFiveName, menuFivePrice, menuFiveImg);

        menus.append(menuOne, menuTwo, menuThree, menuFour, menuFive);
        
        content.append(heading, menus);
    }
}

export {Menu};