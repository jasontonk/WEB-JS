import {Grid, GridView, GridSquare} from "../Imports"

export default class GridController {

    constructor(terrainController) {
        this.terrainController = terrainController
        this.view = null;
    }

    renderView(){
        this.view.setGridArray(this.terrainController.terrain.getGridArray());
        this.view.renderGrid();
    }


}