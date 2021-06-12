import SetupFormController from "./SetupFormController";

export default class SetupFormView{

    constructor(controller) {
        this.controller = controller;
        this.parent = document.querySelector('#setupForm');
        this.label = document.getElementById('inputLabel');
        this.input = document.getElementById('inputField');
        this.secondInput = document.getElementById('extraInputField1');
        this.thirdInput = document.getElementById('extraInputField2');
        this.small = document.getElementById('inputHelp');
        this.nextButton = document.getElementById('nextButton');
        this.nextButton.addEventListener('click', () => { this.controller.formNext(
            this.input.value, this.secondInput.value, this.thirdInput.value );})
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
        this.input.value = '';
        this.nextButton.innerText = 'Volgende';
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
        this.input.value = '';
        this.label.innerText = 'Aantal tenten op het terrein:'

        this.input.type = 'number';
        this.input.min = '0';
        this.input.max = '25';
        this.input.placeholder = '0'

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
        this.input.value = '';
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

        if(errorMessages !== null){
            this.small.className = 'text-danger';
            if(!errorMessages[0]){
                this.small.innerText = 'Vul een nummer in';
            }
        }
    }
    renderAmountOfDrinkStalls(errorMessages = null, hasTent){
        this.input.value = '';
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

        if(errorMessages !== null){
            this.small.className = 'text-danger';
            if(!errorMessages[0]){
                this.small.innerText = 'Vul een nummer in';
            }
        }
    }
    renderAmountOfTrees(errorMessages = null){
        this.input.value = '';
        this.secondInput.value = '';
        this.thirdInput.value = '';
        this.label.innerText = 'Aantal Hoge bomen op het terrein';

        this.small.className = '';
        this.input.max = '125';
        this.small.innerText = 'Een hoge boom vult een 1x1 vakje & kan niet verplaatst worden';

        this.secondLabel = document.getElementById('extraInputLabel1');
        this.secondLabel.hidden = false;
        this.secondLabel.innerText = 'Aantal Brede bomen op het terrein';
        this.secondLabel.className = 'inputLabel';
        this.secondInput = document.getElementById('extraInputField1');
        this.secondInput.hidden = false;
        this.secondInput.className = 'form-control';
        this.secondSmall = document.getElementById('extraInputHelp1');
        this.secondSmall.innerText = 'Een brede boom vult een 1x2 vakje & kan niet verplaatst worden';
        this.secondSmall.hidden = false;
        // this.parent.append(this.secondLabel, this.secondInput, this.secondSmall);

        this.thirdLabel = document.getElementById('extraInputLabel2');
        this.thirdLabel.hidden = false;
        this.thirdLabel.innerText = 'Aantal Schaduw bomen op het terrein';
        this.thirdLabel.className = 'inputLabel';
        this.thirdInput = document.getElementById('extraInputField2');
        this.thirdInput.hidden = false;
        this.thirdInput.className = 'form-control';
        this.thirdSmall = document.getElementById('extraInputHelp2');
        this.thirdSmall.innerText = 'Een schaduw boom vult een 3x3 vakje & kan niet verplaatst worden';
        this.thirdSmall.hidden = false;
        // this.parent.append(this.thirdLabel, this.thirdInput, this.thirdSmall);

        if(errorMessages !== null){
            this.small.className = 'text-danger';
            if(!errorMessages[0]){
                this.small.innerText = 'Vul een nummer in';
            }
        }

    }
    renderAmountOfToilets(errorMessages = null){
        this.input.value = '';
        this.secondLabel.hidden = true;
        this.secondInput.hidden = true;
        this.secondSmall.hidden = true;

        this.thirdLabel.hidden = true;
        this.thirdInput.hidden = true;
        this.thirdSmall.hidden = true;

        this.label.innerText = 'Aantal toiletten op het terrein:'


        this.input.max = 5;

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
        this.input.value = '';
        this.nextButton.innerText = 'Terrein aanmaken';
        this.label.innerText = 'Aantal prullenbakken op het terrein:'

        this.input.max = maxTrashCans;

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