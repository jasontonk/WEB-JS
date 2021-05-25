import {ElementPoolView, Object, SetupForm} from "../Imports"

export default class ElementPoolController{

    constructor(dragAndDropController, gridController) {
        this.view = new ElementPoolView(this, dragAndDropController, 50);
        this.objects = [];
    }

    createObjects(setupForm){
        console.log('Test');
        let objects = [];
        console.log(setupForm);
        console.log('Test 2 ')
        for (let key in setupForm) {
            console.log(`${key}: ${setupForm[key]}`);
            switch (key){
                case 'name':
                    //TODO set name
                    break;
                case 'amountOfTents':
                    for(let i = 0; i < setupForm[key]; i++){
                        objects.push(new Object('tent', 3, 3));
                    }
                    break;
                case 'amountOfFoodStalls':
                    for(let i = 0; i < setupForm[key]; i++){
                        objects.push(new Object('eetkraam', 1, 1));
                    }
                    break;
                case 'amountOfDrinkStalls':
                    for(let i = 0; i < setupForm[key]; i++){
                        objects.push(new Object('drankkraam', 1, 2));
                    }
                    break;
                case 'amountOfHeightTrees':
                    for(let i = 0; i < setupForm[key]; i++){
                        //TODO randomly place trees on grid
                    }
                    break;
                case 'amountOfWideTrees':
                    for(let i = 0; i < setupForm[key]; i++){
                        //TODO randomly place trees on grid
                    }
                    break;
                case 'amountOfShadowTrees':
                    for(let i = 0; i < setupForm[key]; i++){
                        //TODO randomly place trees on grid
                    }
                    break;
                case 'amountOfToilets':
                    for(let i = 0; i < setupForm[key]; i++){
                        objects.push(new Object('toilet', 1, 3));
                    }
                    break;
                case 'amountOfTrashCans':
                    for(let i = 0; i < setupForm[key]; i++){
                        objects.push(new Object('prullenbak', 1, 1));
                    }
                    break;
            }
        }
        this.objects = objects;
        this.view.render(objects);
    }

    rotate(object){
        object.rotate();
        this.view.render(this.objects);
    }

    getObjects(){
        return this.objects;
    }
}