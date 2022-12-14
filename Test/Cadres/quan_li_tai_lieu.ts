class Documents {
    private documentCode: number;
    private publishingCompany: string;
    private releaseNumber: number;

    constructor(documentCode: number, publishingCompany: string, releaseNumber: number) {
        this.documentCode = documentCode;
        this.publishingCompany = publishingCompany;
        this.releaseNumber = releaseNumber;
    }

    getDocumentCode(): number {
        return this.documentCode;
    }

    setDocumentCode(value: number) {
        this.documentCode = value;
    }

    getPublishingCompany(): string {
        return this.publishingCompany;
    }

    setPublishingCompany(value: string) {
        this.publishingCompany = value;
    }

    getReleaseNumber(): number {
        return this.releaseNumber;
    }

    setReleaseNumber(value: number) {
        this.releaseNumber = value;
    }
}

class Book extends Documents {
    private author: string;
    private pageNumber: number;

    constructor(documentCode: number, publishingCompany: string, releaseNumber: number, author: string, pageNumber: number) {
        super(documentCode, publishingCompany, releaseNumber);
        this.author = author;
        this.pageNumber = pageNumber;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(value: string) {
        this.author = value;
    }

    getPageNumber(): number {
        return this.pageNumber;
    }

    setPageNumber(value: number) {
        this.pageNumber = value;
    }
}

class Magazine extends Documents {
    private numberRelease: number;
    private releaseMonth: number;

    constructor(documentCode: number, publishingCompany: string, releaseNumber: number, numberRelease: number, releaseMonth: number) {
        super(documentCode, publishingCompany, releaseNumber);
        this.numberRelease = numberRelease;
        this.releaseMonth = releaseMonth;
    }

    getNumberRelease(): number {
        return this.numberRelease;
    }

    setNumberRelease(value: number) {
        this.numberRelease = value;
    }

    getReleaseMonth(): number {
        return this.releaseMonth;
    }

    setReleaseMonth(value: number) {
        this.releaseMonth = value;
    }
}

class Newspaper extends Documents {
    private releaseDay: number;

    constructor(documentCode: number, publishingCompany: string, releaseNumber: number, releaseDay: number) {
        super(documentCode, publishingCompany, releaseNumber);
        this.releaseDay = releaseDay;
    }

    getReleaseDay(): number {
        return this.releaseDay;
    }

    setReleaseDay(value: number) {
        this.releaseDay = value;
    }
}

interface IManager<T> {
    add(t: T): void;

    findAll(): T[];

    deleteDocumentById(documentId: number): T[];

    searchDocumentByType(type: any): T[];

    check(index: number): number;

    searchDocumentById(id: number): number;

    // editById(documentId: number, t: Documents): void;
}

class DocumentManager implements IManager<Documents> {
    documentList: Documents[] = [];
    list :Documents[] = [];
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

    deleteDocumentById(documentId: number) {
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].getDocumentCode() === documentId) {
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

    searchDocumentById(id: number): number {
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].getDocumentCode() === id) {
                return i;
            }
        }
        return -1;
    }

    // editById(documentId: number, t: Documents) {
    //     let index = this.searchDocumentById(+documentId);
    //     if (index === -1) {
    //         console.log('Kh??ng c??')
    //     } else {
    //         this.searchDocumentById[index] = t;
    //         console.log('S???a th??nh c??ng')
    //     }
    // }

    check(index: number): number {
        let flag;
        flag = 0
        for (let i = 0; i < this.documentList.length; i++) {
            if (this.documentList[i].getDocumentCode() === index) {
                flag++;
            }
        }
        if (flag >= 1) return 1
        else return -1;
    }
}

// ------------------------------------Main-------------------------------------------------------------------------
let readlineSync = require('readline-sync');
let documentManager = new DocumentManager();

function add() {
    let menu = `---------B???n mu???n th??m t??i li???u n??o-----------
    1.S??ch
    2.T???p ch??
    3.B??o
    0.Ra menu ch??nh`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                addBook();
                break;
            case 2:
                addMagazine();
                break;
            case 3:
                addNewspaper();
                break;

        }
    } while (choice !== 0);
}

function addBook() {
    console.log('---------Hi???n th??? form th??m m???i-----------');
    let documentCode = +readlineSync.question('Enter documentCode :  ');
    let publishingCompany = readlineSync.question('Enter publishingCompany :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let author = readlineSync.question('Enter author :  ');
    let pageNumber = +readlineSync.question('Enter tier :  ');
    let book = new Book(documentCode, publishingCompany, releaseNumber, author, pageNumber);
    if (documentManager.check(book.getDocumentCode()) === -1) documentManager.add(book);
    else {
        console.log('---------Id ???? t???n t???i, vui l??ng nh???p l???i-----------')
        addBook()
    }
}

function addMagazine() {
    console.log('---------Hi???n th??? form th??m m???i-----------');
    let documentCode = +readlineSync.question('Enter documentCode :  ');
    let publishingCompany = readlineSync.question('Enter publishingCompany :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let numberRelease = +readlineSync.question('Enter numberRelease :  ');
    let releaseMonth = +readlineSync.question('Enter releaseMonth :  ');
    let magazine = new Magazine(documentCode, publishingCompany, releaseNumber, numberRelease, releaseMonth);
    if (documentManager.check(magazine.getDocumentCode()) === -1) documentManager.add(magazine);
    else {
        console.log('---------Id ???? t???n t???i, vui l??ng nh???p l???i-----------')
        addMagazine()
    }
}

function addNewspaper() {
    console.log('---------Hi???n th??? form th??m m???i-----------');
    let documentCode = +readlineSync.question('Enter documentCode :  ');
    let publishingCompany = readlineSync.question('Enter publishingCompany :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let releaseDay = +readlineSync.question('Enter releaseDay :  ');
    let newspaper = new Newspaper(documentCode, publishingCompany, releaseNumber, releaseDay);
    if (documentManager.check(newspaper.getDocumentCode()) === -1) documentManager.add(newspaper);
    else {
        console.log('---------Id ???? t???n t???i, vui l??ng nh???p l???i-----------')
        addNewspaper()
    }
}

function deleteDocumentById() {
    let id = +readlineSync.question('Enter id need to find : ')
    console.log(documentManager.deleteDocumentById(id));
}

function display() {
    console.log('------Hi???n th??? s???n ph???m----------')
    console.log(documentManager.findAll());
}

function displayBook() {
    console.log(documentManager.searchDocumentByType(Book));
}

function displayMagazine() {
    console.log(documentManager.searchDocumentByType(Magazine));
}

function displayNewspaper() {
    console.log(documentManager.searchDocumentByType(Newspaper));
}

function editById() {
    let idEdit = +readlineSync.question('Enter id edit : ')
    let index = documentManager.searchDocumentById(idEdit)
    if (index === -1) console.log('Kh??ng c??')
    else {
        if (documentManager.documentList[documentManager.searchDocumentById(idEdit)] instanceof Book) {
            editBook(idEdit);
        }
        if (documentManager.documentList[documentManager.searchDocumentById(idEdit)] instanceof Magazine) {
            editMagazine(idEdit);
        }
        if (documentManager.documentList[documentManager.searchDocumentById(idEdit)] instanceof Newspaper) {
            editNewspaper(idEdit);
        }
    }
}

function editBook(idEdit:number) {
    let temp = idEdit;
    let menu = `---------B???n mu???n s???a thu???c t??nh n??o-----------
    1.documentCode
    2.publishingCompany
    3.releaseNumber
    4.author
    5.pageNumber
    0.Ra menu ch??nh`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                editDocumentCode(temp);
                break;
            case 2:
                editPublishingCompany(temp);
                break;
            case 3:
                editReleaseNumber(temp);
                break;
            case 4:
                editAuthor(temp);
                break;
            case 5:
                editPageNumber(temp);
                break;

        }
    } while (choice !== 0);
}

function editMagazine(idEdit:number) {
    let temp = idEdit;
    let menu = `---------B???n mu???n s???a thu???c t??nh n??o-----------
    1.documentCode
    2.publishingCompany
    3.releaseNumber
    4.numberRelease
    5.releaseMonth
    0.Ra menu ch??nh`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                editDocumentCode(temp);
                break;
            case 2:
                editPublishingCompany(temp);
                break;
            case 3:
                editReleaseNumber(temp);
                break;
            case 4:
                editNumberRelease(temp);
                break;
            case 5:
                editReleaseMonth(temp);
                break;

        }
    } while (choice !== 0);
}

function editNewspaper(idEdit:number) {
    let temp = idEdit;
    let menu = `---------B???n mu???n s???a thu???c t??nh n??o-----------
    1.documentCode
    2.publishingCompany
    3.releaseNumber
    4.releaseDay
    0.Ra menu ch??nh`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                editDocumentCode(temp);
                break;
            case 2:
                editPublishingCompany(temp);
                break;
            case 3:
                editReleaseNumber(temp);
                break;
            case 4:
                editReleaseDay(temp);
                break;
        }
    } while (choice !== 0);
}

function editDocumentCode(temp:number) {
    let documentCode = +readlineSync.question('Enter documentCode want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.documentList[index].setDocumentCode(documentCode);
}

function editPublishingCompany(temp:number) {
    let publishingCompany = readlineSync.question('Enter publishingCompany want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.documentList[index].setPublishingCompany(publishingCompany);
}

function editReleaseNumber(temp:number) {
    let releaseNumber = +readlineSync.question('Enter releaseNumber want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.documentList[index].setReleaseNumber(releaseNumber);
}

function editNumberRelease(temp:number) {
    let numberRelease = +readlineSync.question('Enter numberRelease want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.magazineList[index].setNumberRelease(numberRelease)
}

function editReleaseMonth(temp:number) {
    let releaseMonth = +readlineSync.question('Enter releaseMonth want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.magazineList[index].setReleaseMonth(releaseMonth);
}

function editAuthor(temp:number) {
    let author = readlineSync.question('Enter author want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.bookList[index].setAuthor(author);
}

function editPageNumber(temp:number) {
    let pageNumber = +readlineSync.question('Enter pageNumber want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.bookList[index].setPageNumber(pageNumber);
}

function editReleaseDay(temp:number) {
    let releaseDay = +readlineSync.question('Enter releaseDay want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.newspaperList[index].setReleaseDay(releaseDay);
}


function main() {
    let menu = `---------Menu ch??nh-----------
    1.Th??m m???i t??i li???u
    2.X??a theo m??
    3.Hi???n th??? t???t c??? th??ng tin
    4.Hi???n th??? t???t c??? S??ch
    5.Hi???n th??? t???t c??? T???p ch??
    6.Hi???n th??? t???t c??? B??o
    7.S???a t??i li???u
    0.Tho??t ch????ng tr??nh`
    let choice = -1;
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter Choice : ');
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                deleteDocumentById();
                break;
            case 3:
                display();
                break;
            case 4:
                displayBook();
                break;
            case 5:
                displayMagazine();
                break;
            case 6:
                displayNewspaper();
                break;
            case 7:
                editById();
                break;
        }
    } while (choice !== 0);
}

main();

