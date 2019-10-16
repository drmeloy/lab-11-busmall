export const generateSessionChart = (chartLocation, resultsArray) => {
    let labels = [];
    resultsArray.forEach(item => {
        let label;
        label = item.name;
        labels.push(label);
    });

    let shownData = [];
    resultsArray.forEach(item => {
        let data;
        data = item.timesShown;
        shownData.push(data);
    });

    let selectedData = [];
    resultsArray.forEach(item => {
        let data;
        data = item.timesSelected;
        selectedData.push(data);
    });
    
    const chart = new Chart(chartLocation, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Times product selected',
                data: selectedData,
                backgroundColor: 'skyblue',
                type: 'bar'
            }, {
                label: 'Times product shown',
                data: shownData,
                backgroundColor: 'lightgreen'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    return chart;
};

export const generateOverallChart = (chartLocation, localStorageArray) => {
    let labels = [];
    localStorageArray.forEach(item => {
        let label;
        label = item.name;
        labels.push(label);
    });

    let shownData = [];
    localStorageArray.forEach(item => {
        let data;
        data = item.timesShown;
        shownData.push(data);
    });

    let selectedData = [];
    localStorageArray.forEach(item => {
        let data;
        data = item.timesSelected;
        selectedData.push(data);
    });
    
    const chart = new Chart(chartLocation, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Overall times product selected',
                data: selectedData,
                backgroundColor: 'skyblue',
                type: 'bar'
            }, {
                label: 'Overall times product shown',
                data: shownData,
                backgroundColor: 'lightgreen'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    return chart;
};