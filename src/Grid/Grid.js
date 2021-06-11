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

    setObject(object){
        let x = object.xPos;
        let y = object.yPos;
        for (let i = 0; i < object.width; i++){
            for (let j = 0; j < object.height; j++){
                console.log(x + i + ' test ' + y + j);
                this.gridArray[x+i][y+j].placeObject(object);
            }
        }
    }
}
