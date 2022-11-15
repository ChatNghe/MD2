export class Product{
    private id !: number;
    private name !: number;
    private price !: number;
    private amount !: number;
    private description !: number;


    constructor(id: number, name: number, price: number, amount: number, desciption: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.amount = amount;
        this.description = desciption;
    }

}

