import {Employee} from "./employee";
import {EmployeeManager} from "./employeeManager";

let hieu = new Employee(1,'Pham' , 'Hieu', '2004', 'Berlin', 'Lau don');
let nam = new Employee(4,'Nguyen' , 'Nam', '1991', 'Canh Berlin', 'Lau don 2');

EmployeeManager.add(hieu);
EmployeeManager.add(nam);
EmployeeManager.display();
// EmployeeManager.deleteEmployee(1);
// console.log('--------Sau khi xóa-------')
// EmployeeManager.display();

let dai: Employee = new Employee(3, 'Le', 'Đại', '2007', 'Đông Anh', 'Tutor C10');
EmployeeManager.editEmployee(4,dai );
console.log('-----Sau khi thay----');
EmployeeManager.display();