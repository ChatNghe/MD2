class Cadres {
    public name !: string;
    private age !: number;
    private gender !: string;
    private address !: string;


    constructor(name: string, age: number, gender: string, address: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
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

    getGender(): string {
        return this.gender;
    }

    setGender(value: string) {
        this.gender = value;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(value: string) {
        this.address = value;
    }
}
class Workers extends Cadres{
    private tier!:number;


    constructor(name: string, age: number, gender: string, address: string, tier: number) {
        super(name, age, gender, address);
        this.tier = tier;
    }
}
class Engineers extends Cadres{
    private trainingIndustry!:string;


    constructor(name: string, age: number, gender: string, address: string, trainingIndustry: string) {
        super(name, age, gender, address);
        this.trainingIndustry = trainingIndustry;
    }
}
class Employees extends Cadres{
    private job!:string;


    constructor(name: string, age: number, gender: string, address: string, job: string) {
        super(name, age, gender, address);
        this.job = job;
    }
}
interface IManager<T> {
    add(t: T): void;

    findAll(): T[];

    findByName(name:string):T|string;
}
class CadresManager implements IManager<Cadres> {
     listCadres: Cadres[] = [];

     add(t: Cadres): void {
        this.listCadres.push(t);
    }


     findAll(): Cadres[] {
        return this.listCadres;
    }

     findByName(name: string): Cadres|string {
        for (let i = 0; i < this.listCadres.length; i++) {
            if (this.listCadres[i].name === name) {
                return this.listCadres[i];
            }
        }
        return 'Cant find';
    }
}

let readlineSync = require('readline-sync');
let cadresManager = new CadresManager();
function add(){
    let menu = `---------Bạn muốn thêm cán bộ nào-----------
    1.Workers
    2.Engineers
    3.Employees
    0.Ra menu chính`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addWorkers();
                break;
            case 2:
                addEngineers();
                break;
            case 3:
                addEmployees();
                break;

        }
    } while (choice !== 0);
}
function addWorkers(){
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter name :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let tier = +readlineSync.question('Enter tier :  ');
    let worker = new Workers(name, age, gender, address,tier);
    cadresManager.add(worker);
}
function addEngineers(){
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter name :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let trainingIndustry = readlineSync.question('Enter trainingIndustry :  ');
    let engineers = new Engineers(name, age, gender, address,trainingIndustry);
    cadresManager.add(engineers);
}
function addEmployees(){
    console.log('---------Hiển thị form thêm mới-----------');
    let name = readlineSync.question('Enter name :  ');
    let age = +readlineSync.question('Enter age :  ');
    let gender = readlineSync.question('Enter gender :  ');
    let address = readlineSync.question('Enter address :  ');
    let job = readlineSync.question('Enter job :  ');
    let employees = new Employees(name, age, gender, address,job);
    cadresManager.add(employees);
}
function display(){
    console.log('------Hiển thị sản phẩm----------')
    console.log(cadresManager.findAll());

}
function findByName(){
    let name = readlineSync.question('Enter name need to find : ')
    console.log(cadresManager.findByName(name));
}
function main(){
    let menu = `---------Menu chính-----------
    1.Thêm mới cán bộ
    2.Tìm kiếm theo tên
    3.Hiển thị danh sách cán bộ
    0.Thoát chương trình`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                findByName();
                break;
            case 3:
                display();
                break;

        }
    } while (choice !== 0);
}
main();


