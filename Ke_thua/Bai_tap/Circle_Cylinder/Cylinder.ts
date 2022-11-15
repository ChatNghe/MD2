import {Circle} from "./Circle";

export class Cylinder extends Circle {
    private _height!: number;


    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    getHeight(): number {
        return this._height;
    }

    setHeight(value: number) {
        this._height = value;
    }

    getVolume() {
        return super.getArea()*this._height;
    }
    toString(): string {
        return `A Circle with radius  ${this.getRadius()}, color ${this.getColor()} and volume ${this.getVolume()}` ;
    }
}