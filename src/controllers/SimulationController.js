export default class simulationController{

    // ticksPerSecond = 20;
    // maxPerField = 7;
    // cellSize = 46;
    //
    // tickId = 0;
    // lines = [];
    // regions = [];

    // enabled = false;
    constructor() {
        this.lineCount = 1;
    }

    increaseLineCount(){
        this.lineCount++;
        console.log(this.lineCount);
    }


    decreaseLineCount(){
        this.lineCount--;
        console.log(this.lineCount);
    }

}