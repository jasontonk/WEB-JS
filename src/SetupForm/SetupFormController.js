import {SetupFormView} from "../Imports";

export default class SetupFormController{

    constructor(elementsPoolController) {
        this.elementsPoolController = elementsPoolController;
        this.view = new SetupFormView(this);
        this.setupForm = new SetupForm();
        this.view.renderName();
    }
    reset(){
        this.setupForm = new SetupForm();
        this.view.renderName();
    }

    formNext(value){
        if(this.setupForm.name === null){
            this.setName(value);
        }
        else if(this.setupForm.amountOfTents === 0){
            this.setAmountOfTents(value);
        }
        else if(this.setupForm.amountOfFoodStalls === 0){
            this.setAmountOfFoodStalls(value);
        }
        else if(this.setupForm.amountOfDrinkStalls === 0){
            this.setAmountOfDrinkStalls(value);
        }
        else if(this.setupForm.amountOfHeightTrees === 0 &&
            this.setupForm.amountOfWideTrees === 0 &&
            this.setupForm.amountOfShadowTrees){
            this.setAmountOfTrees(value);
        }
        else if(this.setupForm.amountOfToilets === 0){
            this.setAmountOfToilets(value);
        }
        else if(this.setupForm.amountOfTrashCans === 0){
            this.setAmountOfTrashCans(value);
        }
    }

    setName(value){
        let isFilled = true;
        let isCorrectLength = true;

        if(value === null || value === ''){
            isFilled = false;
        }
        else if(value.length > 20){
            isCorrectLength = false;
        }

        if(isFilled && isCorrectLength) {
            console.log(value);
            this.setupForm.name = value;
            this.view.renderAmountOfTents();
        }
        else{
            this.view.renderName([isFilled, isCorrectLength]);
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
            console.log(value);
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
            console.log(value);
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
            console.log(value);
            this.setupForm.amountOfDrinkStalls = parseInt(value);
            this.view.renderAmountOfToilets( null);
        }
        else{
            this.view.renderAmountOfDrinkStalls( [isFilled, isAllowedNumber],
                (this.setupForm.amountOfTents !== 0));
        }
    }

    setAmountOfTrees(value) {

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
            console.log(value);
            this.setupForm.amountOfToilets = parseInt(value);
            this.maxTrashCans = 6;//TODO calculate amount of trashcans
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
            console.log(value);
            this.setupForm.amountOfTrashCans = parseInt(value);
            //TODO calculate amount of trashcans
            this.elementsPoolController.createObjects(this.setupForm);
        }
        else{
            this.view.renderAmountOfTrashCans([isFilled, isAllowedNumber], this.maxTrashCans);
        }
    }
}