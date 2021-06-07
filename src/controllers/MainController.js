import {
    SetupFormController,
    ElementPoolController,
    GridController,
    DragAndDropController,
} from "../Imports"

export default class MainController {

    constructor() {
        let elementPoolCtrl = new ElementPoolController();
        let setupFormCtrl = new SetupFormController(elementPoolCtrl);


        let grid = new GridController();
        let drag = new DragAndDropController(grid);
    }

}