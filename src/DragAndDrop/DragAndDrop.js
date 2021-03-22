export default class DragAndDrop{

    constructor() {
        this.width = 15;
        this.height = 15;
        this.gridArray = [];
        this.setGrid();
    }

    setGrid(){
        let cols = [];


        for (let i = 0; i < this.width; i++) {
            let rows = [];
            for (let j = 0; j < this.height; j++) {
                rows.push(j);
            }
            this.gridArray.push(rows);
        }
        //this.gridArray.push(cols);
        console.log(this.gridArray);
    }

}
