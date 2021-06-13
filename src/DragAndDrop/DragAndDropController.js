import {ElementPoolController} from "../Imports"

export default class DragAndDropController {
    constructor(terrainController, objects) {
        this.terrainController = terrainController;
        this.objects = objects;
        this.dragSrcEl = null;
        this.selectedObject = null;
    }


    handleDragStart(e) {
        e.target.opacity = '0.4';

        // get info of dragged item
        this.dragSrcEl = e.target;
        this.selectedObject = this.objects.find(object =>
            object.type === e.target.id && object.xPos < 0 && object.yPos < 0
        );

        // if (this.drag)
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
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
        let y = e.target.getAttribute('data-row');
        let x = e.target.getAttribute('data-col');

        if (this.dragSrcEl !== null && this.selectedObject !== null) {
            if(this.terrainController.placeObject(x, y, this.selectedObject)){
                this.terrainController.elementsPoolController.renderView(this.objects);
                this.terrainController.gridController.renderView();
            }
        }
        this.resetSelection();
        this.generateEvents();
        return false;
    }


    resetSelection(){
        this.selectedObject = null;
        this.dragSrcEl = null;
    }


    generateEvents(){
        let items = document.querySelectorAll('.--container');
        items.forEach( (item) => {
            item.addEventListener('dragstart', (e) => this.handleDragStart(e), false);
        });

        let grid = document.querySelectorAll('.gridSquare');
        grid.forEach( (item) => {
            item.addEventListener('dragover', (e) => this.handleDragOver(e), false);
            item.addEventListener('drop', (e) => this.handleDrop(e), false);
        });
    }
}