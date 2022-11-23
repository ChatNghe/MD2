class Persons {
    private name !: string;
    private age !: number;
    private id !: string;


    constructor(name: string, age: number, id: string) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}
enum price {
    A = 500,
    B = 300,
    C = 100
}
class Hotel{
    private day !: number;
    private type!: string;
    private listPerson:Persons [];


    constructor(day: number, type: string, listPerson: Persons[]) {
        this.day = day;
        this.type = type;
        this.listPerson = listPerson;
    }
}