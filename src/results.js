export const findResults = (shownArray, selectedArray) => {
    let resultsArray = [];
    shownArray.forEach(shown => {
        selectedArray.forEach(selected => {
            if (shown.id === selected.id){
                const percentage = Math.round((selected.timesSelected / shown.timesShown) * 100);
                resultsArray.push(`You selected the ${selected.name} ${selected.timesSelected} out of ${shown.timesShown} times; ${percentage}%.`);
            }
        });
    });
    return resultsArray;
};

