import {Bill} from "../Model/Bill";

export class BillManagerment {
    listBill: Bill[] = [];

    add(bill: Bill) {
        this.listBill.push(bill);
    }

    displayAll() {
        return this.listBill;
    }

    searchBillById(id: string): number {
        for (let i = 0; i < this.listBill.length; i++) {
            if (this.listBill[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    editBillById(id: string, t: Bill) {
        let index = this.searchBillById(id);
        if (index === -1) {
            console.log('Not exist')
        } else {
            this.listBill[index] = t;
            console.log('Edit success')
        }
    }

}