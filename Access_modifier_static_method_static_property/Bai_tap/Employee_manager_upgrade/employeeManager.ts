import {Employee} from "./employee";

export class EmployeeManager {
    static listEmployee: Employee[] = [];

    static add(employee: Employee): void {
        EmployeeManager.listEmployee.push(employee);
    }

    static display(): void {
        for (const employee of EmployeeManager.listEmployee) {
            console.table(employee);
        }
    }

    static deleteEmployee(id: number): void {
        for (let i = 0; i < EmployeeManager.listEmployee.length; i++) {
            if (EmployeeManager.listEmployee[i].id === id) {
                EmployeeManager.listEmployee.splice(i, 1);
            }
        }
    }

    static editEmployee(id: number, employeeEdit: Employee): void {
        for (let i = 0; i < EmployeeManager.listEmployee.length; i++) {
            if (EmployeeManager.listEmployee[i].id === id) {
                EmployeeManager.listEmployee[i] = employeeEdit;
            }
        }
    }
}