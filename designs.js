// When size is submitted by the user, call makeGrid()
document.getElementById("submit").addEventListener("click", makeGrid);


function makeGrid(event) {
    // Empty string variable to store the grid
    var text = "";
    // Obtaining the inputed height and width
    var rows = document.getElementById("inputHeight").value;
    var cols = document.getElementById("inputWidth").value;
    // Emptying grid in case Submit is clicked again
    document.getElementById("pixelCanvas").innerHTML = text;
    // Preventing the grid from disappearing due to refreshing
    event.preventDefault();
    // for loop to construct the table
    for (r = 0; r < rows; r++) {
        text += "<tr>";
        for (c = 0; c < cols; c++) {
            text += "<td ></td>";
        }
        text += "</tr>";
    }
    // Update the grid in the blowser
    document.getElementById("pixelCanvas").innerHTML = text;
    // For loop to add event listener for each cell
    var all = document.querySelectorAll('td');
    for (i = 0; i < all.length; i++) {
        // Adding event listener
        all[i].addEventListener("click", function coloring() {
            // Obtaining the updated color
            var color = document.getElementById("colorPicker").value;
            // Applying the color to cell when clicked
            this.style.background = color;
        });
    }

}