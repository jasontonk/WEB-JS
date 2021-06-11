import {
    SetupFormController,
    ElementPoolController,
    GridController,
    DragAndDropController,
    SwitchView
} from "../Imports"

export default class MainController {

    constructor() {
        let elementPoolCtrl = new ElementPoolController();

        let setupFormCtrl = new SetupFormController(elementPoolCtrl, this);
        let grid = new GridController();
        let drag = new DragAndDropController(grid);
        this.weather = null;
        this.app = document.getElementById("app");
        this.switchView = new SwitchView(this.app);
        this.checkNav();
        this.loadDefaultLocation();
        this.renderWeatherOptions();
    }

    SwitchToView(e) {
        switch (e.target.id){
            case "sim":
                this.switchView.renderSimulation();
                break;
            case "home":
                this.switchView.renderHomePage();
                break;
        }

    }

    checkNav() {
        document.getElementById("sim").addEventListener('click', evt => this.SwitchToView(evt), false);
        document.getElementById("home").addEventListener('click', evt => this.SwitchToView(evt), false);
    }

    loadDefaultLocation() {
        let locationWeather = '1850144';
        this.getWeather(locationWeather)
    }

    getWeather(location){
        const API_KEY = 'e98e09391c539738e406cbea8d253955';
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${location}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(json => this.weatherChanged(json.weather[0]))
            .catch(reason => console.log(reason));
    }

    weatherChanged(weather) {
        this.weatherIcon = document.getElementById("weather--image");
        this.weatherIcon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    }

    locationChanged(e){
        this.getWeather(e);
    }

    renderWeatherOptions(){
        const selectWeather = document.getElementById("weather--select");

        selectWeather.addEventListener('change', (e) => {
            this.locationChanged(e.target.options[e.target.selectedIndex].value);
        });

        const locations = {
            '1850144': 'Tokyo',
            '5392171': 'Zeist',
        }

        for (const cityId in locations) {
            const locationOption = document.createElement('option');
            locationOption.value = cityId;
            locationOption.innerText = locations[cityId];

            selectWeather.append(locationOption);
        }
    }

}