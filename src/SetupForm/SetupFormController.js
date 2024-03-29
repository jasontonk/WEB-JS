import {SetupFormView, SetupForm, Object, MainController} from "../Imports";
import TerrainController from "../Terrain/TerrainController";

export default class SetupFormController{

    constructor(elementsPoolController, MainController) {
        this.elementsPoolController = elementsPoolController;
        this.view = new SetupFormView(this);
        this.maincontroller = MainController;
        this.setupForm = new SetupForm();
        this.view.renderName();
        this.maincontroller = MainController;
        this.terrainController = null;
    }
    reset(){
        this.setupForm = new SetupForm();
        this.view.renderName();
    }

    formNext(value, value2,  value3){
        if(this.setupForm.name === null){
            this.setName(value, value2);
        }
        else if(this.setupForm.amountOfTents === -1){
            this.setAmountOfTents(value);
        }
        else if(this.setupForm.amountOfFoodStalls === -1){
            this.setAmountOfFoodStalls(value);
        }
        else if(this.setupForm.amountOfDrinkStalls === -1){
            this.setAmountOfDrinkStalls(value);
        }
        else if(this.setupForm.amountOfHeightTrees === -1 &&
            this.setupForm.amountOfWideTrees === -1 &&
            this.setupForm.amountOfShadowTrees === -1){
            this.setAmountOfTrees(value, value2, value3);
        }
        else if(this.setupForm.amountOfToilets === -1){
            this.setAmountOfToilets(value);
        }
        else if(this.setupForm.amountOfTrashCans === -1){
            this.setAmountOfTrashCans(value);
            let audio = new Audio(`assets/43336082_applause-02.mp3`);
            audio.play();
        }
    }

    setName(value1, value2){
        let isFilled = true;
        let isCorrectLength = true;
        let hasMinVisitors = true;

        if(value1 === null || value1 === '' || value2 === null || value2 === ''){
            isFilled = false;
        }
        else if(value1.length > 20){
            isCorrectLength = false;
        }
        else if(value2 <= 0){
            hasMinVisitors = false;
        }

        if(isFilled && isCorrectLength && hasMinVisitors) {
            this.setupForm.name = value1;
            this.setupForm.maxVisitors = value2;
            this.view.renderAmountOfTents();
        }
        else{
            this.view.renderName([isFilled, isCorrectLength, hasMinVisitors]);
        }
    }

    setAmountOfTents(value){
        let isFilled = true;
        let isAllowedNumber = true;

        if(value === null || value === ''){
            isFilled = false;
        }
        else if(value < 0 || value > 25){
            isAllowedNumber = false;
        }
        if(isFilled && isAllowedNumber){
            this.setupForm.amountOfTents = parseInt(value);
            this.view.renderAmountOfFoodStalls( null, (this.setupForm.amountOfTents !== 0));
        }
        else{
            this.view.renderName([isFilled, isAllowedNumber]);
        }
    }

    setAmountOfFoodStalls(value) {
        let isFilled = true;
        let isAllowedNumber = true;

        if(value === null || value === ''){
            isFilled = false;
        }
        else if(this.setupForm.amountOfTents > 0 && (value < 0 || value > 3)){
            isAllowedNumber = false;
        }
        else if(this.setupForm.amountOfTents === 0 && (value < 0 || value > 6)){
            isAllowedNumber = false;
        }
        if(isFilled && isAllowedNumber){
            this.setupForm.amountOfFoodStalls = parseInt(value);
            this.view.renderAmountOfDrinkStalls( null, (this.setupForm.amountOfTents !== 0));
        }
        else{
            this.view.renderAmountOfFoodStalls( [isFilled, isAllowedNumber],
                (this.setupForm.amountOfTents !== 0));
        }
    }

    setAmountOfDrinkStalls(value) {
        let isFilled = true;
        let isAllowedNumber = true;

        if(value === null || value === ''){
            isFilled = false;
        }
        else if(this.setupForm.amountOfTents > 0 && (value < 0 || value > 2)){
            isAllowedNumber = false;
        }
        else if(this.setupForm.amountOfTents === 0 && (value < 0 || value > 4)){
            isAllowedNumber = false;
        }
        if(isFilled && isAllowedNumber){
            this.setupForm.amountOfDrinkStalls = parseInt(value);
            this.view.renderAmountOfTrees( null);
        }
        else{
            this.view.renderAmountOfDrinkStalls( [isFilled, isAllowedNumber],
                (this.setupForm.amountOfTents !== 0));
        }
    }

    setAmountOfTrees(value, value2, value3) {
        this.view.renderAmountOfToilets( null);
        let allFilled = true;
        let allAllowedNumber = true;

        if(value === null || value === ''|| value2 === null || value2 === '' || value3 === null || value3 === ''){
            allFilled = false;
        }
        else if(value < 0 || value2 < 0 || value3 < 0){
            allAllowedNumber = false;
        }
        if(allFilled && allAllowedNumber){
            this.setupForm.amountOfHeightTrees = parseInt(value);
            this.setupForm.amountOfWideTrees = parseInt(value2);
            this.setupForm.amountOfShadowTrees = parseInt(value3);
            this.view.renderAmountOfToilets( null);
        }
        else{
            this.view.renderAmountOfTrees( [allFilled, allAllowedNumber]);
        }
    }

    setAmountOfToilets(value) {
        let isFilled = true;
        let isAllowedNumber = true;

        if(value === null || value === ''){
            isFilled = false;
        }
        else if(value < 0 || value > 5){
            isAllowedNumber = false;
        }
        if(isFilled && isAllowedNumber){
            this.setupForm.amountOfToilets = parseInt(value);
            this.maxTrashCans = this.calculateMaxAmountOfTrashcans();
            this.view.renderAmountOfTrashCans( null, this.maxTrashCans);
        }
        else{
            this.view.renderAmountOfToilets([isFilled, isAllowedNumber]);
        }
    }

    setAmountOfTrashCans(value) {
        let isFilled = true;
        let isAllowedNumber = true;

        if(value === null || value === ''){
            isFilled = false;
        }
        else if(value < 0 || value > this.maxTrashCans){
            isAllowedNumber = false;
        }
        if(isFilled && isAllowedNumber){
            this.setupForm.amountOfTrashCans = parseInt(value);
            if (this.terrainController === null) {
                this.terrainController = new TerrainController(this.setupForm)
            }
            else{
                this.terrainController.addTerrain(this.setupForm);
            }
            this.reset();
        }
        else{
            this.view.renderAmountOfTrashCans([isFilled, isAllowedNumber], this.maxTrashCans);
        }
    }

    calculateMaxAmountOfTrashcans(){
        let availablesquares = 225;
        for (let key in this.setupForm) {
            switch (key){
                case 'amountOfTents':
                    availablesquares -= 3*3*this.setupForm[key];
                    break;
                case 'amountOfFoodStalls':
                    availablesquares -= 1*1*this.setupForm[key];
                    break;
                case 'amountOfDrinkStalls':
                    availablesquares -= 1*2*this.setupForm[key];
                    break;
                case 'amountOfHeightTrees':
                    availablesquares -= 1*1*this.setupForm[key];
                    break;
                case 'amountOfWideTrees':
                    availablesquares -= 2*1*this.setupForm[key];
                    break;
                case 'amountOfShadowTrees':
                    availablesquares -= 3*3*this.setupForm[key];
                    break;
                case 'amountOfToilets':
                    availablesquares -= 1*3*this.setupForm[key];
                    break;
                default:
                    break;
            }
        }
        return Math.round(availablesquares * 0.05);
    }

}