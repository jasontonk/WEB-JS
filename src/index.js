import SetupFormController from "./SetupForm/SetupFormController";
import ElementPoolController from "./ElementPool/ElementPoolController";
import GridController from "./Grid/GridController";
import DragAndDropController from "./DragAndDrop/DragAndDropController";




let setupFormCtrl = new SetupFormController();
let elementPoolCtrl = new ElementPoolController();
let setupFormCtrl = new SetupFormController(elementPoolCtrl);

let grid = new GridController();
let drag = new DragAndDropController(grid);