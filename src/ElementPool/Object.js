export default class Object {

    constructor(type, width, height) {
        this.type = type;
        this.width = width;
        this.height = height;

        this.xPos = -1;
        this.yPos = -1;
    }

    rotate(){
        let tempHeight = this.height;
        this.height = this.width;
        this.width = tempHeight;
    }

    setPosition(x, y){
        this.xPos = x;
        this.yPos = y;
    }

}