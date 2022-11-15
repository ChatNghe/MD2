class Product {
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    get getName(): string {
        return this.name;
    }

    get getPrice(): number {
        return this.price;
    }

    set setName(name: string) {
        this.name = name;
    }

    set setPrice(price: number) {
        this.price = price
    }
}
class ProductManager {
    private products: object[]= [];
    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product:object) {
        this.products.push(product);
    }

}
let laptop = new Product("Laptop", 20000);
let iphone = new Product("Iphone", 10000);
let productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);