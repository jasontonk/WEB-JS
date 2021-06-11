export default class ElementPoolView{

    constructor(elementPoolController, dragAndDropController, tileSize, objects) {
        this.elementPoolController = elementPoolController;
        this.dragAndDropController = dragAndDropController;
        this.parent = document.querySelector('#elementPool');
        this.tileSize = tileSize;
        this.render(objects)
    }

    render(objects) {
        while(this.parent.firstChild) {
            this.parent.removeChild(this.parent.firstChild);
        }

        let titleText = document.createElement('h4');
        titleText.innerText = 'Sleep een object om het te plaatsen';
        this.parent.append(titleText);

        objects.filter(function (object){
            return object.xPos < 0 && object.yPos < 0;
            }
        ).forEach(object => {
            let objectContainer = document.createElement('div');
            objectContainer.style.width = this.tileSize * object.width+'px';
            objectContainer.style.height = this.tileSize * object.height+'px';
            objectContainer.style.backgroundColor = "red";

            objectContainer.classList.add('--container');
            objectContainer.id = object.type;
            objectContainer.addEventListener('dblclick',  () => { this.elementPoolController.rotate(object) });
            objectContainer.setAttribute('draggable', true);
            objectContainer.innerText = ''+object.type;
            this.parent.append(objectContainer);
        })


    }
}