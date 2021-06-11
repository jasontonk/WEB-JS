import {DragAndDropController, ElementPoolController, ElementPoolView, GridController, GridView} from "../Imports";
import Terrain from "./Terrain";

export default class TerrainController{

    constructor(setupform) {
        this.gridController = new GridController();

        this.elementsPoolController = new ElementPoolController(this.dragAndDropController, this.gridController);

        let objects = this.elementsPoolController.createObjects(setupform);

        this.terrain = new Terrain(this, setupform.name, objects, this.gridController.grid);
        this.dragAndDropController = new DragAndDropController(this ,objects);
        this.elementsPoolController.view = new ElementPoolView(this.elementsPoolController, this.dragAndDropController,40, objects);
        this.gridController.view = new GridView(this.terrain.getGridWidth(),this.terrain.getGridHeight(), this.terrain.getGridArray())
        this.dragAndDropController.generateEvents(objects);
    }

    placeObject(x, y, object){
        return this.terrain.placeObject(x, y, object);
    }
}