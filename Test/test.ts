class Programmer {
    private id: string;
    public salary: number;

    constructor(id: string, salary: number) {
        this.id = id;
        this.salary = salary;
    }

    getId(): string {
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

    getSallary(): number {
        return this.salary;
    }

    setSallary(value: number) {
        this.salary = value;
    }



}

class JsProgrammer extends Programmer {
    constructor(id: string, salary: number) {
        super(id, salary);
    }

}

class JavaProgrammer extends Programmer {
    constructor(id: string, salary: number) {
        super(id, salary);
    }
}

class PhpProgrammer extends Programmer {
    constructor(id: string, salary: number) {
        super(id, salary);
    }
}
class Manager{
    static programmerList: Programmer[] = [];

    static add(programmer: Programmer) {
        Manager.programmerList.push(programmer);
    }

    static display() {
        return Manager.programmerList;
    }

    static findMaxSalary() {
        let max = Manager.programmerList[0].salary;
        for (let i = 0; i < Manager.programmerList.length; i++) {
            if (Manager.programmerList[i].salary > max) max = Manager.programmerList[i].salary;
        }
        return max;
    }

    static sortBySalary(){
        Manager.programmerList = Manager.programmerList.slice().sort(function(a,b) {
            return a.salary - b.salary;
        })
        return Manager.programmerList;
    }
}

let a = new JsProgrammer('123', 15)
let b = new JavaProgrammer('456', 20)
let c = new PhpProgrammer('789', 12)
Manager.add(a)
Manager.add(b)
Manager.add(c)
Manager.findMaxSalary()
console.log(Manager.display())
console.log(Manager.findMaxSalary())
console.log(Manager.sortBySalary())

