export default class Object {

    constructor(type, width, height, xPos = null, yPos = null){
        console.log('Good constructor object')
        this.type = type;
        this.width = width;
        this.height = height;

        if (xPos === null || yPos === null){
            this.xPos = -1;
            this.yPos = -1;
        }
        else {
            this.xPos = xPos;
            this.yPos = yPos;
        }
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