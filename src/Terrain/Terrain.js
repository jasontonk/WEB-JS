import {Grid} from "../Imports";

export default class Terrain{

    constructor(id, name, objects) {
        this.id = id
        this.name = name;
        this.objects = objects;
        this.grid = new Grid();
    }

}