import { productData } from './api.js';
import { ProductArray } from './array.js';

const productImages = document.querySelectorAll('img');
const productSelectors = document.querySelectorAll('input');
const productNames = document.querySelectorAll('p.product-name');
const allProducts = new ProductArray(productData);

let selectionsRemaining = 25;

let randomProduct1;
let randomProduct2;
let randomProduct3;

const populateOptions = () => {
    randomProduct1 = allProducts.getRandomProduct();
    randomProduct2 = allProducts.getRandomProduct();
    randomProduct3 = allProducts.getRandomProduct();

    while (randomProduct1 === randomProduct2 || randomProduct1 === randomProduct3) {
        randomProduct1 = allProducts.getRandomProduct();
    }
    while (randomProduct2 === randomProduct3) {
        randomProduct2 = allProducts.getRandomProduct();
    }
};

const populateValues = () => {
    productSelectors.forEach((input, i) => {
        if (i === 0){
            input.value = randomProduct1.id;
        }
        if (i === 1){
            input.value = randomProduct2.id;
        }
        if (i === 2){
            input.value = randomProduct3.id;
        }
    });
};

const populateNames = () => {
    productNames.forEach((p, i) => {
        if (i === 0){
            p.textContent = randomProduct1.name;
        }
        if (i === 1){
            p.textContent = randomProduct2.name;
        }
        if (i === 2){
            p.textContent = randomProduct3.name;
        }
    });
};

const populateImages = () => {
    productImages.forEach((img, i) => {
        if (i === 0){
            img.src = randomProduct1.img;
        }
        if (i === 1){
            img.src = randomProduct2.img;
        }
        if (i === 2){
            img.src = randomProduct3.img;
        }
    });
};

const generate = () => {
    populateOptions();
    populateValues();
    populateNames();
    populateImages();
};

generate();