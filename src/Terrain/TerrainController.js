import {DragAndDropController, ElementPoolController, ElementPoolView, GridController, GridView} from "../Imports";
import Terrain from "./Terrain";

export default class TerrainController{

    constructor(setupform) {
        this.gridController = new GridController(this);
        this.elementsPoolController = new ElementPoolController(this);

        this.localStorage = window.localStorage;
        this.terrain = null;

        this.addTerrain(setupform);

        this.dragAndDropController = new DragAndDropController(this ,this.terrain.objects);
        this.elementsPoolController.view = new ElementPoolView(this.elementsPoolController, this.dragAndDropController,40, this.terrain.objects);
        this.gridController.view = new GridView(this.terrain.getGridWidth(),this.terrain.getGridHeight(), this.terrain.getGridArray(), this.gridController)
        this.dragAndDropController.generateEvents(this.terrain.objects);
    }

    addTerrain(setupform){
        let nextId = this.localStorage.length;
        let objects = this.elementsPoolController.createObjects(setupform);
        let terrain = new Terrain(nextId, setupform.name, objects, this.gridController.grid);

        this.localStorage.setItem(nextId.toString(),JSON.stringify(terrain));

        if(this.terrain === null) {
            this.terrain = terrain;
        }
        else {
            this.switchTerrain(nextId);
        }
        console.log(JSON.parse(this.localStorage.getItem(nextId.toString())));
    }

    switchTerrain(terrainIndex){

        this.localStorage.setItem(this.terrain.id.toString(), JSON.stringify(this.terrain));
        let newTerrain = this.localStorage.getItem(terrainIndex.toString())
        this.terrain = newTerrain
    }

    placeObject(x, y, object){
        return this.terrain.placeObject(x, y, object);
    }
    reset(){
        this.terrain.reset();
        this.gridController.renderView();
        this.elementsPoolController.renderView(this.terrain.objects);
        this.dragAndDropController.generateEvents();
    }
}