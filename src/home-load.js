import home_img from "./img/home-img.jpg";

class Home
{
    constructor(){}
    
    HomeLoad()
    {
        const content = document.querySelector("#content");
        content.textContent = "";

        const homeImg = document.createElement("img");
        homeImg.src = home_img;
        homeImg.setAttribute("height", "500px");
        homeImg.setAttribute("width", "1000px");

        const heading = document.createElement("h1")
        heading.textContent = "Ice Creams - Every Single One";

        const quoteContainer = document.createElement("div");
        quoteContainer.classList.add("quote");

        const quote = document.createElement("p");
        quote.textContent = "You can't buy happiness...";
        quote.style.fontStyle = "italic";

        const quoteContinued = document.createElement("p");
        quoteContinued.textContent = "But you can buy ice creams and that's pretty much the same thing";
        quoteContinued.style.fontStyle = "italic";

        quoteContainer.append(quote, quoteContinued);

        const textContainer = document.createElement("div");

        const desc = document.createElement("p");
        desc.textContent = "Some filler text now...";

        const filler = document.createElement("p");
        filler.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ea nostrum sapiente unde dignissimos laborum, delectus, a quidem numquam vitae accusamus earum omnis molestiae corporis aperiam est quam, perspiciatis maxime.";

        textContainer.append(desc, filler);
        content.append(homeImg, heading, quoteContainer, textContainer);
    }
}

export {Home};