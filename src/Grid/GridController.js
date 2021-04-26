import {Grid, GridView, GridSquare} from "../Imports"

export default class GridController {

    constructor() {

        this.grid = new Grid();
        this.objectArray = [];
        // this.setGridPositions()
        new GridView(this.grid.width, this.grid.height, this.grid.gridArray);

    }


}