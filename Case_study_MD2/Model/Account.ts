export class Account {
    private _accountName: string;
    private _password: string;
    private _userName: string;
    private _email: string;
    private _age: number;
    private _phoneNumber: string;
    private _address: string;


    constructor(accountName: string, password: string, userName: string, email: string, age: number, phoneNumber: string, address: string) {
        this._accountName = accountName;
        this._password = password;
        this._userName = userName;
        this._email = email;
        this._age = age;
        this._phoneNumber = phoneNumber;
        this._address = address;
    }


    get accountName(): string {
        return this._accountName;
    }

    set accountName(value: string) {
        this._accountName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}