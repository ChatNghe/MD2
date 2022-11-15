import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable";

export class ResizeRectangle extends Rectangle implements Resizeable {
    size: number;

    constructor(width: number, height: number, name: string, size: number) {
        super(width, height, name);
        this.size = size;
    }

    resize(percent: number): number {
        return this.size = this.size*percent/100;
    }
}

