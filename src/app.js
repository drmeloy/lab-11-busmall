import { productData } from './api.js';
import { ProductArray } from './array.js';
import { compare } from './compare.js';
import { notifyResults } from './results.js';
import { resultsForStorage, obtainLocalStorage, updateLocalStorage, setLocalStorage } from './storage.js';
import { generateSessionChart } from './chart.js';

const counter = document.getElementById('counter');
const counterContainer = document.getElementById('counter-container');
const explanationSection = document.getElementById('explanation');
const surveySection = document.getElementById('survey-section');
const resultsSection = document.getElementById('results-section');
const headerSection = document.getElementById('header');
const productImages = document.querySelectorAll('img');
const productSelectors = document.querySelectorAll('input');
const productNames = document.querySelectorAll('p.product-name');
const chartsSection = document.getElementById('charts');
const sessionChart = document.getElementById('session-chart').getContext('2d');
const overallChart = document.getElementById('overall-chart').getContext('2d');
const allProducts = new ProductArray(productData);

let selectionsRemaining = 25;
counter.textContent = selectionsRemaining;

let randomProduct1;
let randomProduct2;
let randomProduct3;
let previousProduct1;
let previousProduct2;
let previousProduct3;
let shownArray = [];
let selectedArray = [];

const incrementShown = (shownArray, itemID, itemName) => {
    let shown = compare(shownArray, itemID);
    if (!shown){
        shown = {
            id: itemID,
            name: itemName,
            timesShown: 1
        };
        shownArray.push(shown);
    } else {
        shown.timesShown++;
    }
};

const incrementSelected = (selectedArray, choiceID, choiceName) => {
    let selected = compare(selectedArray, choiceID);
    if (!selected){
        selected = {
            id: choiceID,
            name: choiceName,
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
        incrementShown(shownArray, product.id, product.name);
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

const generateChoices = () => {
    populateOptions();
    populateValues();
    populateNames();
    populateImages();
};

const swapPage = () => {
    headerSection.classList.add('hidden');
    explanationSection.classList.add('hidden');
    surveySection.classList.add('hidden');
    counterContainer.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    chartsSection.classList.remove('hidden');
};

const makeResultLine = (result) => {
    const li = document.createElement('li');
    li.textContent = result;
    return li;
};

const generateData = () => {
    const resultsArray = notifyResults(shownArray, selectedArray);
    const ul = document.createElement('ul');
    resultsSection.appendChild(ul);
    resultsArray.forEach(result => {
        const li = makeResultLine(result);
        ul.appendChild(li);
    });
};

const doStorageThings = () => {
    const resultsArray = resultsForStorage(shownArray, selectedArray);
    const storageArray = obtainLocalStorage();
    const updatedStorageArray = updateLocalStorage(resultsArray, storageArray);
    setLocalStorage(updatedStorageArray);
};

productSelectors.forEach((input) => {
    input.addEventListener('click', (event) => {
        const prodName = document.querySelector('input:checked ~ p').textContent;
        incrementSelected(selectedArray, event.target.value, prodName);
        selectionsRemaining--;
        if (selectionsRemaining < 1){
            swapPage();
            generateData();
            doStorageThings();
            const resultsArray = resultsForStorage(shownArray, selectedArray);
            generateSessionChart(sessionChart, resultsArray);
            return;
        }
        counter.textContent = selectionsRemaining;
        generateChoices();
    });
});

generateChoices();