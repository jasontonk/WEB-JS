import SetupFormView from "./SetupFormView";

export default class SetupFormController{

    constructor() {
        this.view = new SetupFormView(this);
        this.view.render();
    }
    clicked(button){
      console.log(button);
    }

    calculate(){
        let value =parseInt(document.getElementById("value").value,10);
        let amount= parseInt(document.getElementById("amount").value,10);
        if (!isNaN(value) && !isNaN(amount)) {
            document.getElementById("total").innerHTML = value*amount;
        }
    }
}