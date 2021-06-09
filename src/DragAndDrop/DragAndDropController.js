import {ElementPoolController} from "../Imports"

export default class DragAndDropController {

    constructor(objects) {

        this.objects = objects;

        this.generateEvents();
        this.dragSrcEl = null;
    }


    handleDragStart(e) {
        this.style.opacity = '0.4';

        // get info of dragged item
        this.dragSrcEl = e.target;

        console.log('1 ' + this.dragSrcEl);

        // if (this.drag)
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
        console.log(this)
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
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }
        console.log('2 ' + this.dragSrcEl)
        if (this.dragSrcEl !== this) {
            console.log(e.target.getAttribute('data-row') + ", " + e.target.getAttribute('data-col'));



            // this.innerHTML = e.dataTransfer.getData('text/html');
        }
        return false;
    }


    generateEvents(){
        let items = document.querySelectorAll('.--container');
        console.log(items);
        items.forEach( (item) => {
            item.addEventListener('dragstart', this.handleDragStart, false);
            item.addEventListener('dragend', this.handleDragEnd, false);
        });

        let grid = document.querySelectorAll('.gridSquare');
        grid.forEach( (item) => {
            item.addEventListener('dragover', this.handleDragOver, false);
            item.addEventListener('drop', this.handleDrop, false);
        });
    }
}