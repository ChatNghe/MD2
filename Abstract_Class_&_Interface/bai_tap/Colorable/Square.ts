import {Shape} from "./Shape";

export class Square extends Shape {
    side: number


    constructor(name: string, side: number) {
        super(name);
        this.side = side;
    }
}