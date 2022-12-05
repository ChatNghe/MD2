// import {uniqueId} from "../main";

export class Room {
    private _name: string;
    private _id: string;
    private _price: number;
    private _status: string;

    constructor(name: string, price: number, status: string) {
        this._name = name;
        this._id = uniqueId();
        this._price = price;
        this._status = status;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }
}
export function uniqueId():string {
    // always start with a letter (for DOM friendlyness)
    let idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
    do {
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        let ascicode = Math.floor((Math.random() * 42) + 48);
        if (ascicode < 58 || ascicode > 64) {
            // exclude all chars between : (58) and @ (64)
            idstr += String.fromCharCode(ascicode);
        }
    } while (idstr.length < 2);

    return (idstr);
}