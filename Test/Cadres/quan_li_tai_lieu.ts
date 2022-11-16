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
    //         console.log('Không có')
    //     } else {
    //         this.searchDocumentById[index] = t;
    //         console.log('Sửa thành công')
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
    let menu = `---------Bạn muốn thêm tài liệu nào-----------
    1.Sách
    2.Tạp chí
    3.Báo
    0.Ra menu chính`
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
    console.log('---------Hiển thị form thêm mới-----------');
    let documentCode = +readlineSync.question('Enter documentCode :  ');
    let publishingCompany = readlineSync.question('Enter publishingCompany :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let author = readlineSync.question('Enter author :  ');
    let pageNumber = +readlineSync.question('Enter tier :  ');
    let book = new Book(documentCode, publishingCompany, releaseNumber, author, pageNumber);
    if (documentManager.check(book.getDocumentCode()) === -1) documentManager.add(book);
    else {
        console.log('---------Id đã tồn tại, vui lòng nhập lại-----------')
        addBook()
    }
}

function addMagazine() {
    console.log('---------Hiển thị form thêm mới-----------');
    let documentCode = +readlineSync.question('Enter documentCode :  ');
    let publishingCompany = readlineSync.question('Enter publishingCompany :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let numberRelease = +readlineSync.question('Enter numberRelease :  ');
    let releaseMonth = +readlineSync.question('Enter releaseMonth :  ');
    let magazine = new Magazine(documentCode, publishingCompany, releaseNumber, numberRelease, releaseMonth);
    if (documentManager.check(magazine.getDocumentCode()) === -1) documentManager.add(magazine);
    else {
        console.log('---------Id đã tồn tại, vui lòng nhập lại-----------')
        addMagazine()
    }
}

function addNewspaper() {
    console.log('---------Hiển thị form thêm mới-----------');
    let documentCode = +readlineSync.question('Enter documentCode :  ');
    let publishingCompany = readlineSync.question('Enter publishingCompany :  ');
    let releaseNumber = +readlineSync.question('Enter releaseNumber :  ');
    let releaseDay = +readlineSync.question('Enter releaseDay :  ');
    let newspaper = new Newspaper(documentCode, publishingCompany, releaseNumber, releaseDay);
    if (documentManager.check(newspaper.getDocumentCode()) === -1) documentManager.add(newspaper);
    else {
        console.log('---------Id đã tồn tại, vui lòng nhập lại-----------')
        addNewspaper()
    }
}

function deleteDocumentById() {
    let id = +readlineSync.question('Enter id need to find : ')
    console.log(documentManager.deleteDocumentById(id));
}

function display() {
    console.log('------Hiển thị sản phẩm----------')
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
    if (index === -1) console.log('Không có')
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
    let menu = `---------Bạn muốn sửa thuộc tính nào-----------
    1.documentCode
    2.publishingCompany
    3.releaseNumber
    4.author
    5.pageNumber
    0.Ra menu chính`
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
    let menu = `---------Bạn muốn sửa thuộc tính nào-----------
    1.documentCode
    2.publishingCompany
    3.releaseNumber
    4.numberRelease
    5.releaseMonth
    0.Ra menu chính`
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
    let menu = `---------Bạn muốn sửa thuộc tính nào-----------
    1.documentCode
    2.publishingCompany
    3.releaseNumber
    4.releaseDay
    0.Ra menu chính`
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
    documentManager.magazineList[index].setDocumentCode(releaseMonth);
}

function editAuthor(temp:number) {
    let author = readlineSync.question('Enter author want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.bookList[index].setDocumentCode(author);
}

function editPageNumber(temp:number) {
    let pageNumber = +readlineSync.question('Enter pageNumber want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.bookList[index].setDocumentCode(pageNumber);
}

function editReleaseDay(temp:number) {
    let releaseDay = +readlineSync.question('Enter releaseDay want to fix :  ')
    let index = documentManager.searchDocumentById(temp)
    documentManager.newspaperList[index].setDocumentCode(releaseDay);
}


function main() {
    let menu = `---------Menu chính-----------
    1.Thêm mới tài liệu
    2.Xóa theo mã
    3.Hiển thị tất cả thông tin
    4.Hiển thị tất cả Sách
    5.Hiển thị tất cả Tạp chí
    6.Hiển thị tất cả Báo
    7.Sửa tài liệu
    0.Thoát chương trình`
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

