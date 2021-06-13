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
        this.currentPeople = 0;
    }

    increaseLineCount(){
        this.lineCount++;
        console.log(this.lineCount);
    }

    setCurrentPeople(currPeople){
        console.log("added " + currPeople + " people")
        this.currentPeople += currPeople;
    }


    decreaseLineCount(){
        this.lineCount--;
        console.log(this.lineCount);
    }

}