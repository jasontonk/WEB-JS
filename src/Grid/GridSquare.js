export default class GridSquare{

    constructor(row , column, object = null) {
        this.row = row;
        this.column = column;
        if (object === null){
            console.log('Bad constructor gridsquare')
            this.object = null;
        }
        else{
            console.log('Good constructor gridsquare')
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