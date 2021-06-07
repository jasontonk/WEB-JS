import {
    SetupFormController,
    ElementPoolController,
    GridController,
    DragAndDropController,
} from "../Imports"

export default class MainController {

    constructor() {
        let setupFormCtrl = new SetupFormController();
        let elementPoolCtrl = new ElementPoolController();

        let grid = new GridController();
        let drag = new DragAndDropController(grid);

        this.app = document.getElementById("app");
        this.checkNav();
    }

    SwitchToView(e) {
        switch (e.target.id){
            case "sim":
                this.app.innerHTML = '';
                this.renderSim();
                break;
            case "home":
                this.app.innerHTML = '';
                this.renderHome();
                break;
        }

    }

    checkNav() {
        document.getElementById("sim").addEventListener('click', evt => this.SwitchToView(evt), false);
        document.getElementById("home").addEventListener('click', evt => this.SwitchToView(evt), false);
    }

    renderHome() {
        this.app.innerHTML = "this is the homepage";
    }

    renderSim() {
        this.app.innerHTML = "this is the Simulation";
    }
}