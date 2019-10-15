export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }

    getRandomProduct() {
        const randomNumber = Math.floor(Math.random() * this.products.length);
        const randomProduct = this.products[randomNumber];
        return randomProduct;
    }
}