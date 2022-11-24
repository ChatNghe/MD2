class Person {
    private _id!: number;
    private _fullName!: string;
    private _age!: number;
    private _job !: string;

    constructor(id: number, fullName: string, age: number, job: string) {
        this._id = id;
        this._fullName = fullName;
        this._age = age;
        this._job = job;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get job(): string {
        return this._job;
    }

    set job(value: string) {
        this._job = value;
    }
}
class Family { // <=> PersonManager
    private _id!: number;
    private _member!: number;
    listPerson: Person[] = [];

    constructor(id: number,member :number) {
        this._id = id;
        this._member = member;
    }

    get member(): number {
        return this._member;
    }

    set member(value: number) {
        this._member = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    add(person: Person): void {
        this.listPerson.push(person)
    }

    show() {
        return this.listPerson;
    }

    remove(idPerson: number) {
        for (let i = 0; i < this.listPerson.length; i++) {
            if(this.listPerson[i].id === idPerson){
                this.listPerson.splice(i , 1);
            }
        }
    }
}
class Town { // <=> FamilyManager
    listFamily: Family[] = [];

    add(family: Family) {
        this.listFamily.push(family);
    }

    remove(id: number) {
        let index = this.findById(id);
        if(index === -1){
            return 'Hong thay'
        } else {
            this.listFamily.splice(index, 1);
        }
    }

    findById(id: number) {
        for (let i = 0; i < this.listFamily.length; i++) {
            if(this.listFamily[i].id === id){
                return i;
            }
        }
        return -1;
    }

    show() {
        let str = ''
        for (let i=0;i<this.listFamily.length;i++) {
            str += `Hộ gia đình ${i+1} có ${this.listFamily[i].member} thành viên: \n`
            for (const person of this.listFamily[i].listPerson) {
                str +=`id : ${person.id}, name: ${person.fullName}, job: ${person.job}, age: ${person.age}; \n`
            }
        }
        return str;
    }
}
let readlineSync = require('readline-sync');
let town = new Town();
function addPerson(member:number,id:number) {
    let menu = `---------Menu chính-----------
    1.Thêm người 
    0.Thoát chương trình`
    let choice = -1;
    let family = new Family(id,member);
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
                let person = new Person(id, name, age, job);
                family.add(person)
                member++;
                break;

        }
    } while (choice !== 0);
    family.member = member;
    town.add(family)

}

function addFamily() {
    console.log('---------Hiển thị form thêm mới-----------');
    let member = 0;
    let id = readlineSync.question('Enter houseNumber :  ');
    addPerson(member,id)
}

function display() {
    console.log('------Hiển thị hộ gia đình----------')
    console.log(town.show())
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