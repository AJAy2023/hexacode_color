

const colorButton = document.getElementById('colorButton');
const message = document.getElementById('message');


const colorNames = {
    "#FF0000": "Red",
    "#00FF00": "Green",
    "#0000FF": "Blue",
    "#FFFF00": "Yellow",
    "#FFA500": "Orange",
    "#800080": "Purple",
    "#00FFFF": "Cyan",
    "#FFC0CB": "Pink",
    "#A52A2A": "Brown",
    "#808080": "Gray"
};


function getRandomColor() {
    const hexCodes = Object.keys(colorNames);
    return hexCodes[Math.floor(Math.random() * hexCodes.length)];
}


function changeColor() {
    
    const randomColor = getRandomColor();

    colorButton.style.backgroundColor = randomColor;

    
    const colorName = colorNames[randomColor];
    message.innerText = `You changed the button color to ${colorName} (${randomColor})!`;
}


colorButton.addEventListener('click', changeColor);
