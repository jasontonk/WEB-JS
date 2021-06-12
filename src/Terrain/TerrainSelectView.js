export default class TerrainSelectView{

    constructor(terrainController) {
        this.terrainSelector = document.getElementById('terrain-select');
        this.terrainController = terrainController;
        this.render();
    }

    render(){
        let terrains =this.terrainController.getTerrains();
        terrains.forEach((terrain) => {
            let button = document.createElement('button');
            button.innerText = terrain.name;
            button.className = 'btn rounded-0 border-bottom-0 btn-outline-dark btn-terrain';
            button.dataset.terrainId = terrain.id;
            button.addEventListener('click', (e) => this.switchTerrain(e))
            this.terrainSelector.append(button);
        });
    }

    switchTerrain(e){
        let id = parseInt(e.target.getAttribute('data-terrain-id'));
        this.terrainController.switchTerrain(id);
    }

}