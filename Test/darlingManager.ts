import {Account} from "../Case_study_MD2/Model/Account";
import {AccountManagerment} from "../Case_study_MD2/Service/AccountManagement";

class Darling {
    private _id: string;
    private _name: string;
    private _zodiac: string;
    private _address: string;
    private _birthYear: number;
    private _hobby: string;


    constructor(id: string, name: string, zodiac: string, address: string, birthYear: number, hobby: string) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._address = address;
        this._birthYear = birthYear;
        this._hobby = hobby;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get zodiac(): string {
        return this._zodiac;
    }

    set zodiac(value: string) {
        this._zodiac = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get birthYear(): number {
        return this._birthYear;
    }

    set birthYear(value: number) {
        this._birthYear = value;
    }

    get hobby(): string {
        return this._hobby;
    }

    set hobby(value: string) {
        this._hobby = value;
    }
}

class DarlingManager {
    darlingList: Darling[] = [];

    findAll() {
        return this.darlingList;
    }

    searchDarlingByName(t: string) {
        return this.darlingList.filter((el) => el.name.toLowerCase().includes(t.toLowerCase()))
    }

    add(t: Darling) {
        this.darlingList.push(t);
    }

    searchDarlingById(id: string) {
        for (let i = 0; i < this.darlingList.length; i++) {
            if (this.darlingList[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    editDarlingById(id: string, t: Darling) {
        let index = this.searchDarlingById(id);
        if (index === -1) {
            console.log('Kh??ng t???n  t???i  ng?????i y??u c???n  update')
        } else {
            this.darlingList[index] = t;
            console.log('S???a th??nh c??ng')
        }
    }

    removeDarlingById(id: string) {
        for (let i = 0; i < this.darlingList.length; i++) {
            if (this.darlingList[i].id === id) {
                this.darlingList.splice(i, 1)
                console.log('Xo?? th??nh c??ng')
                break;
            } else console.log('Kh??ng t???n  t???i  ng?????i y??u c???n  x??a')
        }
        return this.darlingList;

    }
}

let readlineSync = require('readline-sync');
let darlingManager = new DarlingManager();
let darling1 = new Darling('1','????o','Taurus','H?? N???i',2000,'ch??i th??? thao')
let darling2 = new Darling('2','Linh','Gemini','H???i D????ng',2000,'ch??i th??? thao')
let darling3 = new Darling('3','H????ng','Taurus','H?? Giang',2000,'ch??i th??? thao')
let darling4 = new Darling('4','T??','Scorpius','Qu???ng ninh',2000,'ch??i th??? thao')
let darling5 = new Darling('5','L???c','Aquarius','Nam ?????nh',2000,'ch??i th??? thao')
darlingManager.add(darling1)
darlingManager.add(darling2)
darlingManager.add(darling3)
darlingManager.add(darling4)
darlingManager.add(darling5)




function main() {
    let menu = `---------Menu ch??nh-----------
    1.Display
    2.Search by name
    3.Add new darling
    4.Edit darling information
    5.Remove darling
    0.Exit program`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                if (darlingManager.findAll().length === 0) console.log('Kh??ng c?? d??? li???u')
                else console.log(darlingManager.findAll())
                break;
            case 2:
                let searchName = readlineSync.question('Enter name need to search:  ');
                let arr = darlingManager.searchDarlingByName(searchName)
                if (arr.length === 0) console.log('Kh??ng c??  d??? li???u ph?? h???p')
                else console.log(arr)
                break;
            case 3:
                // console.log('---------Main Menu-----------');
                let darlingId = readlineSync.question('Enter id :  ');
                let darlingName = readlineSync.question('Enter name :  ');
                let zodiac = zodiacChoice();
                let darlingAddress = readlineSync.question('Enter address :  ');
                let darlingBirthYear = +readlineSync.question('Enter birth year :  ');
                let darlingHobby = readlineSync.question('Enter hobby :  ');
                let darling = new Darling(darlingId, darlingName, zodiac, darlingAddress, darlingBirthYear, darlingHobby)
                let flag = true;
                for (let i = 0; i < darlingManager.findAll().length; i++) {
                    if (darling.id === darlingManager.findAll()[i].id){
                        console.log(`id ???? t???n t???i`)
                        flag = false;
                        break;
                    }
                }
                if (darling.name.length > 16) {
                    console.log(`T??n qu?? d??i`)
                    flag = false;
                }
                if (darling.address.length > 16) {
                    console.log(`T??n qu?? qu??n qu?? d??i`)
                    flag = false;
                }
                if (darling.birthYear < 0) {
                    console.log(`N??m sinh ph???i l?? s?? d????ng`)
                    flag = false;

                }
                if (darling.hobby.length < 20) {
                    console.log(`S??? th??ch ph???i l?? ??o???n v??n d??i`)
                    flag = false;
                }

                if (flag === true) {
                    darlingManager.add(darling);
                    console.log('Th??m th??nh c??ng!')
                }

                break;
            case 4:
                let editId = readlineSync.question('Enter id of darling need to edit:  ');
                let darlingNameEdit = readlineSync.question('Enter name:  ');
                let zodiacEdit = zodiacChoice();
                let darlingAddressEdit = readlineSync.question('Enter address:  ');
                let darlingBirthYearEdit = +readlineSync.question('Enter birth year:  ');
                let darlingHobbyEdit = readlineSync.question('Enter hobby:  ');
                let darlingEdit = new Darling(editId, darlingNameEdit, zodiacEdit, darlingAddressEdit, darlingBirthYearEdit, darlingHobbyEdit)
                darlingManager.editDarlingById(editId, darlingEdit)
                break;
            case 5:
                let removeId = readlineSync.question('Enter id of darling need to remove:  ');
                darlingManager.removeDarlingById(removeId)
                break;
        }
    } while (choice !== 0);
}

function zodiacChoice(): string {
    let menu = `---------Choose zodiac-----------
    1.Aries (Ram): March 21???April 19
    2.Taurus (Bull): April 20???May 20
    3.Gemini (Twins): May 21???June 21
    4.Cancer (Crab): June 22???July 22
    5.Leo (Lion): July 23???August 22
    6.Virgo (Virgin): August 23???September 22
    7.Libra (Balance): September 23???October 23
    8.Scorpius (Scorpion): October 24???November 21
    9.Sagittarius (Archer): November 22???December 21
    10.Capricornus (Goat): December 22???January 19
    11.Aquarius (Water Bearer): January 20???February 18
    12.Pisces (Fish): February 19???March 20`
    let choice = -1;
    let zodiac1: string;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                zodiac1 = 'Aries'
                return zodiac1;
            case 2:
                zodiac1 = 'Taurus'
                return zodiac1;
            case 3:
                zodiac1 = 'Gemini'
                return zodiac1;
            case 4:
                zodiac1 = 'Cancer'
                return zodiac1;
            case 5:
                zodiac1 = 'Leo'
                return zodiac1;
            case 6:
                zodiac1 = 'Virgo'
                return zodiac1;
            case 7:
                zodiac1 = 'Libra'
                return zodiac1;
            case 8:
                zodiac1 = 'Scorpius'
                return zodiac1;
            case 9:
                zodiac1 = 'Sagittarius'
                return zodiac1;
            case 10:
                zodiac1 = 'Capricornus'
                return zodiac1;
            case 11:
                zodiac1 = 'Aquarius'
                return zodiac1;
            case 12:
                zodiac1 = 'Pisces'
                return zodiac1;

        }
    } while (choice !== 0)
    return '';

}

main()