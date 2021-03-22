import DragAndDrop from "./DragAndDrop";
import DragAndDropView from "./DragAndDropView";

export default class DragAndDropController {

    constructor() {
        this.grid = new DragAndDrop();
        new DragAndDropView(this.grid.width, this.grid.height);
    }

}