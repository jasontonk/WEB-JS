export default class DragAndDropView{

    constructor(width, height) {
        this.grid = document.getElementById('grid');
        this.width = width;
        this.height = height;

        this.renderGrid();
    }

    renderGrid(){
        for (let i = 0; i < this.width; i++) {
            let col = document.createElement("div");
            for (let i = 0; i < this.height; i++) {
                col.append(document.createElement("div"));
            }
            col.style.display = "inline-block";
            Array.prototype.forEach.call(col.children, child => {

                child.style.width = "40px";
                child.style.height = "40px";
                child.style.border = "1px solid black";
            });
            this.grid.append(col);
        }
    }
}