export default class GridSquare{

    constructor(row , column, object = null) {
        this.row = row;
        this.column = column;
        if (object === null){
            this.object = null;
        }
        else{
            this.placeObject(object);
        }

    }

    isEmpty(){
        return this.object === null;
    }

    placeObject(object){
        this.object = object;
    }




}