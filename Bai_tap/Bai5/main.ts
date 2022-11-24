class Persons {
    private _name !: string;
    private _age !: number;
    private _id !: string;


    constructor(name: string, age: number, id: string) {
        this._name = name;
        this._age = age;
        this._id = id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
}

enum price {
    A = 500,
    B = 300,
    C = 100
}

class Hotel {
    private _day !: number;
    private _type!: string;
    listPerson: Persons [];


    constructor(day: number, type: string,) {
        this._day = day;
        this._type = type;
    }

    get day(): number {
        return this._day;
    }

    set day(value: number) {
        this._day = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }


    add(persons: Persons) {
        this.listPerson.push(persons);
    }

    findById(id: string) {
        for (let i = 0; i < this.listPerson.length; i++) {
            if (this.listPerson[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    priceCalculator(id: string) {
        switch (this._type) {
            case 'A':
                return this._day * price.A

            case 'B':
                return this._day * price.B

            case 'C':
                return this._day * price.C

        }

    }

}