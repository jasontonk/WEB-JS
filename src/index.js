import SetupFormController from "./SetupForm/SetupFormController";
import ElementPoolController from "./ElementPool/ElementPoolController";
import GridController from "./Grid/GridController";


let index = new GridController();


let elementPoolCtrl = new ElementPoolController();
let setupFormCtrl = new SetupFormController(elementPoolCtrl);

