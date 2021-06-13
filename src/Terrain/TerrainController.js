import {DragAndDropController, ElementPoolController, ElementPoolView, GridController, GridView} from "../Imports";
import Terrain from "./Terrain";
import TerrainSelectView from "./TerrainSelectView";
import ObjectSettingsView from "./ObjectSettingsView";

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

        this.terrainView = new TerrainSelectView(this);
        this.objectSettingsView = new ObjectSettingsView(this);
    }

    addTerrain(setupform){
        let nextId = this.localStorage.length;
        let objects = this.elementsPoolController.createObjects(setupform);
        let terrain = new Terrain(nextId, setupform.name, setupform.maxVisitors,  objects, this.gridController.grid);

        this.localStorage.setItem(nextId.toString(),JSON.stringify(terrain));

        if(this.terrain === null) {
            this.terrain = terrain;
        }
        else {
            this.switchTerrain(nextId);
        }
    }

    switchTerrain(terrainIndex){

        this.localStorage.setItem(this.terrain.id.toString(), JSON.stringify(this.terrain));
        let newTerrain = JSON.parse(this.localStorage.getItem(terrainIndex.toString()));
        this.terrain = new Terrain(newTerrain.id, newTerrain.name, newTerrain.maxVisitors, newTerrain.objects, newTerrain.isLocked, newTerrain.grid);
        this.dragAndDropController.objects = this.terrain.objects;
        this.resetViews();
    }

    getTerrains(){
        let terrains = []
        for (let i = 0; i < this.localStorage.length; i++){
            terrains.push(JSON.parse(this.localStorage.getItem(i.toString())));
        }
        return terrains;
    }

    getMaxVisitors(){
        return this.terrain.maxVisitors;
    }

    placeObject(x, y, object){
        return this.terrain.placeObject(x, y, object);
    }

    lockCurrentTerrain(){
        this.terrain.lockTerrain();
    }

    reset() {
        this.terrain.reset();
        this.resetViews();
    }

    resetViews(){
        this.gridController.renderView(this.terrain.isLocked);
        this.elementsPoolController.renderView(this.terrain.objects);
        this.dragAndDropController.generateEvents();
        this.terrainView.render()
    }

    selectObject(col, row) {
        let object = this.terrain.getObjectOnGrid(col, row)
        if (object !== null) {
            this.objectSettingsView.render(object);
        }
        else{
            this.objectSettingsView.hide();
        }
    }

    saveObjectSettings(object, maxVisitors = null, openTime = null, clearTime = null,
                       stallType = null, capacity = null){
        let objectIndex = this.terrain.objects.indexOf(object);
        this.terrain.objects[objectIndex].setOptions(maxVisitors, openTime, clearTime, stallType, capacity);
    }

}