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
    let dataItem;
    resultsArray.forEach(result => {
        storageArray.forEach(item => {
            if (result.id === item.id){
                item.timesSelected += result.timesSelected;
                item.timesShown += result.timesShown;
            } else {
                dataItem = {
                    id: result.id, 
                    name: result.name, 
                    timesSelected: result.timesSelected, 
                    timesShown: result.timesShown
                };
                storageArray.push(dataItem);
            }
        });
    });
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