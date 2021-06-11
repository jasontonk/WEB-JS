export default class GridView {

    constructor(width, height, gridArray) {
        this.grid = document.getElementById('grid');
        this.gridArray = gridArray;
        // this.renderSimulation();
        this.renderGrid();
    }

    setGridArray(gridArray){
        this.gridArray = gridArray;
    }

    renderGrid(){
        this.grid.innerHTML = '';
        for (let i = 0; i < this.gridArray.length; i++) {

            // Columns are i. Rows are j.
            let ongie = this.gridArray[i];
            let col = document.createElement("div");

            for (let j = 0; j < ongie.length; j++) {
                console.log("Rendering grid")
                let divi = document.createElement("div");
                //
                //divi.innerHTML = i + ", " + j;
                divi.dataset.col = i.toString();
                divi.dataset.row = j.toString();
                divi.classList.add("gridSquare");
                divi.style.width = "40px";
                divi.style.height = "40px";
                divi.style.border = "1px dashed #FFF";
                divi.style.borderWidth = "0.1px 0.1px 0.1px 0.1px";
                if (this.gridArray[i][j].object === null) {
                    divi.style.backgroundColor = "#42f56c";
                } else {
                    divi.innerText = this.gridArray[i][j].object.type;
                    divi.style.backgroundColor = "#FF0000";
            }
                col.append(divi);
            }

            //col.style.display = "inline-block";
            this.grid.append(col);
        }
    }

    renderSimulation(){
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext("2d");
        console.log("ongie " + canvas);
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(10, 10, 150, 80);
    }
}