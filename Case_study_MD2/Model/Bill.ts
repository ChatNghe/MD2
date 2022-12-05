import {uniqueId} from "../Model/Room";

export class Bill {
    private _roomName: string;
    private _tenantName: string;
    private _saleName: string;
    private _checkInDate: string;
    private _checkOutDate: string;
    private _totalPrice: number;
    private _id: string;


    constructor(roomName: string, tenantName: string, saleName: string, checkInDate: string, checkOutDate: string) {
        this._roomName = roomName;
        this._tenantName = tenantName;
        this._saleName = saleName;
        this._checkInDate = checkInDate;
        this._checkOutDate = checkOutDate;
        this._totalPrice = 0;
        this._id = uniqueId();
    }


    get roomName(): string {
        return this._roomName;
    }

    set roomName(value: string) {
        this._roomName = value;
    }

    get tenantName(): string {
        return this._tenantName;
    }

    set tenantName(value: string) {
        this._tenantName = value;
    }

    get saleName(): string {
        return this._saleName;
    }

    set saleName(value: string) {
        this._saleName = value;
    }

    get checkInDate(): string {
        return this._checkInDate;
    }

    set checkInDate(value: string) {
        this._checkInDate = value;
    }

    get checkOutDate(): string {
        return this._checkOutDate;
    }

    set checkOutDate(value: string) {
        this._checkOutDate = value;
    }

    get totalPrice(): number {
        return this._totalPrice;
    }

    set totalPrice(value: number) {
        this._totalPrice = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
}