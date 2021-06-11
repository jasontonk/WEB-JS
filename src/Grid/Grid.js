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
        let isPossible = true;
        for (let i = 0; i < object.width; i++){
            if (!isPossible){
                break;
            }
            for (let j = 0; j < object.height; j++){
                if ((y+j) < this.gridArray.length && (x+i) < this.gridArray[0].length) {
                    if (!this.gridArray[x + i][y + j].isEmpty()) {
                        isPossible = false;
                        break;
                    }
                }

                //TODO check if all is possible to place
            }
        }
        for (let i = 0; i < object.width; i++){
            for (let j = 0; j < object.height; j++){
                console.log(x + i + ' test ' + y + j);
                this.gridArray[x+i][y+j].placeObject(object);
            }
        }
    }
}
