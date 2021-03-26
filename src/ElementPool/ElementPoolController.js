import ElementPoolView from "./ElementPoolView";
import Object from "./Object";

export default class ElementPoolController{

    constructor(dragAndDropController) {
        this.view = new ElementPoolView(this, dragAndDropController, 50);
        this.objects = [new Object('eetkraam',1,1), new Object('drankkraam',1,2), new Object('toilet',1,3), new Object('tent',3,3)]
        this.view.render(this.objects);
    }

    rotate(object){
        object.rotate();
        this.view.render(this.objects);

    }
}