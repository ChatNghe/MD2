import {Account} from "../Model/Account";

export class AccountManagerment {

    accountList: Account[] = [];

    constructor() {
    }

    add(account: Account) {
        this.accountList.push(account);
    }

    registration(account: Account) {
        let flag;
        if (this.accountList.length === 0) {
            this.add(account);
            console.log('Sucess!')
        }
        this.add(account);
        // else {
        //     for (let i = 0; i < this.accountList.length; i++) {
        //         flag = true;
        //         if (this.accountList[i].accountName === account.accountName || account.accountName.length < 8 || account.accountName.length > 16) {
        //             console.log(`Tên đăng nhập sai hoặc đã tồn tại`)
        //             flag = false;
        //         }
        //         if (account.password.length < 8 || account.password.length > 16) {
        //             console.log(`Mật khẩu phải từ 8 đến 16 kí tự`)
        //             flag = false;
        //         }
        //         if (this.validateEmail(account.email) === false || this.accountList[i].email === account.email) {
        //             console.log(`Email bạn nhập sai`)
        //             flag = false;
        //
        //         }
        //         if (account.age < 18) {
        //             console.log(`Bạn phải lớn hơn 18 tuổi`)
        //             flag = false;
        //         }
        //         if (account.phoneNumber.length !== 10) {
        //             console.log(`phoneNumber bạn nhập sai`)
        //             flag = false;
        //         }
        //         if (flag === false) break;
        //     }
        //     if (flag === true) {
        //         this.add(account);
        //         console.log('Sucess!')
        //     }
        // }
    }

    checkLogIn(name: string, pass: string): number | undefined {
        for (let i = 0; i < this.accountList.length; i++) {
            if (name === this.accountList[i].accountName && pass === this.accountList[i].password) {
                return 1;
            }
        }
        return -1

    }

    validateEmail(email: string) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    searchAccountByName(name: string): number {
        for (let i = 0; i < this.accountList.length; i++) {
            if (this.accountList[i].accountName === name) {
                return i;
            }
        }
        return -1;
    }

    displayAll() {
        return this.accountList;
    }

    display(accountName: string) {
        return this.accountList[this.searchAccountByName(accountName)];
    }

}