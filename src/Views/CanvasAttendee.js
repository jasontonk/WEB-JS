import AttendeeController from "../controllers/AttendeeController";

export default class CanvasAttendee{

    constructor(context, squares) {
        this.attcontroller = new AttendeeController();
        this.squares = squares;
        this.renderAttendeeData();
        this.setVisitorPosition(context);
    }

    async renderAttendeeData() {
        const group = await this.attcontroller.getAttendees();
        document.getElementById("attendees").innerHTML = "";
        let people = [];
        group.persons.forEach(e => people.push(e.name))
        document.getElementById("attendees").innerHTML = people;
        // console.log("attendees added: " + people.length)
    }

    renderAttendeeDot(context, x, y){
        // console.log(context)
        context.beginPath();
        context.arc(x, y, 2, 1, 2 * Math.PI);
        context.fillStyle = "#0855A2";
        context.fill();
    }

    setVisitorPosition(context){
        // console.log(this.squares + "asdfasdfasdf")
        let region = this.randomRegion();
        let randomX = Math.random() * ((region.x + 40) - region.x) + region.x;
        let randomY = Math.random() * ((region.y + 40) - region.y) + region.y;
        this.renderAttendeeDot(context, randomX, randomY);
    }

    randomRegion(){
        console.log(this.squares.length + " please dont be undefined")
        return this.squares[Math.floor(Math.random() * this.squares.length)];
    }
}