import {Grid} from "../Imports";

export default class Terrain{

    constructor(terrainController, name, objects, grid) {
        this.terrainController = terrainController;
        this.name = name;
        this.objects = objects;
        this.grid = new Grid();
        objects.forEach((object) => {
            if (object.type === 'hoge boom' || object.type === 'schaduw boom' || object.type === 'brede boom'){
                let isPlaced = false;
                while (!isPlaced){
                    if(this.placeObject(Math.random()*15, Math.random()*15, object)){
                        isPlaced = true;
                    }
                }
            }
        });
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
        if(this.grid.setObject(x, y, object)){
            this.objects[objectIndex].setPosition(x , y);
            return true;
        }
        return false;
    }
}