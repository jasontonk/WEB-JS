import {SimulationController} from "../Imports"
export default class GridView {

    constructor(width, height, gridArray) {
        this.grid = document.getElementById('grid');
        this.gridArray = gridArray;
        this.simcontroller = new SimulationController();
        this.renderSimulation();
        this.renderSettings();
        this.renderGrid();
        this.generateEvents();
    }

    generateEvents() {
        document.getElementById("inc-lines").addEventListener("click",() => {
            this.simcontroller.increaseLineCount();
            this.renderSettings();
        }, false);
        document.getElementById("dec-lines").addEventListener("click",() => {
            this.simcontroller.decreaseLineCount();
            this.renderSettings();
        }, false);
        let button = document.getElementById("sim-start-button")
        button.addEventListener("click", (e) => this.lineEntrance(this.simcontroller), false);
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
            for (let j = 0; j < ongie.length; j++) {
                let object = this.gridArray[i][j].object
                if (object != null) {
                    switch (object.type) {
                        case "toilet":
                            let toiletimg = new Image();
                            toiletimg.onload = function () {
                                ctx.drawImage(toiletimg, i * offsetX, j * offsetY, 40, 40);
                            };
                            toiletimg.src = 'https://images.unsplash.com/photo-1589824783837-6169889fa20f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

                            break;
                        case "drankkraam":
                            let drinkimg = new Image();
                            drinkimg.onload = function () {
                                ctx.drawImage(drinkimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            drinkimg.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg';
                            break;
                        case "eetkraam":
                            let foodimage = new Image();
                            foodimage.onload = function () {
                                ctx.drawImage(foodimage, i * offsetX, j * offsetY, 40, 40);
                            }
                            foodimage.src = 'https://prd-upload-images.newyorkpizza.nl/Products/Original/Hot_dog_pizza-6338.png';
                            break;
                        case "tent":
                            let tentimg = new Image();
                            tentimg.onload = function () {
                                ctx.drawImage(tentimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            tentimg.src = 'https://www.obelink.nl/media/catalog/product/cache/91ee885c030d6b6bac91d1651998b59b/1/2/123895-123895-images_main-obelink_sahara_400_101-ecommerce.jpeg';
                            break;
                        case "prullenbak":
                            let trashimg = new Image();
                            trashimg.onload = function () {
                                ctx.drawImage(trashimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            trashimg.src = 'https://i.pinimg.com/originals/f0/13/ac/f013ac551d3eb4bead0b2a0cf5e60dd1.png';
                            break;
                        case "hoge boom":
                            let highimg = new Image();
                            highimg.onload = function () {
                                ctx.drawImage(highimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            highimg.src = 'https://www.onzenatuur.be/media/cache/750_width/uploads/media/5e78da18df700/shutterstock-671579608.jpg';
                            break;
                        case "schaduw boom":
                            let shadowimg = new Image();
                            shadowimg.onload = function () {
                                ctx.drawImage(shadowimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            shadowimg.src = 'https://thumbs.dreamstime.com/z/shadow-tree-vector-101778300.jpg';
                            break;
                        case "brede boom":
                            let widewimg = new Image();
                            widewimg.onload = function () {
                                ctx.drawImage(widewimg, i * offsetX, j * offsetY, 40, 40);
                            }
                            widewimg.src = 'https://image.shutterstock.com/image-photo/oak-tree-isolated-on-white-260nw-79172758.jpg';
                            break;
                    }
                } else {
                    ctx.fillRect(i * offsetX, j * offsetY, 40, 40);
                }


            }
        }
    }


    lineEntrance(simcontroller) {
        let attendees = 500;
        console.log(simcontroller + "ongie");
        window.setInterval(this.generateAudience, (Math.random() + 1) * 2000, simcontroller)
    }

    generateAudience(simcontroller) {
        console.log("generating");
        // dot count
        // let amountOfPeople = audience;
        // center point
        const center = {x: 300, y: 300};
        // max distance from the center
        const radius = 300;
        // centripetal force, the larger it gets the more concentrated the dots are
        const centripetal = 2.5;

        const context = document.getElementById('canvas').getContext('2d');

        let group = function randomIntFromInterval(min, max) { // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        let r = Math.random();
        console.log("hoa " + simcontroller);
        // for 1 person
        let createBlueDots = function () {
            // Generate adience based on amount of lines
            for (let i = 0; i <=  simcontroller.lineCount; i++) {
                // Get random value to see if its one person or a group.
                if (r > 0.5) {
                    // console.log("one person");
                    for (let i = 0; i <= 1; i++) {
                        context.beginPath();
                        const dist = (Math.random() ** centripetal) * radius;
                        const angle = Math.random() * Math.PI * 2;
                        let rand_x = dist * Math.cos(angle) + center.x;
                        let rand_y = dist * Math.sin(angle) + center.y;
                        context.arc(rand_x, rand_y, 2, 1, 2 * Math.PI);
                        context.fillStyle = "#0855A2";
                        context.fill();
                        context.closePath();
                    }
                } else {
                    // console.log("group");
                    for (let i = 0; i <= group(2, 4); i++) {
                        context.beginPath();
                        const dist = (Math.random() ** centripetal) * radius;
                        const angle = Math.random() * Math.PI * 2;
                        let rand_x = dist * Math.cos(angle) + center.x;
                        let rand_y = dist * Math.sin(angle) + center.y;
                        context.arc(rand_x, rand_y, 2, 1, 2 * Math.PI);
                        context.fillStyle = "#0855A2";
                        context.fill();
                        context.closePath();
                    }
                }
            }
        }
        createBlueDots(this.simcontroller);

    }

    renderSettings(){
        document.getElementById("lineAmount").innerHTML = "";
        document.getElementById("lineAmount").innerHTML = this.simcontroller.lineCount;
    }


    setGridArray(gridArray) {
        this.gridArray = gridArray;
    }

    renderGrid() {
        this.grid.innerHTML = '';
        for (let i = 0; i < this.gridArray.length; i++) {

            // Columns are i. Rows are j.
            let ongie = this.gridArray[i];
            let col = document.createElement("div");

            for (let j = 0; j < ongie.length; j++) {
                let divi = document.createElement("div");
                //
                //divi.innerHTML = i + ", " + j;
                divi.dataset.col = i.toString();
                divi.dataset.row = j.toString();
                divi.classList.add("gridSquare");
                divi.style.width = "40px";
                divi.style.height = "40px";
                divi.style.border = "1px dashed #FFF";
                divi.style.borderWidth = "0.1px 0.1px 0.1px 0.1px";
                if (this.gridArray[i][j].object === null) {
                    divi.style.backgroundColor = "#42f56c";
                } else {
                    divi.innerText = this.gridArray[i][j].object.type;
                    divi.style.backgroundColor = "#FF0000";
                }
                col.append(divi);
            }

            //col.style.display = "inline-block";
            this.grid.append(col);
        }
    }
}