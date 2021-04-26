import Grid from "./Grid";
import GridView from "./GridView";
import GridSquare from "./GridSquare";

export default class GridController {

    constructor() {

        this.grid = new Grid();
        this.objectArray = [];
        // this.setGridPositions()
        new GridView(this.grid.width, this.grid.height, this.grid.gridArray);

    }

    // setGridPositions(){
    //     for (let i = 0; i < this.grid.gridArray.length; i++) {
    //
    //         // Columns are i. Rows are j.
    //         let ongie = this.grid.gridArray[i];
    //
    //         for (let j = 0; j < ongie.length; j++) {
    //            this.objectArray.add(new GridSquare(i, j));
    //         }
    //     }
    // }

}