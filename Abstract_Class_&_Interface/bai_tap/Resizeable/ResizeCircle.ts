import {Circle} from "./Circle";
import {Resizeable} from "./Resizeable";

export class ResizeCircle extends Circle implements Resizeable {
    size: number;
    constructor(name: string, radius: number, size: number) {
        super(name, radius);
        this.size = size;
    }
    resize(percent: number): number {
        return this.size = this.size * percent / 100;
    }
}
