class Account {
    name: string;
    password: string;

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }
}

class AccountManager {

    accountList: Account[] = [];

    constructor() {
    }

    signUp(account: Account): void {
        this.accountList.push(account);
    }

    signIn(account: Account): number | undefined {
        for (let i = 0; i < this.accountList.length; i++) {
            if (this.accountList[i].name === account.name && this.accountList[i].password === account.name) {
                return 1;
            } else return -1
        }
    }

    display() {
        return this.accountList;
    }
}

let readlineSync = require('readline-sync');
let account = new AccountManager();

function signIn() {
    console.log('---------Enter account-----------');
    let name = readlineSync.question('Enter name :  ');
    let password = readlineSync.question('Enter password :  ');
    let a = new Account(name, password);
    if (account.signIn(a) === 1) {
        console.log('Dang nhap thanh cong')
    } else console.log('Dang nhap that bai')
}

function signUp() {
    console.log('---------Enter account-----------');
    let name = readlineSync.question('Enter name :  ');
    let password = readlineSync.question('Enter password :  ');
    let a = new Account(name, password);
    account.signUp(a);
}
function display() {
    account.display();
}

function main() {
    let menu = `---------Menu chính-----------
    1.Sign in
    2.Sign up
    3.Display
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
                display();
                break;
        }
    } while (choice !== 0);
}

main();
