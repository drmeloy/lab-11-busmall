import { compare } from '../src/compare.js';
import { productData } from '../src/api.js';
import { notifyResults } from '../src/results.js';

const test = QUnit.test;

test('compare returns the product with the id that matches the provided product id ', assert => {
    const products = productData;

    const productID = 'bag';

    const expected = {
        id: 'bag',
        img: '../assets/img/bag.jpg',
        name: 'R2-D2 Suitcase',
    };
    
    const product = compare(products, productID);
    
    assert.deepEqual(product, expected);
});

test('notifyResults returns an array with survey product results and statistics', assert => {
    const shownArray = [
        { id: 'shark', name: 'Shark Sleeping Bag', timesShown: 2 },
        { id: 'bag', name: 'R2-D2 Suitcase', timesShown: 9 },
        { id: 'usb', name: 'Tentacle USB', timesShown: 6 },
        { id: 'dragon', name: 'Dragon Meat', timesShown: 4 },
        { id: 'scissors', name: 'Pizza Slice Scissors', timesShown: 4 }
    ];

    const selectedArray = [
        { id: 'bag', name: 'R2-D2 Suitcase', timesSelected: 3 },
        { id: 'usb', name: 'Tentacle USB', timesSelected: 2 },
        { id: 'breakfast', name: 'All-In-One Breakfast Maker', timesSelected: 2 },
        { id: 'dragon', name: 'Dragon Meat', timesSelected: 3 },
        { id: 'cthulhu', name: 'Cthulhu Figurine', timesSelected: 1 }
    ];

    const expected = [
        'You selected the R2-D2 Suitcase 3 out of 9 times; 33%.',
        'You selected the Tentacle USB 2 out of 6 times; 33%.',
        'You selected the Dragon Meat 3 out of 4 times; 75%.'
    ];
    
    const results = notifyResults(shownArray, selectedArray);
    
    assert.deepEqual(results, expected);
});