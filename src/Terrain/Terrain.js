import {Grid, Object} from "../Imports";

export default class Terrain{

    constructor(id, name, maxVisitors, objects, isLocked = false, grid = null) {
        this.isLocked = isLocked;
        this.id = id;
        this.name = name;
        this.maxVisitors = maxVisitors;
        if(grid === null) {
            this.objects = objects;
            this.grid = new Grid();
            objects.forEach((object) => {
                if (object.type === 'hoge boom' || object.type === 'schaduw boom' || object.type === 'brede boom') {
                    let isPlaced = false;
                    while (!isPlaced) {
                        if (this.placeObject(Math.random() * 15, Math.random() * 15, object)) {
                            isPlaced = true;
                        }
                    }
                }
            });
        }
        else{
            this.objects = [];
            objects.forEach((object) => {
                this.objects.push(new Object(object.type, object.width, object.height, object.xPos, object.yPos));
            });
            this.grid = new Grid(grid.width, grid.height, grid.gridArray, this.objects);
        }
    }

    lockTerrain(){
        this.isLocked = true;
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
        if(!this.isLocked) {
            x = parseInt(x);
            y = parseInt(y);

            let objectIndex = this.objects.indexOf(object);
            if (this.grid.setObject(x, y, object)) {

                this.objects[objectIndex].setPosition(x, y);
                return true;
            }
        }
        return false;
    }

    reset(){
        if(!this.isLocked) {
            this.objects.forEach((object) => {
                if (!object.type.includes('boom')) {
                    object.setPosition(-1, -1);
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

    getObjectOnGrid(col, row){
        return this.grid.gridArray[col][row].object;
    }
}