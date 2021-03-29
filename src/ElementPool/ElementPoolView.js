export default class ElementPoolView{

    constructor(elementPoolController, dragAndDropController, tileSize) {
        this.elementPoolController = elementPoolController;
        this.dragAndDropController = dragAndDropController;
        this.parent = document.querySelector('#elementPool');
        this.tileSize = tileSize;

    }

    render(objects) {
        while(this.parent.firstChild) {
            this.parent.removeChild(this.parent.firstChild);
        }

        // this.parent.style.margin = '5px';
        this.parent.style.border = '1px solid black';

        let titleText = document.createElement('h1');
        titleText.innerText = 'Plaats deze objecten in het grid';
        this.parent.append(titleText);

        objects.forEach(object => {
            let objectContainer = document.createElement('div');
            objectContainer.style.width = this.tileSize * object.width+'px';
            objectContainer.style.height = this.tileSize * object.height+'px';
            objectContainer.style.backgroundColor = "red";

            objectContainer.classList.add('--container');
            objectContainer.id = object.type;
            objectContainer.addEventListener('dblclick',  () => { this.elementPoolController.rotate(object) });
            //TODO add event for drag and drop
            objectContainer.innerText = ''+object.type;
            this.parent.append(objectContainer);
        })


    }
}