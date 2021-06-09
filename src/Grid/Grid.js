import {GridSquare} from "../Imports";

export default class Grid {

    constructor() {
        this.width = 15;
        this.height = 15;
        this.gridArray = [];
        this.setGrid();
    }

    setGrid(){
        for (let i = 0; i < this.width; i++) {
            let rows = [];
            for (let j = 0; j < this.height; j++) {
                let square = new GridSquare(i, j);
                rows.push(square);
            }
            this.gridArray.push(rows);
        }
    }
}
