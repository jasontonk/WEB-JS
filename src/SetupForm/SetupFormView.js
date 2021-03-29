import SetupFormController from "./SetupFormController";

export default class SetupFormView{

    constructor(controller) {
        this.controller = controller;
        this.parent = document.querySelector('#setupForm');
        this.label = document.getElementById('inputLabel');
        this.input = document.getElementById('inputField');
        this.small = document.getElementById('inputHelp');
        this.nextButton = document.getElementById('nextButton');
        this.nextButton.addEventListener('click', () => { this.controller.formNext( this.input.value );})
        this.setResetButton();
    }

    setResetButton(){
        let reset = document.getElementById('resetButton');
        reset.addEventListener('click',  () => {
            if(confirm('Weet je zeker dat je opnieuw wilt beginnen?')){
                this.input.value = null;
                this.controller.reset();
            }
        });
    }

    renderName(errorMessages = null){
        this.label.innerText = 'Naam van het terrein:'

        this.input.type = 'text';
        this.input.maxLength = '20';
        this.input.placeholder = 'Naam'

        if(errorMessages === null){
            this.small.className = '';
            this.small.innerText = 'Maximaal 20 characters';
        }
        else{
            this.small.className = 'text-danger';
            if(!errorMessages[0]){
                this.small.innerText = 'Vul een naam in.'
            }
            else if(!errorMessages[1]){
                this.small.innerText = 'Maximaal 20 characters'
            }
        }
    }
    renderAmountOfTents(errorMessages = null){
        this.label.innerText = 'Aantal tenten op het terrein:'

        this.input.type = 'number';
        this.input.min = '0';
        this.input.max = '25';
        this.input.placeholder = '0'

        console.log(errorMessages);
        if(errorMessages === null){
            this.small.className = '';
            this.small.innerText = 'Minimaal 0 & maximaal 25';
        }
        else{
            this.small.className = 'text-danger';
            if(!errorMessages[0]){
                this.small.innerText = 'Vul een nummer in';
            }
        }
    }
    renderAmountOfFoodStalls(errorMessages = null, hasTent){
        this.label.innerText = 'Aantal eetkraampjes op het terrein:'

        this.small.className = '';
        if(hasTent){
            this.input.max = '3';
            this.small.innerText = 'Minimaal 0 & maximaal 3';
        }
        else{
            this.input.max = '6';
            this.small.innerText = 'Minimaal 0 & maximaal 6';
        }

        console.log(errorMessages);
        if(errorMessages !== null){
            this.small.className = 'text-danger';
            if(!errorMessages[0]){
                this.small.innerText = 'Vul een nummer in';
            }
        }
    }
    renderAmountOfDrinkStalls(errorMessages = null, hasTent){
        this.label.innerText = 'Aantal drinkkraampjes op het terrein:'

        this.small.className = '';
        if(hasTent){
            this.input.max = '2';
            this.small.innerText = 'Minimaal 0 & maximaal 2';
        }
        else{
            this.input.max = '4';
            this.small.innerText = 'Minimaal 0 & maximaal 4';
        }

        console.log(errorMessages);
        if(errorMessages !== null){
            this.small.className = 'text-danger';
            if(!errorMessages[0]){
                this.small.innerText = 'Vul een nummer in';
            }
        }
    }
    renderTreesSelection(errorMessages = null){

    }
    renderAmountOfToilets(errorMessages = null){
        this.label.innerText = 'Aantal toilet op het terrein:'

        this.input.max = 5;

        console.log(errorMessages);
        if(errorMessages === null){
            this.small.className = '';
            this.small.innerText = 'Minimaal 0 & maximaal 5';
        }
        else{
            this.small.className = 'text-danger';
            if(!errorMessages[0]){
                this.small.innerText = 'Vul een nummer in';
            }
        }
    }
    renderAmountOfTrashCans(errorMessages = null, maxTrashCans){
        this.label.innerText = 'Aantal prullenbakken op het terrein:'

        this.input.max = maxTrashCans;

        console.log(errorMessages);
        if(errorMessages === null){
            this.small.className = '';
            this.small.innerText = 'Minimaal 0 & maximaal ' + maxTrashCans.toString();
        }
        else{
            this.small.className = 'text-danger';
            if(!errorMessages[0]){
                this.small.innerText = 'Vul een nummer in';
            }
        }
    }

}