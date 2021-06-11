import {Grid} from "../Imports";

export default class Terrain{

    constructor(terrainController, name, objects, grid) {
        this.terrainController = terrainController;
        this.name = name;
        this.objects = objects;
        this.grid = new Grid();
    }

    getGridWidth(){
        return this.grid.width;
    }

    getGridHeight(){
        return this.grid.height;
    }

    getGridArray(){
        return this.grid.gridArray;
    }

    placeObject(x, y, object){
        let objectIndex = this.objects.indexOf(object);
        console.log(objectIndex);
        this.objects[objectIndex].setPosition(x , y);
        console.log(this.objects[objectIndex]);
        return true;
    }

}