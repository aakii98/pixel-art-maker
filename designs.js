// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



function makeGrid() {
    for (var i=0;i<height.value;i++) {
        const height=canvas.insertRow(i);
        for (var j=0; j <weight.value;j++){
            const weight=height.insertCell(j);
            weight.addEventListener("click", click_color);
        }
    }
}

function click_color() {
    this.setAttribute("style", `background-color: ${document.getElementById("colorPicker").value}`);
}

function remakeGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(g.firstChild);
    }
}
var height = document.getElementById("inputHeight");
var weight = document.getElementById("inputWeight");
var canvas = document.getElementById("pixelCanvas");

document.getElementById("sizePicker").onsubmit = function(occur) {
    occur.preventDefault();
    remakeGrid();
    makeGrid();
};


