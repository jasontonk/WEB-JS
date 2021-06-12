export default class ObjectSettingsView {

    constructor(terrainController) {
        this.terrainController = terrainController;
        this.objectSetting = document.getElementById('object-settings');
        this.hide()
    }
    render(object){
        this.objectSetting.hidden = false;
        this.objectSetting.innerHTML = '';
        switch (object.type){
            case 'tent':
                this.renderTent(object);
                break;
            case 'eetkraam':
                this.renderFoodstall(object);
                break;
            case 'prullenbak':
                this.renderTrashcan(object);
                break;
            default:
                this.hide()
                break;
        }
    }

    hide(){
        this.objectSetting.hidden = true;
    }

    renderTent(object){
        let title = document.createElement('h4')
        title.innerText = 'Opties voor de tent';
        this.objectSetting.append(title);

        let form = document.createElement('div');
        form.className = 'form-group m2';

        let visitorLabel = document.createElement('label')
        visitorLabel.innerText = 'Maximaal aantal bezoekers';
        form.append(visitorLabel);

        let visitorInput = document.createElement('input');
        visitorInput.className = 'form-control';
        visitorInput.type = 'number';
        visitorInput.min = 0;
        if (object.maxVisitors !== null){
            visitorInput.value = object.maxVisitors;
        }
        form.append(visitorInput);

        let openTimeLabel = document.createElement('label');
        openTimeLabel.innerText = 'Openingstijden';
        form.append(openTimeLabel);

        let openTimeSmall = document.createElement('small');
        openTimeSmall.innerText = 'Openingstijd';
        openTimeSmall.className = 'form-text';
        form.append(openTimeSmall);

        let openTimeInput = document.createElement('input');
        openTimeInput.type = 'time';
        openTimeInput.className = 'form-control';
        if (object.openTime !== null){
            openTimeInput.value = object.openTime;
        }
        form.append(openTimeInput);

        let closeTimeSmall = document.createElement('small');
        closeTimeSmall.innerText = 'Sluitingstijd';
        closeTimeSmall.className = 'form-text';
        form.append(closeTimeSmall);

        let closeTimeInput = document.createElement('input');
        closeTimeInput.type = 'time';
        closeTimeInput.className = 'form-control';
        if (object.clearTime !== null){
            closeTimeInput.value = object.clearTime;
        }
        form.append(closeTimeInput);
        this.objectSetting.append(form);

        let saveButton = document.createElement('button')
        saveButton.innerText = 'Opslaan';
        saveButton.className = 'btn btn-primary m-auto';
        saveButton.addEventListener("click", () => {this.terrainController.saveObjectSettings(
            object, visitorInput.value, openTimeInput.value, closeTimeInput.value
        )})
        this.objectSetting.append(saveButton);
    }

    renderFoodstall(object){
        let title = document.createElement('h4')
        title.innerText = 'Opties voor de eetkraam';
        this.objectSetting.append(title);

        let form = document.createElement('div');
        form.className = 'form-group m2';

        let visitorLabel = document.createElement('label')
        visitorLabel.innerText = 'Maximaal aantal bezoekers';
        form.append(visitorLabel);

        let visitorInput = document.createElement('input');
        visitorInput.className = 'form-control';
        visitorInput.type = 'number';
        visitorInput.min = 0;
        if (object.maxVisitors !== null){
            visitorInput.value = object.maxVisitors;
        }
        form.append(visitorInput);

        let stallTypeLabel = document.createElement('label');
        stallTypeLabel.innerText = 'Type eetkraam';
        form.append(stallTypeLabel);


        let stallTypeInput = document.createElement('select');
        stallTypeInput.className = 'form-control';
        let types = ['burgers', 'hotdog', 'turks', 'brood', 'snacks']
        for(let i = 0; i < types.length; i++){
            let option = document.createElement('option');
            option.value = types[i];
            option.textContent = types[i];
            stallTypeInput.append(option);
        }
        if (object.stallType !== null){
            stallTypeInput.value = object.stallType;
        }
        form.append(stallTypeInput);
        this.objectSetting.append(form);

        let saveButton = document.createElement('button')
        saveButton.innerText = 'Opslaan';
        saveButton.className = 'btn btn-primary m-auto';
        saveButton.addEventListener("click", () => {this.terrainController.saveObjectSettings(
            object, visitorInput.value, null, null, stallTypeInput.value
        )})
        this.objectSetting.append(saveButton);

    }

    renderTrashcan(object){
        let title = document.createElement('h4')
        title.innerText = 'Opties voor de prullenbak';
        this.objectSetting.append(title);

        let form = document.createElement('div');
        form.className = 'form-group m2';

        let capacityLabel = document.createElement('label')
        capacityLabel.innerText = 'Maximale capaciteit';
        form.append(capacityLabel);

        let capacityInput = document.createElement('input');
        capacityInput.className = 'form-control';
        capacityInput.type = 'number';
        capacityInput.min = 0;
        if (object.capacity !== null){
            capacityInput.value = object.capacity;
        }
        form.append(capacityInput);

        let clearTimeLabel = document.createElement('label');
        clearTimeLabel.innerText = 'Tijdstip van legen';
        form.append(clearTimeLabel);


        let clearTimeInput = document.createElement('input');
        clearTimeInput.type = 'time';
        clearTimeInput.className = 'form-control';
        if (object.clearTime !== null){
            clearTimeInput.value = object.clearTime;
        }
        form.append(clearTimeInput);
        this.objectSetting.append(form);

        let saveButton = document.createElement('button')
        saveButton.innerText = 'Opslaan';
        saveButton.className = 'btn btn-primary m-auto';
        saveButton.addEventListener("click", () => {this.terrainController.saveObjectSettings(
            object, null, null, clearTimeInput.value, null, capacityInput.value
        )})
        this.objectSetting.append(saveButton);
    }
}
