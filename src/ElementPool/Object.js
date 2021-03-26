export default class Object {

    constructor(type, width, height) {
        this.type = type;
        this.width = width;
        this.height = height;
    }

    rotate(){
        let tempHeight = this.height;
        this.height = this.width;
        this.width = tempHeight;
    }
}