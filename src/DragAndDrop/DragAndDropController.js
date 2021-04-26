import DragAndDrop from './DragAndDrop';
import Grid from "../Grid/Grid";
import ElementPoolController from "../ElementPool/ElementPoolController";

export default class DragAndDropController {

    constructor(grid) {
        this.gridArray = grid.gridArray;
        this.generateEvents();
    }


    handleDragStart(e) {
        this.style.opacity = '0.4';

        // get info of dragged item
        this.dragSrcEl = this;

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
        if (this.dragSrcEl !== this) {
            console.log('ongielie')
            this.dropElement = e.target;
            console.log(this.dropElement.getAttribute('data-row') + ", " + this.dropElement.getAttribute('data-col'));
            this.innerHTML = e.dataTransfer.getData('text/html');
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