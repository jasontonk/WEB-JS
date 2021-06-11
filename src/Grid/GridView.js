export default class GridView {

    constructor(width, height, gridArray) {
        this.grid = document.getElementById('grid');
        this.gridArray = gridArray;
        // this.renderSimulation();
        this.renderGrid();
    }


    renderSimulation() {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#00FF00";
        let offsetY = 40;
        let offsetX = 40;
        let img = new Image();
        img.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
        for (let i = 0; i < this.objectArray.length; i++) {
            let ongie = this.objectArray[i];
            ctx.fillRect(i * offsetX, 0, 40, 40);
                for (let j = 0; j < ongie.length; j++) {
                    let object =this.objectArray[i][j].object
                    if (object != null && object.type === "toilet"){
                        ctx.drawImage(img, i * offsetX, j * offsetY, 40, 40);
                    }
                    ctx.fillRect(i * offsetX, j * offsetY, 40, 40);
                }
        }
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
}