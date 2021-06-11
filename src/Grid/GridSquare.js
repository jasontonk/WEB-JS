export default class GridSquare{

    constructor(i, j) {
        this.row = i;
        this.column = j;
        this.object = null;
    }

    placeObject(object){
        this.object = object;
    }




}