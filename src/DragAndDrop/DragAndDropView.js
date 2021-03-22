export default class DragAndDropView{

    constructor(width, height, gridArray) {
        this.grid = document.getElementById('grid');
        this.gridArray = gridArray;
        this.renderGrid();
    }

    renderGrid(){
        for (let i = 0; i < this.gridArray.length; i++) {

            let ongie = this.gridArray[i];
            let col = document.createElement("div");

            for (let j = 0; j < ongie.length; j++) {

                let divi = document.createElement("div")
                divi.innerHTML = i + ", " + j;
                divi.style.width = "40px";
                divi.style.height = "40px";
                divi.style.border = "1px solid black";
                col.append(divi);
            }

            col.style.display = "inline-block";
            this.grid.append(col);
        }
    }
}