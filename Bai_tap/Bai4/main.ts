class Persons {
    private name !: string;
    private age !: number;
    private job !: string;
    private id !: string;

    constructor(name: string, age: number, job: string, id: string) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getAge(): number {
        return this.age;
    }

    setAge(value: number) {
        this.age = value;
    }

    getJob(): string {
        return this.job;
    }

    setJob(value: string) {
        this.job = value;
    }

    getId(): string {
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

}

class Family {
    private numberOfPerson !: number;
    private houseNumber !: number;
    private listPerson:Persons [];

    constructor(numberOfPerson: number, houseNumber: number, listPerson:Persons []) {
        this.numberOfPerson = numberOfPerson;
        this.houseNumber = houseNumber;
        this.listPerson = listPerson;
    }

    getNumberOfPerson(): number {
        return this.numberOfPerson;
    }

    setNumberOfPerson(value: number) {
        this.numberOfPerson = value;
    }

    getHouseNumber(): number {
        return this.houseNumber;
    }

    setHouseNumber(value: number) {
        this.houseNumber = value;
    }


    getListPerson(): Persons[] {
        return this.listPerson;
    }

    setListPerson(value: Persons[]) {
        this.listPerson = value;
    }
}

class Town {
    listFamily: Family[] = [];

    addFamily1(t: Family):void{
        this.listFamily.push(t)
    }

    display() {
        for(let i of this.listFamily){
            console.log(i);
        }
        // return this.1listFamily;
    }
}

let readlineSync = require('readline-sync');
let town = new Town();


function addPerson(numberOfPerson:number,houseNumber:number) {
    let menu = `---------Menu chính-----------
    1.Thêm người 
    0.Thoát chương trình`
    let t:Persons[] = []
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                console.log('---------Hiển thị form thêm mới-----------');
                let name = readlineSync.question('Enter name :  ');
                let age = +readlineSync.question('Enter age :  ');
                let job = readlineSync.question('Enter job :  ');
                let id = readlineSync.question('Enter id :  ');
                let person = new Persons(name, age, job, id);
                t.push(person)
                break;

        }
    } while (choice !== 0);
    let family = new Family(numberOfPerson, houseNumber, t);
    town.addFamily1(family)
}

function addFamily() {
    console.log('---------Hiển thị form thêm mới-----------');
    let numberOfPerson = readlineSync.question('Enter numberOfPerson :  ');
    let houseNumber = readlineSync.question('Enter houseNumber :  ');
    addPerson(numberOfPerson,houseNumber)
}

function display() {
    console.log('------Hiển thị hộ gia đình----------')
    town.display()
}

function main() {
    let menu = `---------Menu chính-----------
    1.Thêm hộ gia đình
    2.Hiển thị
    0.Thoát chương trình`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addFamily();
                break;
            case 2:
                display();
                break;

        }
    } while (choice !== 0);
}

main();
