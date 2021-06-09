import {Grid} from "../Imports";

export default class Terrain{

    constructor(id, name, objects, grid) {
        this.id = id
        this.name = name;

        this.objects = objects;
        console.log("obejcneay:"+this.objects)
        this.grid = new Grid();
    }

}