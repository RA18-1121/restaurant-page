class Contact
{
    constructor(){}
    
    ContactLoad()
    {
        const content = document.querySelector("#content");
        content.textContent = "";

        const heading = document.createElement("h1")
        heading.textContent = "Contact Information";

        const textContainer = document.createElement("div");

        const address = document.createElement("p");
        address.textContent = "Some Number, Some Street, Some City";

        const phone = document.createElement("p");
        phone.textContent = "XXX...10X's";

        const email = document.createElement("p");
        email.textContent = "SomeName@SomeDomain";

        textContainer.append(address, phone, email);
        content.append(heading, textContainer);
    }
}

export {Contact};