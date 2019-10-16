import { compare } from './compare.js';

export const obtainLocalStorage = () => {
    let json = localStorage.getItem('results-data');
    let storageArray;
    if (json){
        storageArray = JSON.parse(json);
    } else {
        storageArray = [];
    }
    return storageArray;
};

export const updateLocalStorage = (resultsArray, storageArray) => {
    resultsArray.forEach(result => {
        let match = compare(storageArray, result.id);
        if (!match){
            match = {
                id: result.id,
                name: result.name,
                timesSelected: result.timesSelected,
                timesShown: result.timesShown
            };
            storageArray.push(match);
        } else {
            match.timesSelected += result.timesSelected;
            match.timesShown += result.timesShown;
        }
    });
    return storageArray;
};

export const setLocalStorage = (storageArray) => {
    let json;
    json = JSON.stringify(storageArray);
    localStorage.setItem('results-data', json);
};

export const resultsForStorage = (shownArray, selectedArray) => {
    let resultsArray = [];
    shownArray.forEach(shown => {
        selectedArray.forEach(selected => {
            if (shown.id === selected.id){
                const data = {
                    id: selected.id, 
                    name: selected.name, 
                    timesSelected: selected.timesSelected, 
                    timesShown: shown.timesShown
                };
                resultsArray.push(data);
            }
        });
    });
    return resultsArray;
};