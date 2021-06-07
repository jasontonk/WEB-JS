import {
    SetupFormController,
    ElementPoolController,
    GridController,
    DragAndDropController,
    SwitchView
} from "../Imports"

export default class MainController {

    constructor() {
        let elementPoolCtrl = new ElementPoolController();
        let setupFormCtrl = new SetupFormController(elementPoolCtrl);


        let grid = new GridController();
        let drag = new DragAndDropController(grid);

        this.app = document.getElementById("app");
        this.switchView = new SwitchView(this.app);
        this.checkNav();
    }

    SwitchToView(e) {
        switch (e.target.id){
            case "sim":
                this.switchView.renderSimulation();
                break;
            case "home":
                this.switchView.renderHomePage();
                break;
        }

    }

    checkNav() {
        document.getElementById("sim").addEventListener('click', evt => this.SwitchToView(evt), false);
        document.getElementById("home").addEventListener('click', evt => this.SwitchToView(evt), false);
    }


}