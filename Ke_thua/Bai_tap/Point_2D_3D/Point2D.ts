export class Point2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    getX(): number {
        return this._x;
    }

    setX(value: number): void {
        this._x = value;
    }

    getY(): number {
        return this._y;
    }

    setY(value: number): void {
        this._y = value;
    }

    getXY(): object {
        return this;
    }

    setXY(x:number,y:number):void{
        this._x = x;
        this._y = y;
    }
}
