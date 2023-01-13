
let myContainerElement = document.getElementById("myContainer");

// Creating H1 Element whithout writing code in HTML

let h1Element = document.createElement("h1");
h1Element.textContent = "Web Technologies";
myContainerElement.appendChild(h1Element)

// Creating Button Element whithout writing code in HTML

let buttonElement = document.createElement("button");
buttonElement.textContent = "Change Heading";
myContainerElement.appendChild(buttonElement);

// Adding Onclick in Button Element using Function Expression

buttonElement.onclick = function(){
    h1Element.textContent = "4.0 Technologies";
    // h1Element.style.color = "lightblue";
    // h1Element.style.fontSize = "50px";
    // h1Element.style.fontFamily = "Caveat";
    // h1Element.style.textDecoration = "underline"
    buttonElement.style.backgroundColor = "black"
    buttonElement.style.color = "white";
    // Adding Class in Heading Element using JS
    h1Element.classList.add("heading")
};

// Removing Element 

let removeStyleButtonElement = document.createElement("button");
removeStyleButtonElement.textContent = "Remove Style";
removeStyleButtonElement.onclick = function(){
    h1Element.classList.remove("heading");
};
document.getElementById("myContainer").appendChild(removeStyleButtonElement)