import { compare } from '../src/compare.js';
import { productData } from '../src/api.js';
import { findResults } from '../src/results.js';

const test = QUnit.test;

test('compare returns the product with the id that matches the provided product id ', assert => {
    const products = productData;

    const productID = 'bag';

    const expected = {
        id: 'bag',
        img: '../assets/img/bag.jpg',
        name: 'R2-D2 suitcase',
    };
    
    const product = compare(products, productID);
    
    assert.deepEqual(product, expected);
});

test('findResults returns an array with survey product results and statistics', assert => {
    const shownArray = [
        { id: 'shark', timesShown: 2 },
        { id: 'bag', timesShown: 9 },
        { id: 'usb', timesShown: 6 },
        { id: 'dragon', timesShown: 4 },
        { id: 'scissors', timesShown: 4 }
    ];

    const selectedArray = [
        { id: 'bag', timesSelected: 3 },
        { id: 'usb', timesSelected: 2 },
        { id: 'breakfast', timesSelected: 2 },
        { id: 'dragon', timesSelected: 3 },
        { id: 'cthulhu', timesSelected: 1 }
    ];

    const expected = [
        'You selected the bag 3 out of 9 times; 33%.',
        'You selected the usb 2 out of 6 times; 33%.',
        'You selected the dragon 3 out of 4 times; 75%.'
    ];
    
    const results = findResults(shownArray, selectedArray);
    
    assert.deepEqual(results, expected);
});