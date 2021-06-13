import AttendeeController from "../controllers/AttendeeController";

export default class CanvasAttendee{

    constructor(context, squares , attendeeController) {
        this.squares = squares;
        this.renderAttendeeData(attendeeController);
        this.setVisitorPosition(context);
    }

    async renderAttendeeData(attendeeController) {
        const group = await attendeeController.getAttendees();
        document.getElementById("attendees").innerHTML = "";
        let people = [];
        group.persons.forEach(e => people.push(e.name))
        document.getElementById("attendees").innerHTML = people;
    }

    renderAttendeeDot(context, x, y){
        context.beginPath();
        context.arc(x, y, 2, 1, 2 * Math.PI);
        context.fillStyle = "#0855A2";
        context.fill();
    }

    setVisitorPosition(context){
        let region = this.randomRegion();
        let randomX = Math.random() * ((region.x + 40) - region.x) + region.x;
        let randomY = Math.random() * ((region.y + 40) - region.y) + region.y;
        this.renderAttendeeDot(context, randomX, randomY);
    }

    randomRegion(){
        return this.squares[Math.floor(Math.random() * this.squares.length)];
    }
}