export default class Object {

    constructor(type, width, height) {
        this.type = type;
        this.width = width;
        this.height = height;
        switch (type){
            case 'eetkraam':
                this.width = 1;
                this.height = 2;
        }
    }

    rotate(){
        let tempHeight = this.height;
        this.height = this.width;
        this.width = tempHeight;
    }
}