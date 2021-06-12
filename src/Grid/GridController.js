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
        this.view.renderGridControls();
    }

    resetGrid(){
        this.terrainController.reset();
    }

    lockGrid(){
        console.log('Terrein vastzetten');
        //TODO lock terrain
    }
    selectObject(e){
        let col = e.target.getAttribute('data-col');
        let row = e.target.getAttribute('data-row');
        console.log(col + ' - ' + row);
        this.terrainController.selectObject(col, row)
    }


}