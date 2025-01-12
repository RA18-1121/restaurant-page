import("./styles.css");
import {Home} from "./home-load";
import {Contact} from "./contact-load";
import {Menu} from "./menu-load"

class SelectTab
{
    constructor()
    {
        const homeButton = document.querySelector("#homeButton");
        const menuButton = document.querySelector("#menuButton");
        const contactButton = document.querySelector("#contactButton");
        const home = new Home();
        const menu = new Menu();
        const contact = new Contact();

        homeButton.addEventListener("click", () =>  home.HomeLoad())
        menuButton.addEventListener("click", () =>  menu.MenuLoad())
        contactButton.addEventListener("click", () =>   contact.ContactLoad())

        home.HomeLoad();
    }
}

const selector = new SelectTab();