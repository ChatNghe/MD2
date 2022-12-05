// class Account {
//     private _accountName: string;
//     private _password: string;
//     private _userName: string;
//     private _email: string;
//     private _age: number;
//     private _phoneNumber: string;
//     private _address: string;
//
//
//     constructor(accountName: string, password: string, userName: string, email: string, age: number, phoneNumber: string, address: string) {
//         this._accountName = accountName;
//         this._password = password;
//         this._userName = userName;
//         this._email = email;
//         this._age = age;
//         this._phoneNumber = phoneNumber;
//         this._address = address;
//     }
//
//
//     get accountName(): string {
//         return this._accountName;
//     }
//
//     set accountName(value: string) {
//         this._accountName = value;
//     }
//
//     get password(): string {
//         return this._password;
//     }
//
//     set password(value: string) {
//         this._password = value;
//     }
//
//     get userName(): string {
//         return this._userName;
//     }
//
//     set userName(value: string) {
//         this._userName = value;
//     }
//
//     get email(): string {
//         return this._email;
//     }
//
//     set email(value: string) {
//         this._email = value;
//     }
//
//     get age(): number {
//         return this._age;
//     }
//
//     set age(value: number) {
//         this._age = value;
//     }
//
//     get phoneNumber(): string {
//         return this._phoneNumber;
//     }
//
//     set phoneNumber(value: string) {
//         this._phoneNumber = value;
//     }
//
//     get address(): string {
//         return this._address;
//     }
//
//     set address(value: string) {
//         this._address = value;
//     }
// }

// class AccountManagerment {
//
//     accountList: Account[] = [];
//
//     constructor() {
//     }
//
//     add(account: Account) {
//         this.accountList.push(account);
//     }
//
//     registration(account: Account) {
//         let flag;
//         if (this.accountList.length === 0) {
//             this.add(account);
//             console.log('Sucess!')
//         }
//         this.add(account);
//         // else {
//         //     for (let i = 0; i < this.accountList.length; i++) {
//         //         flag = true;
//         //         if (this.accountList[i].accountName === account.accountName || account.accountName.length < 8 || account.accountName.length > 16) {
//         //             console.log(`Tên đăng nhập sai hoặc đã tồn tại`)
//         //             flag = false;
//         //         }
//         //         if (account.password.length < 8 || account.password.length > 16) {
//         //             console.log(`Mật khẩu phải từ 8 đến 16 kí tự`)
//         //             flag = false;
//         //         }
//         //         if (this.validateEmail(account.email) === false || this.accountList[i].email === account.email) {
//         //             console.log(`Email bạn nhập sai`)
//         //             flag = false;
//         //
//         //         }
//         //         if (account.age < 18) {
//         //             console.log(`Bạn phải lớn hơn 18 tuổi`)
//         //             flag = false;
//         //         }
//         //         if (account.phoneNumber.length !== 10) {
//         //             console.log(`phoneNumber bạn nhập sai`)
//         //             flag = false;
//         //         }
//         //         if (flag === false) break;
//         //     }
//         //     if (flag === true) {
//         //         this.add(account);
//         //         console.log('Sucess!')
//         //     }
//         // }
//     }
//
//     checkLogIn(name: string, pass: string): number | undefined {
//         for (let i = 0; i < this.accountList.length; i++) {
//             if (name === this.accountList[i].accountName && pass === this.accountList[i].password) {
//                 return 1;
//             }
//         }
//         return -1
//
//     }
//
//     validateEmail(email: string) {
//         let re = /\S+@\S+\.\S+/;
//         return re.test(email);
//     }
//
//     searchAccountByName(name: string): number {
//         for (let i = 0; i < this.accountList.length; i++) {
//             if (this.accountList[i].accountName === name) {
//                 return i;
//             }
//         }
//         return -1;
//     }
//
//     displayAll() {
//         return this.accountList;
//     }
//
//     display(accountName: string) {
//         return this.accountList[this.searchAccountByName(accountName)];
//     }
//
// }

// class Room {
//     private _name: string;
//     private _id: string;
//     private _price: number;
//     private _status: string;
//
//     constructor(name: string, price: number, status: string) {
//         this._name = name;
//         this._id = uniqueId();
//         this._price = price;
//         this._status = status;
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     set name(value: string) {
//         this._name = value;
//     }
//
//     get id(): string {
//         return this._id;
//     }
//
//     set id(value: string) {
//         this._id = value;
//     }
//
//     get price(): number {
//         return this._price;
//     }
//
//     set price(value: number) {
//         this._price = value;
//     }
//
//     get status(): string {
//         return this._status;
//     }
//
//     set status(value: string) {
//         this._status = value;
//     }
// }

// class RoomManagerment {
//     listRoom: Room[] = [];
//
//     add(room: Room) {
//         this.listRoom.push(room);
//     }
//
//     searchRoomById(id: string): number {
//         for (let i = 0; i < this.listRoom.length; i++) {
//             if (this.listRoom[i].id === id) {
//                 return i;
//             }
//         }
//         return -1;
//     }
//
//     searchRoomByName(name: string): number {
//         for (let i = 0; i < this.listRoom.length; i++) {
//             if (this.listRoom[i].name === name) {
//                 return i;
//             }
//         }
//         return -1;
//     }
//
//     searchEmptyRoomByPrice(low: number, high: number) {
//         let arr = [];
//         for (let i = 0; i < this.listRoom.length; i++) {
//             if (this.listRoom[i].price >= low && this.listRoom[i].price <= high && this.listRoom[i].status === 'empty') {
//                 arr.push(this.listRoom[i])
//             }
//         }
//         return arr;
//     }
//
//
//     editRoomById(id: string, t: Room): void {
//         let index = this.searchRoomById(id);
//         if (index === -1) {
//             console.log('Not exist')
//         } else {
//             this.listRoom[index] = t;
//             console.log('Edit success')
//         }
//     }
//
//     displayAll() {
//         return this.listRoom;
//     }
// }

// class Bill {
//     private _roomName: string;
//     private _tenantName: string;
//     private _saleName: string;
//     private _checkInDate: string;
//     private _checkOutDate: string;
//     private _totalPrice: number;
//     private _id: string;
//
//
//     constructor(roomName: string, tenantName: string, saleName: string, checkInDate: string, checkOutDate: string) {
//         this._roomName = roomName;
//         this._tenantName = tenantName;
//         this._saleName = saleName;
//         this._checkInDate = checkInDate;
//         this._checkOutDate = checkOutDate;
//         this._totalPrice = 0;
//         this._id = uniqueId();
//     }
//
//
//     get roomName(): string {
//         return this._roomName;
//     }
//
//     set roomName(value: string) {
//         this._roomName = value;
//     }
//
//     get tenantName(): string {
//         return this._tenantName;
//     }
//
//     set tenantName(value: string) {
//         this._tenantName = value;
//     }
//
//     get saleName(): string {
//         return this._saleName;
//     }
//
//     set saleName(value: string) {
//         this._saleName = value;
//     }
//
//     get checkInDate(): string {
//         return this._checkInDate;
//     }
//
//     set checkInDate(value: string) {
//         this._checkInDate = value;
//     }
//
//     get checkOutDate(): string {
//         return this._checkOutDate;
//     }
//
//     set checkOutDate(value: string) {
//         this._checkOutDate = value;
//     }
//
//     get totalPrice(): number {
//         return this._totalPrice;
//     }
//
//     set totalPrice(value: number) {
//         this._totalPrice = value;
//     }
//
//     get id(): string {
//         return this._id;
//     }
//
//     set id(value: string) {
//         this._id = value;
//     }
// }

// class BillManagerment {
//     listBill: Bill[] = [];
//
//     add(bill: Bill) {
//         this.listBill.push(bill);
//     }
//
//     displayAll() {
//         return this.listBill;
//     }
//
//     searchBillById(id: string): number {
//         for (let i = 0; i < this.listBill.length; i++) {
//             if (this.listBill[i].id === id) {
//                 return i;
//             }
//         }
//         return -1;
//     }
//
//     editBillById(id: string, t: Bill) {
//         let index = this.searchBillById(id);
//         if (index === -1) {
//             console.log('Not exist')
//         } else {
//             this.listBill[index] = t;
//             console.log('Edit success')
//         }
//     }
// }
import {Account} from "./Model/Account";
import {AccountManagerment} from "./Service/AccountManagement";
import {Room} from "./Model/Room";
import {RoomManagerment} from "./Service/RoomManagement";
import {Bill} from "./Model/Bill";
import {BillManagerment} from "./Service/BillManagement";

let readlineSync = require('readline-sync');
let accountManagerment = new AccountManagerment();

function main() {
    let menu = `---------Menu chính-----------
    1.Register
    2.Log in
    3.Display
    0.Exit program`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                console.log('---------Enter account-----------');
                let accountName = readlineSync.question('Enter name :  ');
                let password = readlineSync.question('Enter password :  ');
                let userName = readlineSync.question('Enter name :  ');
                let email = readlineSync.question('Enter email :  ');
                let age = readlineSync.question('Enter age :  ');
                let phone = readlineSync.question('Enter phone :  ');
                let address = readlineSync.question('Enter address :  ');
                let account = new Account(accountName, password, userName, email, age, phone, address)
                accountManagerment.registration(account)
                break;
            case 2:
                console.log('---------Log in-----------');
                let acc = readlineSync.question('Enter name :  ');
                let pass = readlineSync.question('Enter password :  ');
                if (accountManagerment.checkLogIn(acc, pass) === 1) {
                    logIn();
                } else {
                    console.log('Tài khoản hoặc mật khẩu sai, mời đăng nhập lại')
                }
                break;
            case 3:
                console.log(accountManagerment.displayAll())
                break;
        }
    } while (choice !== 0);
}

function logIn() {
    let menu = `---------Menu chính-----------
    1.Manager room
    2.Manager order
    3.Monthly income
    0.Log out`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                roomManagerment();
                break;
            case 2:
                billManagerment();
                break;
            case 3:
                let month = +readlineSync.question('Enter month you want to know the income :  ');
                let year = +readlineSync.question('Enter year you want to know the income :  ');
                console.log(monthlyIncome(month,year));
                break;
        }
    } while (choice !== 0);
}

function monthlyIncome(month: number, year: number){
    let sum = 0;
    for (let i = 0; i < billManager.displayAll().length; i++) {
        let startMonth = new Date(billManager.displayAll()[i].checkInDate).getMonth();
        let startYear = new Date(billManager.displayAll()[i].checkInDate).getFullYear();
        if (startMonth === month - 1 && startYear == year) {
            sum += billManager.displayAll()[i].totalPrice
        }
    }
    return sum;
}

let roomManager = new RoomManagerment()
let room101 = new Room('101', 100, 'empty')
let room102 = new Room('102', 150, 'empty')
let room103 = new Room('103', 200, 'empty')
// let room201 = new Room('201', 100, 'empty')
// let room202 = new Room('202', 200, 'empty')
// let room203 = new Room('203', 300, 'empty')
// let room301 = new Room('301', 150, 'empty')
// let room302 = new Room('302', 300, 'empty')
// let room303 = new Room('303', 400, 'empty')
roomManager.add(room101)
roomManager.add(room102)
roomManager.add(room103)
// roomManager.add(room201)
// roomManager.add(room202)
// roomManager.add(room203)
// roomManager.add(room301)
// roomManager.add(room302)
// roomManager.add(room303)


function roomManagerment() {
    let menu = `---------Menu chính-----------
    1.List room
    2.Search room by price
    3.Display room status on period
    4.Add room
    5.Edit room
    0.Exit`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                checkStatus()
                console.log(roomManager.displayAll())
                break;
            case 2:
                let low = readlineSync.question('Enter low price :  ');
                let high = readlineSync.question('Enter high price :  ');
                console.log(roomManager.searchEmptyRoomByPrice(low, high));
                break;
            case 3:
                let start = readlineSync.question('Enter check in day :  ');
                let end = readlineSync.question('Enter check out day :  ');
                console.log(checkStatusByPeriod(start, end));
                break;
            case 4:
                console.log('---------Enter room need to add-----------');
                let name = readlineSync.question('Enter name :  ');
                let price = +readlineSync.question('Enter price :  ');
                let status = readlineSync.question('Enter status :  ');
                let newRoom = new Room(name, price, status);
                roomManager.add(newRoom);
                break;
            case 5:
                console.log('---------Enter room need to edit-----------');
                let id = readlineSync.question('Enter id of room that need to edit :  ');
                let nameEdit = readlineSync.question('Enter name :  ');
                let priceEdit = +readlineSync.question('Enter price :  ');
                let statusEdit = readlineSync.question('Enter status :  ');
                let newRoomEdit = new Room(nameEdit, priceEdit, statusEdit);
                roomManager.editRoomById(id, newRoomEdit);
                break;
        }
    } while (choice !== 0);
}

let billManager = new BillManagerment();

function billManagerment() {
    let menu = `---------Menu chính-----------
    1.List bill
    2.Add bill
    3.Edit bill
    0.Exit`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                console.log(billManager.displayAll())
                break;
            case 2:
                console.log('---------Enter bill need to add-----------')
                let roomId = readlineSync.question('Enter id of room: ');
                let tenantName = readlineSync.question('Enter tenantName: ');
                let saleName = readlineSync.question('Enter saleName: ');
                let checkInDate = readlineSync.question('Enter checkInDate: ');
                let checkOutDate = readlineSync.question('Enter checkOutDate: ');
                let roomName = roomManager.displayAll()[roomManager.searchRoomById(roomId)].name
                let bill = new Bill(roomName, tenantName, saleName, checkInDate, checkOutDate);
                let from = new Date(checkInDate).getTime();
                let to = new Date(checkOutDate).getTime();
                bill.totalPrice = (to - from) / (1000 * 60 * 60 * 24) * roomManager.displayAll()[roomManager.searchRoomById(roomId)].price
                let check = checkStatusByPeriod(checkInDate, checkOutDate)
                if (check[roomManager.searchRoomById(roomId)].status === 'empty') billManager.add(bill);
                else console.log('Room has been full, choose another room')
                break;
            case 3:
                console.log('---------Enter bill need to edit-----------');
                let id = readlineSync.question('Enter id of bill that need to edit :  ');
                let roomIdEdit = readlineSync.question('Enter id of room: ');
                let tenantNameEdit = readlineSync.question('Enter tenantName: ');
                let saleNameEdit = readlineSync.question('Enter saleName: ');
                let checkInDateEdit = readlineSync.question('Enter checkInDate: ');
                let checkOutDateEdit = readlineSync.question('Enter checkOutDate: ');
                let roomNameEdit = roomManager.displayAll()[roomManager.searchRoomById(roomIdEdit)].name
                let billEdit = new Bill(roomNameEdit, tenantNameEdit, saleNameEdit, checkInDateEdit, checkOutDateEdit);
                let fromEdit = new Date(checkInDateEdit).getTime();
                let toEdit = new Date(checkOutDateEdit).getTime();
                billEdit.totalPrice = (toEdit - fromEdit) / (1000 * 60 * 60 * 24) * roomManager.displayAll()[roomManager.searchRoomById(roomIdEdit)].price
                billManager.editBillById(id, billEdit);
                break;

        }
    } while (choice !== 0);
}

function checkStatus() {
    let today = new Date().getTime()
    for (let i = 0; i < billManager.displayAll().length; i++) {
        let from = new Date(billManager.displayAll()[i].checkInDate).getTime();
        let to = new Date(billManager.displayAll()[i].checkOutDate).getTime();
        if (today >= from && today <= to) {
            roomManager.displayAll()[roomManager.searchRoomByName(billManager.displayAll()[i].roomName)].status = 'full'
        }
    }
}

function checkStatusByPeriod(start: string, end: string) {
    let a = new Date(start).getTime();
    let b = new Date(end).getTime();
    const clone = roomManager.displayAll().map(x => x);
    for (let i = 0; i < billManager.displayAll().length; i++) {
        let from = new Date(billManager.displayAll()[i].checkInDate).getTime();
        let to = new Date(billManager.displayAll()[i].checkOutDate).getTime();
        if ((from >= a && from <= b) || (to >= a && to <= b)) {
            clone[roomManager.searchRoomByName(billManager.displayAll()[i].roomName)].status = 'full'
        }
    }
    return clone;
}

main()

