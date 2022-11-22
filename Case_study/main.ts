class Documents {
    private name !: string;
    private id !: string;
    private numberOfPage !: number;
    private publicationDate !: string;
    private amount !: number;
    private purchases: number;


    constructor(name: string, id: string, numberOfPage: number, publicationDate: string, amount: number, purchases: number) {
        this.name = name;
        this.id = id;
        this.numberOfPage = numberOfPage;
        this.publicationDate = publicationDate;
        this.amount = amount;
        this.purchases = purchases;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    // getId(): string {
    //     return this.id;
    // }
    //
    // setId(value: string) {
    //     this.id = value;
    // }

    getNumberOfPage(): number {
        return this.numberOfPage;
    }

    setNumberOfPage(value: number) {
        this.numberOfPage = value;
    }

    getPublicationDate(): string {
        return this.publicationDate;
    }

    setPublicationDate(value: string) {
        this.publicationDate = value;
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(value: number) {
        this.amount = value;
    }

    getPurchases(): number {
        return this.purchases;
    }

    setPurchases(value: number) {
        this.purchases = value;
    }
}

class Book extends Documents {
    private author!: string;

    constructor(name: string, id: string, numberOfPage: number, publicationDate: string, amount: number, purchases: number, author: string) {
        super(name, id, numberOfPage, publicationDate, amount, purchases);
        this.author = author;
    }

    getAuthor(): string {
        return this.author;
    }

    setAuthor(value: string) {
        this.author = value;
    }
}

class Magazine extends Documents {
    private type !: string;

    constructor(name: string, id: string, numberOfPage: number, publicationDate: string, amount: number, purchases: number, type: string) {
        super(name, id, numberOfPage, publicationDate, amount, purchases);
        this.type = type;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string) {
        this.type = value;
    }
}

class Newspaper extends Documents {
    private newsAgency !: string;

    constructor(name: string, id: string, numberOfPage: number, publicationDate: string, amount: number, purchases: number, newsAgency: string) {
        super(name, id, numberOfPage, publicationDate, amount, purchases);
        this.newsAgency = newsAgency;
    }

    getNewsAgency(): string {
        return this.newsAgency;
    }

    setNewsAgency(value: string) {
        this.newsAgency = value;
    }
}