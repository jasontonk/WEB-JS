import SetupFormController from "./SetupFormController";

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

        let form = document.createElement('form');
        let valueInput = document.createElement('input')
        valueInput.type = 'number';
        valueInput.id = 'value';
        valueInput.value = '0';
        valueInput.addEventListener('change',  () => {this.controller.calculate()});
        form.append(valueInput);
        let amountInput = document.createElement('input')
        amountInput.type = 'number';
        amountInput.id = 'amount';
        amountInput.value = '0';
        amountInput.addEventListener('change', () => {this.controller.calculate()});
        form.append(amountInput);
        this.parent.append(form);
        let result = document.createElement('span');
        result.id = 'total';
        this.parent.append(result);
    }
}