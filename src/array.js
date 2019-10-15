export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }

    getProducts() {
        return this.products;
    }

    getRandomProduct() {
        const randomProduct = this.products[(Math.floor(Math.random() * this.products.length))];
        return randomProduct;
    }

    incrementViews() {
        this.totalViews++;
    }

    incrementSelected() {
        this.totalSelected++;
    }
}