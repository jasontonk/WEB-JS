import {Grid} from "../Imports";

export default class Terrain{

    constructor(name, objects) {
        this.name = name;
        this.objects = objects;
        this.grid = new Grid();
    }

}