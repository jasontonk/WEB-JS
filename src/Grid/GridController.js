import Grid from "./Grid";
import GridView from "./GridView";

export default class GridController {

    constructor() {
        this.grid = new Grid();
        new GridView(this.grid.width, this.grid.height, this.grid.gridArray);
    }

}