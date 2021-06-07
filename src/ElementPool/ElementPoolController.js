import {ElementPoolView, Object, SetupForm} from "../Imports"

export default class ElementPoolController{

    constructor() {
        this.view = null;
        this.objects = [];
    }

    createObjects(setupForm){
        let objects = [];
        for (let key in setupForm) {
            switch (key){
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
                        let object = new Object('hoge boom', 1, 1);
                        object.xPos = Math.round(Math.random()*15)
                        object.yPos = Math.round(Math.random()*15)
                        //TODO check if coordinate is already in use
                        objects.push(object);
                    }
                    break;
                case 'amountOfWideTrees':
                    for(let i = 0; i < setupForm[key]; i++){
                        let object = new Object('brede boom', 1, 2);
                        object.xPos = Math.round(Math.random()*15)
                        object.yPos = Math.round(Math.random()*15)
                        //TODO check if coordinate is already in use
                        objects.push(object);
                    }
                    break;
                case 'amountOfShadowTrees':
                    for(let i = 0; i < setupForm[key]; i++){
                        let object = new Object('schaduw boom', 3, 3);
                        object.xPos = Math.round(Math.random()*15)
                        object.yPos = Math.round(Math.random()*15)
                        //TODO check if coordinate is already in use
                        objects.push(object);
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
                default:
                    break;
            }
        }
        this.objects = objects;
        return this.objects;
    }

    rotate(object){
        object.rotate();
        this.view.render(this.objects);
    }

    getObjects(){
        return this.objects;
    }
}