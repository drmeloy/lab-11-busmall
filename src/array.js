export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }

    getProducts() {
        return this.products;
    }

    getRandomProduct() {
        const randomNumber = Math.floor(Math.random() * this.products.length);
        const randomProduct = this.products[randomNumber];
        return randomProduct;
    }

    incrementViews() {
        this.totalViews++;
    }

    incrementSelected() {
        this.totalSelected++;
    }
}