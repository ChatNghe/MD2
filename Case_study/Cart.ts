import {Documents} from "./Documents";
import {uniqueid2} from "./Documents";

class Cart{
    private id:string;
    private time :Date;
    private sum:number;
    cardDetailList: Documents[] =[]


    constructor() {
        this.id = uniqueid2();
        this.time = new Date();
        this.sum = 0;
    }

    add(t:Documents){
        this.cardDetailList.push(t);
    }
    totalPrice(){
        for (let i=0;i<this.cardDetailList.length;i++){
            this.sum += this.cardDetailList[i].price;
        }
    }

    display(){

    }
}
