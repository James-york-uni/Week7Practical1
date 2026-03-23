let theme1 = {
    background: '#ffffff',
    textColour: '#000000',
    font: 'Impact'
}

let theme2 = {
    background: '#000000',
    textColour: '#ffffff',
    font: 'Open Sans'
}

let theme3 = {
    background: '#7A5901',
    textColour: '#ffd33e',
    font: 'Arial'
}

const themes = document.getElementById("themes");
let background = '#ffffff';
let textColour = '#000000';
let font = 'impact';
let theme = 1;

function themeChoice() {
    const selectedTheme = themes.value;
    switch(selectedTheme) {
        case "1":
            background = theme1.background;
            textColour = theme1.textColour;
            font = theme1.font;
            break;
        case "2":
            background = theme2.background;
            textColour = theme2.textColour;
            font = theme2.font;
            break;
        case "3":
            background = theme3.background;
            textColour = theme3.textColour;
            font = theme3.font;
            break;
        default:
            break;
    }
    console.log(background,textColour, font);
}

function applyTheme() {
    themeChoice();
    document.body.style.backgroundColor = background;
    document.body.style.color = textColour;
    document.body.style.fontFamily = font;
}

applyTheme();
themes.addEventListener("change", applyTheme);

console.log(background,textColour, font);