export class Shape{
    private _name: string;
    private _color: string;


    constructor(name: string, color: string) {
        this._name = name;
        this._color = color;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getColor(): string {
        return this._color;
    }

    setColor(value: string) {
        this._color = value;
    }
}