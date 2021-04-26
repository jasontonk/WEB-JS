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
    }

}