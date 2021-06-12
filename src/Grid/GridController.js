import {Grid, GridView, GridSquare} from "../Imports"

export default class GridController {

    constructor(terrainController) {
        this.terrainController = terrainController
        this.view = null;
    }

    renderView(){
        this.view.setGridArray(this.terrainController.terrain.getGridArray());
        this.view.renderGrid();
        this.view.renderSimulation();
    }

    resetGrid(){
        console.log('reset the grid here');
        //TODO reset grid
    }

    lockGrid(){
        console.log('Terrein vastzetten');
        //TODO lock terrain
    }


}