export class Documents {
    private _name !: string;
    private _id !: string;
    private _numberOfPage !: number;
    private _publicationDate !: string;
    private _quantity !: number;
    private _price !: number;
    private _quantityBought!: number;

    constructor(name: string, numberOfPage: number, publicationDate: string, quantity: number, price: number) {
        this._name = name;
        this._id = uniqueid2();
        this._numberOfPage = numberOfPage;
        this._publicationDate = publicationDate;
        this._quantity = quantity;
        this._price = price;
        this._quantityBought = 0;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get numberOfPage(): number {
        return this._numberOfPage;
    }

    set numberOfPage(value: number) {
        this._numberOfPage = value;
    }

    get publicationDate(): string {
        return this._publicationDate;
    }

    set publicationDate(value: string) {
        this._publicationDate = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get quantityBought(): number {
        return this._quantityBought;
    }

    set quantityBought(value: number) {
        this._quantityBought = value;
    }
}

class Book extends Documents {
    private _author!: string;


    constructor(name: string, numberOfPage: number, publicationDate: string, quantity: number, price: number, author: string) {
        super(name, numberOfPage, publicationDate, quantity, price);
        this._author = author;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }
}

class Magazine extends Documents {
    private _type !: string;

    constructor(name: string, numberOfPage: number, publicationDate: string, quantity: number, price: number, type: string) {
        super(name, numberOfPage, publicationDate, quantity, price);
        this._type = type;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}

class Newspaper extends Documents {
    private _newsAgency !: string;

    constructor(name: string, numberOfPage: number, publicationDate: string, quantity: number, price: number, newsAgency: string) {
        super(name, numberOfPage, publicationDate, quantity, price);
        this._newsAgency = newsAgency;
    }

    get newsAgency(): string {
        return this._newsAgency;
    }

    set newsAgency(value: string) {
        this._newsAgency = value;
    }
}

class DocumentManager {
    documentList: Documents[] = [];
    list: Documents[] = [];
    bookList: Book[] = [];
    magazineList: Magazine[] = [];
    newspaperList: Newspaper[] = [];

    constructor() {
    }

    add(document: any) {
        this.documentList.push(document)
        this.bookList.push(document)
        this.magazineList.push(document)
        this.newspaperList.push(document)

    }

    findAll() {
        return this.documentList;
    }

    deleteDocumentById(documentId: string) {
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].id === documentId) {
                this.documentList.splice(i, 1)
            }
        }
        return this.documentList;

    }

    searchDocumentByType(Type: any) {
        this.list = [];
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i] instanceof Type) {
                this.list.push(this.documentList[i])
            }
        }
        return this.list
    }

    searchDocumentById(id: string): number {
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    searchDocumentByName(t: string) {
        return this.documentList.filter((el) => el.name.toLowerCase().includes(t.toLowerCase()))
    }

    editById(id: string, t: Documents) {
        let index = this.searchDocumentById(id);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.searchDocumentById[index] = t;
            console.log('Sửa thành công')
        }
    }

    searchByRangeAmount(low: number, high: number) {
        let arr = [];
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].price > low && this.documentList[i].price < high) {
                arr.push(this.documentList[i])
            }
        }
        return arr;
    }

    sortPriceIncreasing() {
        return this.documentList.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    sortPriceDecreasing() {
        return this.documentList.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    sortByQuantityBought() {
        return this.documentList.sort(function (a, b) {
            return b.quantityBought - a.quantityBought;
        });
    }

    // check(index: number): number {
    //     let flag;
    //     flag = 0
    //     for (let i = 0; i < this.documentList.length; i++) {
    //         if (this.documentList[i].getDocumentCode() === index) {
    //             flag++;
    //         }
    //     }
    //     if (flag >= 1) return 1
    //     else return -1;
    // }
    buy(id: string, amount: number) {
    }
}


export function uniqueid2() {
    // always start with a letter (for DOM friendlyness)
    let idstr2 = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
    do {
        // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
        let ascicode = Math.floor((Math.random() * 42) + 48);
        if (ascicode < 58 || ascicode > 64) {
            // exclude all chars between : (58) and @ (64)
            idstr2 += String.fromCharCode(ascicode);
        }
    } while (idstr2.length < 5);

    return (idstr2);
}