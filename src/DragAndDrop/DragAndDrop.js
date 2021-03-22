export default class DragAndDrop{

    constructor() {
        this.width = 15;
        this.height = 15;
        this.gridArray = [];
        this.setGrid();
    }

    setGrid(){
        for (let i = 0; i < this.width; i++) {
            this.gridArray.push(i);
            for (let j = 0; j < this.height; j++) {
                // array.push(i, j)
            }
        }
        console.log(this.gridArray);
    }

}
