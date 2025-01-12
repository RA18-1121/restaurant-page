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
        menus.classList.add("menus");


        const menuOne = document.createElement("div");
        const menuOneMainDiv = document.createElement("div");
        menuOneMainDiv.classList.add("main-div");
        const menuOneImgDiv = document.createElement("div");

        const menuOneName = document.createElement("h3");
        menuOneName.textContent = "Chocolate Icecream";
        const menuOnePrice = document.createElement("p");
        menuOnePrice.textContent = "$3";
        const menuOneImg = document.createElement("img");
        menuOneImg.src = chcolate;
        menuOneImg.setAttribute("height", "150px");
        menuOneImg.setAttribute("width", "150px");

        menuOneMainDiv.append(menuOneName, menuOnePrice);
        menuOneImgDiv.append(menuOneImg);
        menuOne.append(menuOneMainDiv, menuOneImgDiv);


        const menuTwo = document.createElement("div");
        const menuTwoMainDiv = document.createElement("div");
        menuTwoMainDiv.classList.add("main-div");
        const menuTwoImgDiv = document.createElement("div");

        const menuTwoName = document.createElement("h3");
        menuTwoName.textContent = "Vanilla Icecream";
        const menuTwoPrice = document.createElement("p");
        menuTwoPrice.textContent = "$3";
        const menuTwoImg = document.createElement("img");
        menuTwoImg.src = vanilla;
        menuTwoImg.setAttribute("height", "150px");
        menuTwoImg.setAttribute("width", "150px");

        menuTwoMainDiv.append(menuTwoName, menuTwoPrice);
        menuTwoImgDiv.append(menuTwoImg);
        menuTwo.append(menuTwoMainDiv, menuTwoImgDiv);


        const menuThree = document.createElement("div");
        const menuThreeMainDiv = document.createElement("div");
        menuThreeMainDiv.classList.add("main-div");
        const menuThreeImgDiv = document.createElement("div");

        const menuThreeName = document.createElement("h3");
        menuThreeName.textContent = "Butterscotch Icecream";
        const menuThreePrice = document.createElement("p");
        menuThreePrice.textContent = "$3";
        const menuThreeImg = document.createElement("img");
        menuThreeImg.src = butterscotch;
        menuThreeImg.setAttribute("height", "150px");
        menuThreeImg.setAttribute("width", "150px");

        menuThreeMainDiv.append(menuThreeName, menuThreePrice);
        menuThreeImgDiv.append(menuThreeImg);
        menuThree.append(menuThreeMainDiv, menuThreeImgDiv);


        const menuFour = document.createElement("div");
        const menuFourMainDiv = document.createElement("div");
        menuFourMainDiv.classList.add("main-div");
        const menuFourImgDiv = document.createElement("div");

        const menuFourName = document.createElement("h3");
        menuFourName.textContent = "Strawberry Icecream";
        const menuFourPrice = document.createElement("p");
        menuFourPrice.textContent = "$3";
        const menuFourImg = document.createElement("img");
        menuFourImg.src = strawberry;
        menuFourImg.setAttribute("height", "150px");
        menuFourImg.setAttribute("width", "150px");

        menuFourMainDiv.append(menuFourName, menuFourPrice);
        menuFourImgDiv.append(menuFourImg);
        menuFour.append(menuFourMainDiv, menuFourImgDiv);


        const menuFive = document.createElement("div");
        const menuFiveMainDiv = document.createElement("div");
        menuFiveMainDiv.classList.add("main-div");
        const menuFiveImgDiv = document.createElement("div");

        const menuFiveName = document.createElement("h3");
        menuFiveName.textContent = "Mango Icecream";
        const menuFivePrice = document.createElement("p");
        menuFivePrice.textContent = "$3";
        const menuFiveImg = document.createElement("img");
        menuFiveImg.src = mango;
        menuFiveImg.setAttribute("height", "150px");
        menuFiveImg.setAttribute("width", "150px");

        menuFiveMainDiv.append(menuFiveName, menuFivePrice);
        menuFiveImgDiv.append(menuFiveImg);
        menuFive.append(menuFiveMainDiv, menuFiveImgDiv);


        menus.append(menuOne, menuTwo, menuThree, menuFour, menuFive);
        content.append(heading, menus);
    }
}

export {Menu};