import {ElementPoolController} from "../Imports"

export default class DragAndDropController {
    constructor(objects) {

        this.objects = objects;
        console.log("vincent is een oongie. ;' " + this.objects)
        this.dragSrcEl = null;
        this.selectedObject = null;
    }


    handleDragStart(e, list) {
        console.log("this is me" + e);
        e.target.opacity = '0.4';

        // get info of dragged item
        this.dragSrcEl = e.target;
        console.log("Vincent is smart man:  " + this);
        console.log(e.target.id);

        this.selectedObject = this;
        this.selectedObject = this.selectedObject.find(object =>
            object.type === e.target.id && object.xPos < 0 && object.yPos < 0
        );


        console.log('1 ' + this.selectedObject);

        // if (this.drag)
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
        console.log(this);
    }


    handleDragEnd() {
        this.style.opacity = '1';
    }

    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        return false;
    }

    handleDrop(e) {
        // console.log(e)
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }
        console.log('1' + this.selectedObject);
        console.log('2 ' + this.dragSrcEl);
        if (this.dragSrcEl !== this) {
            console.log(e.target.getAttribute('data-row') + ", " + e.target.getAttribute('data-col'));



            // this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }


    generateEvents(list){
        let items = document.querySelectorAll('.--container');
        console.log(items);
        items.forEach( (item) => {
            item.addEventListener('dragstart', this.handleDragStart.bind(list), false);
            item.addEventListener('dragend', this.handleDragEnd, false);
        });

        let grid = document.querySelectorAll('.gridSquare');
        grid.forEach( (item) => {
            item.addEventListener('dragover', this.handleDragOver, false);
            item.addEventListener('drop', this.handleDrop, false);
        });
    }
}