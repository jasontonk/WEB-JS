import {ElementPoolView, Object, SetupForm} from "../Imports"

export default class ElementPoolController{

    constructor(terrainController) {
        this.terrainController = terrainController;
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
                        objects.push(object);
                    }
                    break;
                case 'amountOfWideTrees':
                    for(let i = 0; i < setupForm[key]; i++){
                        let object = new Object('brede boom', 2, 1);
                        objects.push(object);
                    }
                    break;
                case 'amountOfShadowTrees':
                    for(let i = 0; i < setupForm[key]; i++){
                        let object = new Object('schaduw boom', 3, 3);
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
        console.log(objects);
        this.objects = objects;
        return this.objects;
    }

    rotateObject(object){
        let index = this.objects.indexOf(object);
        this.objects[index].rotate();
        this.view.render(this.objects);
        this.terrainController.dragAndDropController.generateEvents();
    }

    renderView(objects){
        this.objects = objects;
        this.view.render(objects);
    }
}