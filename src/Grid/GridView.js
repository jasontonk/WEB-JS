export default class GridView {

    constructor(width, height, gridArray, gridController) {
        this.grid = document.getElementById('grid');
        this.gridControl = document.getElementById('grid-control');
        this.gridArray = gridArray;
        this.gridController = gridController;
        this.renderSimulation();
        this.renderGrid();
        this.renderGridControls();
    }


    renderSimulation() {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext("2d");
        // ctx.clearRect(0, 0, 600, 600);

        ctx.fillStyle = "#00FF00";
        let offsetY = 40;
        let offsetX = 40;
        for (let i = 0; i < this.gridArray.length; i++) {
            let ongie = this.gridArray[i];
            ctx.fillRect(i * offsetX, 0, 40, 40);
                for (let j = 0; j < ongie.length; j++) {
                    let object = this.gridArray[i][j].object
                    if (object != null){
                        switch (object.type){
                            case "toilet":
                                let toiletimg = new Image();
                                toiletimg.src = 'https://images.unsplash.com/photo-1589824783837-6169889fa20f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                                ctx.drawImage(toiletimg, i * offsetX, j * offsetY, 40, 40);
                                break;
                            case "drankkraam":
                                let drinkimg = new Image();
                                drinkimg.src = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg';
                                ctx.drawImage(drinkimg, i * offsetX, j * offsetY, 40, 40);
                                break;
                            case "eetkraam":
                                let foodimage = new Image();
                                foodimage.src = 'https://prd-upload-images.newyorkpizza.nl/Products/Original/Hot_dog_pizza-6338.png';
                                ctx.drawImage(foodimage, i * offsetX, j * offsetY, 40, 40);
                                break;
                            case "tent":
                                let tentimg = new Image();
                                tentimg.src = 'https://www.obelink.nl/media/catalog/product/cache/91ee885c030d6b6bac91d1651998b59b/1/2/123895-123895-images_main-obelink_sahara_400_101-ecommerce.jpeg';
                                ctx.drawImage(tentimg, i * offsetX, j * offsetY, 40, 40);
                                break;
                            case "prullenbak":
                                let trashimg = new Image();
                                trashimg.src = 'https://i.pinimg.com/originals/f0/13/ac/f013ac551d3eb4bead0b2a0cf5e60dd1.png';
                                ctx.drawImage(trashimg, i * offsetX, j * offsetY, 40, 40);
                                break;
                            case "hoge boom":
                                let highimg = new Image();
                                highimg.src = 'https://www.onzenatuur.be/media/cache/750_width/uploads/media/5e78da18df700/shutterstock-671579608.jpg';
                                ctx.drawImage(highimg, i * offsetX, j * offsetY, 40, 40);
                                break;
                            case "shaduw boom":
                                let shadowimg = new Image();
                                shadowimg.src = 'https://thumbs.dreamstime.com/z/shadow-tree-vector-101778300.jpg';
                                ctx.drawImage(shadowimg, i * offsetX, j * offsetY, 40, 40);
                                break;
                            case "brede boom":
                                let widewimg = new Image();
                                widewimg.src = 'https://image.shutterstock.com/image-photo/oak-tree-isolated-on-white-260nw-79172758.jpg';
                                ctx.drawImage(widewimg, i * offsetX, j * offsetY, 40, 40);
                                break;
                        }
                    }else {
                        ctx.fillRect(i * offsetX, j * offsetY, 40, 40);
                    }


                }
        }
       this.generateAudience();
    }

    generateAudience(){
        // let canvas = document.getElementById('canvas');
        // let ctx = canvas.getContext("2d");
        // let ticks = 200;
        // let timer = Math.random() * 3;
        // ctx.fillStyle = "#FF0000"
        // for (let i = 0; i < Math.random() * 4; i++){
        //     ctx.fillRect(Math.floor(Math.random() * 600),Math.floor(Math.random() * 600),3,3); // fill in the pixel at (10,10)
        // }

        // dot count
        const dots = 500;
// center point
        const center = { x: 300, y: 300 };
// max distance from the center
        const radius = 300;
// centripetal force, the larger it gets the more concentrated the dots are
        const centripetal = 2.5;

        const context = document.getElementById('canvas').getContext('2d');

        let createBlueDots = function () {
            for (let i = 0; i <= dots; i++) {
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

        createBlueDots();
    }

    setGridArray(gridArray){
        this.gridArray = gridArray;
    }

    renderGrid(){
        this.grid.innerHTML = '';
        for (let i = 0; i < this.gridArray.length; i++) {

            // Columns are i. Rows are j.
            let column = this.gridArray[i];
            let col = document.createElement("div");

            for (let j = 0; j < column.length; j++) {
                let div = document.createElement("div");
                //
                //divi.innerHTML = i + ", " + j;
                div.dataset.col = i.toString();
                div.dataset.row = j.toString();
                div.classList.add("gridSquare");
                div.style.width = "40px";
                div.style.height = "40px";
                div.style.border = "1px dashed #FFF";
                div.style.borderWidth = "0.1px 0.1px 0.1px 0.1px";
                if (this.gridArray[i][j].object === null) {
                    div.style.backgroundColor = "#42f56c";
                }
                else {
                    div.innerText = this.gridArray[i][j].object.type;
                    div.style.backgroundColor = "#FF0000";
                }
                div.addEventListener("click", (e) => this.gridController.selectObject(e))
                col.append(div);
            }

            //col.style.display = "inline-block";
            this.grid.append(col);
        }
    }
    renderGridControls(){
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