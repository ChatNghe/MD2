class User {
    private _userName: string;
    private _password: string;
    private _id: string;
    private _status: boolean;

    constructor(userName: string, password: string) {
        this._userName = userName;
        this._password = password;
        this._id = uniqueid1();
        this._status = true;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get status(): boolean {
        return this._status;
    }

    set status(value: boolean) {
        this._status = value;
    }
}

class UserManager {
    userList: User[] = [];

    constructor() {
    }

    signUp(user: User): void|string {
         if (this.userList.length === 0) {
             this.userList.push(user);
         }else {
             for (let i = 0; i < this.userList.length; i++) {
                 if (this.userList[i].userName !== user.userName) {
                     this.userList.push(user);
                     break;
                 } else console.log(`that bai`)
             }
         }

    }


    signIn(user: User): number | undefined {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].userName === user.userName && this.userList[i].password === user.userName && this.userList[i].status === true) {
                return 1;
            } else return -1
        }
    }

    lock(id: string) {
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].id === id && this.userList[i].status === true) {
                this.userList[i].status=false;
            }
        }
    }
    unLock(id: string){
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].id === id && this.userList[i].status === false) {
                this.userList[i].status=true;
            }
        }
    }

    display() {
        return this.userList;
    }
}

let readlineSync = require('readline-sync');
let account = new UserManager();

function signIn() {
    console.log('---------Enter account-----------');
    let name = readlineSync.question('Enter name :  ');
    let password = readlineSync.question('Enter password :  ');
    let a = new User(name, password);
    if (account.signIn(a) === 1 ) {
        console.log('Dang nhap thanh cong')
    } else console.log('Dang nhap that bai')
}

function signUp() {
    console.log('---------Enter account-----------');
    let name = readlineSync.question('Enter name :  ');
    let password = readlineSync.question('Enter password :  ');
    let a = new User(name, password);
    account.signUp(a);
}

function display1() {
    console.log(account.display());
}
function lock(){
    console.log('---------Enter id of account you want to lock-----------');
    let id = readlineSync.question('Enter id :  ');
    account.lock(id)
}
function unLock(){
    console.log('---------Enter id of account you want to unlock-----------');
    let id = readlineSync.question('Enter id :  ');
    account.unLock(id)
}
function main() {
    let menu = `---------Menu chính-----------
    1.Sign in
    2.Sign up
    3.Display
    4.Lock
    5.UnLock
    0.Thoát chương trình`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                signIn();
                break;
            case 2:
                signUp();
                break;
            case 3:
                display1();
                break;
            case 4:
                lock();
                break;
            case 5:
                unLock();
                break;
        }
    } while (choice !== 0);
}

function uniqueid1() {
    // always start with a letter (for DOM friendlyness)
    let idstr1 = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
    do {
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        let ascicode = Math.floor((Math.random() * 42) + 48);
        if (ascicode < 58 || ascicode > 64) {
            // exclude all chars between : (58) and @ (64)
            idstr1 += String.fromCharCode(ascicode);
        }
    } while (idstr1.length < 5);

    return (idstr1);
}

// console.log(uniqueid1())
main();
