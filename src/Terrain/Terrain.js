import {Grid} from "../Imports";

export default class Terrain{

    constructor(id, name, objects, grid) {
        this.id = id;
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
    reset(){
        this.objects.forEach((object) => {
            if(!object.type.includes('boom')){
                object.setPosition(-1,-1);
            }
        });
        let gridArray = this.getGridArray();
        gridArray.forEach((row) => {
            row.forEach((gridSquare) => {
                if (gridSquare.object != null && !gridSquare.object.type.includes('boom')) {
                    gridSquare.object = null;
                }
            });
        });
    }
}