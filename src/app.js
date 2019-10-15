import { productData } from './api.js';
import { ProductArray } from './array.js';
import { compare } from './compare.js';

const counter = document.getElementById('counter');
const explanationSection = document.getElementById('explanation');
const surveySection = document.getElementById('survey-section');
const resultsSection = document.getElementById('results');
const productImages = document.querySelectorAll('img');
const productSelectors = document.querySelectorAll('input');
const productNames = document.querySelectorAll('p.product-name');
const allProducts = new ProductArray(productData);

let selectionsRemaining = 25;
counter.textContent = selectionsRemaining;

let randomProduct1;
let randomProduct2;
let randomProduct3;
let shownArray = [];
let selectedArray = [];
let previousProduct1;
let previousProduct2;
let previousProduct3;

const incrementShown = (shownArray, itemID) => {
    let shown = compare(shownArray, itemID);
    if (!shown){
        shown = {
            id: itemID,
            timesShown: 1
        };
        shownArray.push(shown);
    } else {
        shown.timesShown++;
    }
};

const incrementSelected = (selectedArray, choiceID) => {
    let selected = compare(selectedArray, choiceID);
    if (!selected){
        selected = {
            id: choiceID,
            timesSelected: 1
        };
        selectedArray.push(selected);
    } else {
        selected.timesSelected++;
    }
};

const assignOptions = () => {
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

const checkPrevious = () => {
    while (randomProduct1 === previousProduct1 || randomProduct1 === previousProduct2 || randomProduct1 === previousProduct3){
        randomProduct1 = allProducts.getRandomProduct();
    }
    while (randomProduct2 === previousProduct1 || randomProduct2 === previousProduct2 || randomProduct2 === previousProduct3){
        randomProduct2 = allProducts.getRandomProduct();
    }
    while (randomProduct3 === previousProduct1 || randomProduct3 === previousProduct2 || randomProduct3 === previousProduct3){
        randomProduct3 = allProducts.getRandomProduct();
    }
    while (randomProduct1 === randomProduct2 || randomProduct1 === randomProduct3) {
        randomProduct1 = allProducts.getRandomProduct();
    }
    while (randomProduct2 === randomProduct3) {
        randomProduct2 = allProducts.getRandomProduct();
    }
};

const populateOptions = () => {
    assignOptions();
    checkPrevious();
    [randomProduct1, randomProduct2, randomProduct3].forEach (product => {
        incrementShown(shownArray, product.id);
    });
    previousProduct1 = randomProduct1;
    previousProduct2 = randomProduct2;
    previousProduct3 = randomProduct3;
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
    console.log(shownArray);
    console.log(selectedArray);
};

const swapPage = () => {
    explanationSection.classList.add('hidden');
    surveySection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
};

productSelectors.forEach((input) => {
    input.addEventListener('click', (event) => {
        incrementSelected(selectedArray, event.target.value);
        selectionsRemaining--;
        if (selectionsRemaining < 1){
            swapPage();
            return;
        }
        counter.textContent = selectionsRemaining;
        generate();
    });
});

generate();
