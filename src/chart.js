export const generateChart = (chartLocation, dataArray) => {
    let labels = [];
    dataArray.forEach(item => {
        let label;
        label = item.name;
        labels.push(label);
    });

    let shownData = [];
    dataArray.forEach(item => {
        let data;
        data = item.timesShown;
        shownData.push(data);
    });

    let selectedData = [];
    dataArray.forEach(item => {
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