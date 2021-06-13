import {SimulationController} from "../Imports"
import CanvasAttendee from "../Views/CanvasAttendee";
import CanvasSquare from "../Views/CanvasSquare";
import AttendeeController from "../controllers/AttendeeController";

export default class GridView {

    constructor(width, height, gridArray, gridController) {
        this.grid = document.getElementById('grid');
        this.gridControl = document.getElementById('grid-control');
        this.gridArray = gridArray;
        this.simcontroller = new SimulationController(this);
        this.gridController = gridController;
        this.canvasSquares = [];
        this.intervals = [];
        this.simulationIsInProgress = false;
        this.currentVisitors = 0;
        if (gridController.terrainController.terrain.isLocked) {
            this.renderSimulation();
        }
        this.renderSettings();
        this.renderGrid();
        this.generateEvents();
        this.renderGridControls();
    }

    generateEvents() {
        document.getElementById("inc-lines").addEventListener("click", () => {
            this.simcontroller.increaseLineCount();
            this.renderSettings();
        }, false);
        document.getElementById("dec-lines").addEventListener("click", () => {
            this.simcontroller.decreaseLineCount();
            this.renderSettings();
        }, false);
        document.getElementById("sim-start-button").addEventListener("click", (e) => {
            this.simulationIsInProgress = true;
            this.lineEntrance(this.simcontroller);
        }, false);
        document.getElementById("sim-stop-button").addEventListener("click", (e) => {
            this.simulationIsInProgress = false;
            this.lineEntrance(this.simcontroller);
        }, false);
    }

    renderLines(lines){
        let linesDiv = document.getElementById('linesDiv');
        linesDiv.innerHTML = '';
        let title = document.createElement('p');
        title.innerText = 'Festival rijen';
        linesDiv.append(title);
        lines.forEach((line) => {
           let lineInfo = document.createElement('p')
           lineInfo.innerText = 'rij ' + line.lineNumber.toString() + ': ' + line.queueLength.toString() + ' mensen in de rij';
           linesDiv.append(lineInfo);
        });
    }

    renderSimulation() {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext("2d");

        ctx.fillStyle = "#00FF00";
        let offsetY = 40;
        let offsetX = 40;
        for (let i = 0; i < this.gridArray.length; i++) {
            let ongie = this.gridArray[i];
            ctx.fillRect(i * offsetX, 0, 40, 40);
            this.canvasSquares.push(new CanvasSquare(i * offsetX, 0));
            for (let j = 0; j < ongie.length; j++) {
                let object = this.gridArray[i][j].object
                if (object != null) {
                    switch (object.type) {
                        case "toilet":
                            let toiletimg = new Image();
                            toiletimg.onload = function () {
                                ctx.drawImage(toiletimg, i * offsetX, j * offsetY, 40, 40);
                            };
                            this.canvasSquares.push(new CanvasSquare(i * offsetX, j * offsetY));
                            toiletimg.src = 'https://images.unsplash.com/photo-1589824783837-6169889fa20f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

                            break;
                        case "drankkraam":
                            let drinkimg = new Image();
                            drinkimg.onload = function () {
                                ctx.drawImage(drinkimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            this.canvasSquares.push(new CanvasSquare(i * offsetX, j * offsetY));
                            drinkimg.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg';
                            break;
                        case "eetkraam":
                            let foodimage = new Image();
                            foodimage.onload = function () {
                                ctx.drawImage(foodimage, i * offsetX, j * offsetY, 40, 40);
                            }
                            this.canvasSquares.push(new CanvasSquare(i * offsetX, j * offsetY, object.maxVisitors));
                            foodimage.src = 'https://prd-upload-images.newyorkpizza.nl/Products/Original/Hot_dog_pizza-6338.png';
                            break;
                        case "tent":
                            let tentimg = new Image();
                            tentimg.onload = function () {
                                ctx.drawImage(tentimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            this.canvasSquares.push(new CanvasSquare(i * offsetX, j * offsetY, Math.round(object.maxVisitors / 9)));
                            tentimg.src = 'https://www.obelink.nl/media/catalog/product/cache/91ee885c030d6b6bac91d1651998b59b/1/2/123895-123895-images_main-obelink_sahara_400_101-ecommerce.jpeg';
                            break;
                        case "prullenbak":
                            let trashimg = new Image();
                            trashimg.onload = function () {
                                ctx.drawImage(trashimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            this.canvasSquares.push(new CanvasSquare(i * offsetX, j * offsetY));
                            trashimg.src = 'https://i.pinimg.com/originals/f0/13/ac/f013ac551d3eb4bead0b2a0cf5e60dd1.png';
                            break;
                        case "hoge boom":
                            let highimg = new Image();
                            highimg.onload = function () {
                                ctx.drawImage(highimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            this.canvasSquares.push(new CanvasSquare(i * offsetX, j * offsetY));
                            highimg.src = 'https://www.onzenatuur.be/media/cache/750_width/uploads/media/5e78da18df700/shutterstock-671579608.jpg';
                            break;
                        case "schaduw boom":
                            let shadowimg = new Image();
                            shadowimg.onload = function () {
                                ctx.drawImage(shadowimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            this.canvasSquares.push(new CanvasSquare(i * offsetX, j * offsetY));
                            shadowimg.src = 'https://thumbs.dreamstime.com/z/shadow-tree-vector-101778300.jpg';
                            break;
                        case "brede boom":
                            let widewimg = new Image();
                            widewimg.onload = function () {
                                ctx.drawImage(widewimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            this.canvasSquares.push(new CanvasSquare(i * offsetX, j * offsetY));
                            widewimg.src = 'https://image.shutterstock.com/image-photo/oak-tree-isolated-on-white-260nw-79172758.jpg';
                            break;
                    }
                } else {
                    ctx.fillRect(i * offsetX, j * offsetY, 40, 40);
                    this.canvasSquares.push(new CanvasSquare(i * offsetX, j * offsetY))
                }


            }
        }
    }


    lineEntrance(simcontroller) {
        let maxVisitors = this.gridController.terrainController.getMaxVisitors();
        simcontroller.setMaxVisitors(maxVisitors);
        for (let i = 0; i < simcontroller.lines.length; i++) {
            window.setInterval(this.generateAudience, (Math.random() + 1) * 2000, simcontroller, this.canvasSquares, i)
        }
    }

    generateAudience(simcontroller, canvasSquares, lineId) {
        let sim = simcontroller;
        const context = document.getElementById('canvas').getContext('2d');
        let attcontroller = new AttendeeController();
        if (!simcontroller.isFull) {
            sim.setCurrentPeople(attcontroller.amount);
            new CanvasAttendee(context, canvasSquares, attcontroller);
        }
        else{
            simcontroller.lines[lineId].addToQueue(attcontroller.amount);
            simcontroller.renderLines()
        }
    }

    renderSettings() {
        document.getElementById("lineAmount").innerHTML = "";
        document.getElementById("lineAmount").innerHTML = this.simcontroller.lines.length;
    }


    setGridArray(gridArray) {
        this.gridArray = gridArray;
    }

    renderGrid() {
        this.grid.innerHTML = '';
        for (let i = 0; i < this.gridArray.length; i++) {
            let column = this.gridArray[i];
            let col = document.createElement("div");

            for (let j = 0; j < column.length; j++) {
                let div = document.createElement("div");

                div.dataset.col = i.toString();
                div.dataset.row = j.toString();
                div.classList.add("gridSquare");
                div.style.width = "40px";
                div.style.height = "40px";
                div.style.border = "1px dashed #FFF";
                div.style.borderWidth = "0.1px 0.1px 0.1px 0.1px";
                if (this.gridArray[i][j].object === null) {
                    div.style.backgroundColor = "#42f56c";
                } else {
                    div.innerText = this.gridArray[i][j].object.type;
                    div.style.backgroundColor = "#FF0000";
                }
                div.addEventListener("click", (e) => this.gridController.selectObject(e))
                col.append(div);
            }
            this.grid.append(col);
        }
    }

    renderGridControls() {
        this.gridControl.innerHTML = '';
        this.gridControl.className = 'w-100';
        let resetButton = document.createElement("button");
        resetButton.innerText = 'Resetten';
        resetButton.className = 'btn btn-outline-danger m-2 float-left';
        resetButton.addEventListener('click', () => this.gridController.resetGrid());
        this.gridControl.append(resetButton);

        let lockButton = document.createElement("button");
        lockButton.innerText = 'Vastzetten';
        lockButton.className = 'btn btn-primary m-2 float-right';
        lockButton.addEventListener('click', () => this.gridController.lockGrid());
        this.gridControl.append(lockButton);
    }

}