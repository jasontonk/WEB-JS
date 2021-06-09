import {DragAndDropController, ElementPoolController, ElementPoolView, GridController, GridView} from "../Imports";
import Terrain from "./Terrain";

export default class TerrainController{

    constructor(setupform) {
        this.gridController = new GridController();

        this.elementsPoolController = new ElementPoolController(this.dragAndDropController, this.gridController);

        let objects = this.elementsPoolController.createObjects(setupform);
        console.log("asgfhjshfksahfkj"+objects);

        this.terrain = new Terrain(1, setupform.name, objects, this.gridController.grid);
        this.dragAndDropController = new DragAndDropController(objects);
        this.elementsPoolController.view = new ElementPoolView(this.elementsPoolController, this.dragAndDropController,40, objects);
        this.gridController.view = new GridView(this.terrain.grid.width,this.terrain.grid.height, this.terrain.grid.gridArray)
        this.dragAndDropController.generateEvents(objects);
    }
}