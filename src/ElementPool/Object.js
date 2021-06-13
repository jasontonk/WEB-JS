export default class Object {

    constructor(type, width, height, xPos = null, yPos = null, maxVisitors = null,
                openTime = null, clearTime = null, stallType = null, capacity = null){

        this.type = type;
        this.width = width;
        this.height = height;

        this.maxVisitors = maxVisitors;
        this.openTime = openTime;
        this.clearTime = clearTime;
        this.stallType = stallType;
        this.capacity = capacity;

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

    setOptions(maxVisitors, openTime, clearTime, stallType, capacity ){
        this.maxVisitors = maxVisitors;
        this.openTime = openTime;
        this.clearTime = clearTime;
        this.stallType = stallType;
        this.capacity = capacity;
    }

}