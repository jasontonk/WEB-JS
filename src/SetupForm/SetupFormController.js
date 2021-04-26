import {SetupFormView} from "../Imports";

export default class SetupFormController{

    constructor() {
        this.view = new SetupFormView(this);
        this.view.render();
    }
    clicked(button){
      console.log(button);
    }

}