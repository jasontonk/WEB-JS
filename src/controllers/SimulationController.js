import Line from "../models/Line";

export default class simulationController{

    // ticksPerSecond = 20;
    // maxPerField = 7;
    // cellSize = 46;
    //
    // tickId = 0;
    // lines = [];
    // regions = [];

    // enabled = false;
    constructor(gridView) {
        this.gridView = gridView;
        this.lines = [new Line(1)];
        this.maxPeople = 0;
        this.currentPeople = 0;
        this.isFull = false;
        this.renderLines();
    }

    increaseLineCount(){
        let line = new Line((this.lines.length + 1));
        this.lines.push(line);
        this.renderLines();
    }

    setMaxVisitors(maxVisitors){
        this.maxPeople =  maxVisitors;
    }

    setCurrentPeople(currPeople){
        console.log("added " + currPeople + " people")
        this.currentPeople += currPeople;
        if (this.currentPeople >= this.maxPeople){
            this.isFull = true;
        }
    }

    decreaseLineCount(){
        this.lines.pop();
        this.renderLines();
    }

    renderLines(){
        this.gridView.renderLines(this.lines);
    }


}