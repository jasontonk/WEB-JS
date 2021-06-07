export default class SwitchView {

    constructor(app) {
        this.app = app;
        this.sim = document.getElementById("simulationView");
    }

    renderSimulation(){
        this.app.style.visibility = "hidden";
        this.app.style.display = "none";

        this.sim.hidden = false;
        this.sim.style.display = "block"
    }

    renderHomePage(){
        this.sim.hidden = true;
        this.sim.style.display = "none";

        this.app.style.visibility = "visible";
        this.app.style.display = "block";
    }

}