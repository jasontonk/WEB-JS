export default class GridView {

    constructor(width, height, objectArray) {
        this.grid = document.getElementById('grid');
        this.objectArray = objectArray;
        this.renderGrid();
        this.selectbutton();
    }

    renderGrid(){
        for (let i = 0; i < this.objectArray.length; i++) {

            // Columns are i. Rows are j.
            let ongie = this.objectArray[i];
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
                divi.style.backgroundColor = "#42f56c"
                col.append(divi);
            }

            //col.style.display = "inline-block";
            this.grid.append(col);
        }
    }

    renderSimulation(){
        for (let i = 0; i < this.objectArray.length; i++) {

            // Columns are i. Rows are j.
            let ongie = this.objectArray[i];
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
                divi.style.backgroundColor = "#42f56c"
                col.append(divi);
            }

            //col.style.display = "inline-block";
            this.grid.append(col);
        }
    }

    selectbutton() {
        let buttons = document.querySelectorAll('.btn-terrain');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if(button.classList.contains('btn--active')){
                    button.classList.remove('btn--active');
                }else {
                    button.classList.add('btn--active');
                }
            });
        })
    }
}