export default class Line{
    constructor(lineNumber) {
        this.lineNumber = lineNumber;
        this.queueLength = 0;
    }

    addToQueue(amount){
        this.queueLength += amount;
    }
}