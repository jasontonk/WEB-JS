import {Grid, GridView, GridSquare} from "../Imports"

export default class GridController {

    constructor(terrainController) {
        this.terrainController = terrainController
        this.view = null;
    }

    renderView(isLocked){
        this.view.setGridArray(this.terrainController.terrain.getGridArray());
        this.view.renderGrid();
        if (isLocked) {
            this.view.renderSimulation();
        }
        this.view.renderGridControls();
    }

    resetGrid(){
        this.terrainController.reset();
    }

    lockGrid(){
        this.terrainController.lockCurrentTerrain();
        //TODO lock terrain
    }
    selectObject(e){
        let col = e.target.getAttribute('data-col');
        let row = e.target.getAttribute('data-row');
        this.terrainController.selectObject(col, row)
    }


}