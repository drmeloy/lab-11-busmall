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

    let clickedData = [];
    resultsArray.forEach(item => {
        let data;
        data = item.timesClicked;
        clickedData.push(data);
    });

    const backgroundColors = ['lightgreen', 'lightskyblue'];
    
    const chart = new Chart(chartLocation, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '# of Votes',
                data: shownData, clickedData,
                backgroundColor: backgroundColors
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    return chart;
};
