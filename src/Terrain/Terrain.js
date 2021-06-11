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
        x = parseInt(x);
        y = parseInt(y);
        let objectIndex = this.objects.indexOf(object);
        this.objects[objectIndex].setPosition(x , y);
        this.grid.setObject(object);

        return true;
    }

}