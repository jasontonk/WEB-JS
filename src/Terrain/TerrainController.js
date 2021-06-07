import {DragAndDropController, ElementPoolController, ElementPoolView, GridController} from "../Imports";
import Terrain from "./Terrain";

export default class TerrainController{

    constructor(setupform) {
        this.gridController = new GridController();

        this.elementsPoolController = new ElementPoolController(this.dragAndDropController, this.gridController);

        let objects = this.elementsPoolController.createObjects(setupform);

        this.terrain = new Terrain(setupform.name, objects, this.gridController.grid);
        this.dragAndDropController = new DragAndDropController(this.terrain.grid, this.terrain.objects)
        this.elementsPoolController.view = new ElementPoolView(this.elementsPoolController, this.dragAndDropController,40);
        this.renderAll()
    }
    renderAll(){
        this.elementsPoolController.view.render(this.terrain.objects)
    }
}