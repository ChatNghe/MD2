import {Point2D} from "./Point2D";

export class Point3D extends Point2D{
    private _z: number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    getZ(): number {
        return this._z;
    }

    setZ(value: number) {
        this._z = value;
    }
    getXYZ(): object {
        return {x: this.getX(),y: this.getY(),z: this._z};
    }
    setXYZ(x:number,y:number,z:number):void{
        this.setX(x);
        this.setY(y);
        this._z = z;

    }
}
