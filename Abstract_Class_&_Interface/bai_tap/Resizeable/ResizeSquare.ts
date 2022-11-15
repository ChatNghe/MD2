import {Square} from "./Square";
import {Resizeable} from "./Resizeable";

export class ResizeSquare extends Square implements Resizeable {
    size: number;


    constructor(name: string, width: number, size: number) {
        super(name, width);
        this.size = size;
    }

    resize(percent: number): number {
        return this.size = this.size*percent/100;
    }
}

