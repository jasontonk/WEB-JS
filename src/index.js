import SetupFormController from "./SetupForm/SetupFormController";
import ElementPoolController from "./ElementPool/ElementPoolController";
import GridController from "./Grid/GridController";
import DragAndDropController from "./DragAndDrop/DragAndDropController";



let grid = new GridController();
let drag = new DragAndDropController(grid);

let elementPoolCtrl = new ElementPoolController(grid);
let setupFormCtrl = new SetupFormController(elementPoolCtrl);