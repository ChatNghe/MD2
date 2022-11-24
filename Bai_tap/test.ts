class Product {
    private _name: string;
    private _price: number;
    private _amount: number;
    private _brand: string;

    constructor(name: string, price: number, amount: number, brand: string) {
        this._name = name;
        this._price = price;
        this._amount = amount;
        this._brand = brand;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }
}

class ProductManager {
    listProduct: Product[] = [];

    add(t: Product): void {
        this.listProduct.push(t);
    }

    findByName(name: string): number {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (name === this.listProduct[i].name) {
                return i;
            }
        }
        return -1;
    }

    edit(name: string, t: Product): void {
        let index = this.findByName(name);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listProduct[index] = t;
        }
    }

    remove(name: string): void {
        let index = this.findByName(name);
        if (index === -1) {
            console.log('Không có')
        } else {
            this.listProduct.splice(index, 1);
        }
    }

    findTheApproximateName(t: string) {
        return this.listProduct.filter((el) => el.name.toLowerCase().includes(t.toLowerCase()))
    }

    findByRangeAmount(low: number, high: number) {
        let arr = [];
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].price > low && this.listProduct[i].price < high) {
                arr.push(this.listProduct[i])
            }
        }
        return arr;
    }

    sortPriceIncreasing() {
        return this.listProduct.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    sortPriceDecreasing() {
        return this.listProduct.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    sortAmountDecreasing() {
        return this.listProduct.sort(function (a, b) {
            return b.amount - a.amount;
        });
    }

    findByBrand(brand: string) {
        let list = [];
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].brand === brand) {
                list.push(this.listProduct[i])
            }
        }
        return list
    }

    display() {
        return this.listProduct;
    }
}

let a = new Product('12', 10, 1, '1')
let b = new Product('23', 20, 2, '2')
let c = new Product('34', 30, 3, '3')
let d = new Product('45', 40, 4, '1')
let productManager = new ProductManager()
productManager.add(a)
productManager.add(b)
productManager.add(c)
productManager.add(d)
// console.log(productManager.display())
// productManager.edit('12', d)
// console.log(productManager.display())
// productManager.remove('45')
// console.log(productManager.display())
console.log(productManager.findTheApproximateName('3'))
// console.log(productManager.findByRangeAmount(15, 25))
// console.log(productManager.findByBrand('1'))
// console.log(productManager.sortPriceDecreasing())