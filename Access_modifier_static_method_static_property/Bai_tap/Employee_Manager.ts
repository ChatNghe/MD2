class EmployeeManager {
    private firstName: string;
    private lastName: string;
    private birthDay: string;
    private address: string;
    private position: string;
    static employee: EmployeeManager[] = [];

    constructor(firstName: string, lastName: string, birthDay: string, address: string, position: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.address = address;
        this.position = position;
    }

    static display(){
        return EmployeeManager.employee;
    }

    static add(employee: EmployeeManager) {
        return EmployeeManager.employee.push(employee);
    }

    static getInfo(employee: EmployeeManager) {
        return employee;
    }

    static delete(employee: EmployeeManager) {
        if (EmployeeManager.employee.indexOf(employee) !== -1) {
            return EmployeeManager.employee.splice(EmployeeManager.employee.indexOf(employee), 1)
        }
    }

    static edit(employee1: EmployeeManager, employee2: EmployeeManager) {
        EmployeeManager.employee[EmployeeManager.employee.indexOf(employee1)] = employee2;
        return EmployeeManager.employee;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(value: string) {
        this.firstName = value;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(value: string) {
        this.lastName = value;
    }

    getBirthDay(): string {
        return this.birthDay;
    }

    setBirthDay(value: string) {
        this.birthDay = value;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(value: string) {
        this.address = value;
    }

    getPosition(): string {
        return this.position;
    }

    setPosition(value: string) {
        this.position = value;
    }
}

let employee1 = new EmployeeManager('1', '2', '3', '4', '5')
let employee2 = new EmployeeManager('6', '7', '8', '9', '10')
let employee3 = new EmployeeManager('11', '12', '13', '14', '15')
EmployeeManager.add(employee1)
EmployeeManager.add(employee2)
EmployeeManager.add(employee3)
EmployeeManager.delete(employee1)
EmployeeManager.edit(employee2, employee3)
console.log(EmployeeManager.display());