export default class ElementPoolView{

    constructor(controller, tileSize) {
        this.controller = controller;
        this.parent = document.querySelector('#elementPool');
        this.tileSize = tileSize;

    }

    render(objects) {
        while(this.parent.firstChild) {
            this.parent.removeChild(this.parent.firstChild);
        }

        this.parent.style.margin = '5px';
        this.parent.style.border = '1px solid black';

        let titleText = document.createElement('h1');
        titleText.innerText = 'Plaats deze objecten in het grid';
        this.parent.append(titleText);

        objects.forEach(object => {
            let objectContainer = document.createElement('div');
            objectContainer.style.width = this.tileSize * object.width+'px';
            objectContainer.style.height = this.tileSize * object.height+'px';
            objectContainer.style.border = '1px solid black';
            objectContainer.style.margin = '5px';
            objectContainer.addEventListener('click',  () => { this.controller.rotate(object) });
            objectContainer.innerText = ''+object.type;
            this.parent.append(objectContainer);
        })


    }
}