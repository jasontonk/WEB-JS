export default class SetupFormView{

    constructor(controller) {
        this.controller = controller;
        this.parent = document.querySelector('#setupForm');
    }

    render(){
        this.parent.style.height = '200px';
        this.parent.style.margin = '5px';
        this.parent.style.border = '1px solid black';

        let titleText = document.createElement('h1');
        titleText.innerText = 'Vul onderstaand formulier in om objecten te genereren';
        this.parent.append(titleText);
    }
}