/**
 * Updates the chart
 * @param {object} chart
 * @param {object} dataLabels
 * @param {object} data
 */
function updateChartData(chart, dataLabels, data) {
    chart.data.labels = dataLabels;
    chart.data.datasets[0].data = data;
    chart.update();
}

/**
 *
 * @param label {string}
 * @returns {{data: {datasets: [{tension: number, data: *[], label}], labels: *[]}, options: {plugins: {legend: {display: boolean}}, scales: {x: {display: boolean}, y: {display: boolean}}}, type: string}}
 */
function defaultChartSettings(label) {
    return {
        type: "line",
        data: {
            labels: [],
            datasets: [
                {
                    label: label,
                    data: [],
                    tension: 0.4
                }
            ],
        },
        options: {
            scales: {
                x: {
                    display: false
                },
                y: {
                    display: false
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
        }
    };
}


let charts = {
    fleschReadingEase: {
        id: 'flesch-reading-ease-chart',
        label: 'Flesch Reading Ease:'
    },
    fleschKincaidGradeChart: {
        id: 'flesch-kincaid-grade-chart',
        label: 'Flesch Kincaid Grade:'
    },
    colemanLiauIndex: {
        id: 'coleman-liau-index-chart',
        label: 'Coleman Liau Index:'
    },
    automatedReadabilityIndex: {
        id: 'automated-readability-index-chart',
        label: 'Automated Readability Index:'
    },
    daleChallReadability: {
        id: 'dale-chall-readability-chart',
        label: 'Dale Chall Readability:'
    },
    difficultWords: {
        id: 'difficult-words-chart',
        label: 'Difficult Words:'
    },
    linsearWriteFormula: {
        id: 'linsear-write-formula-chart',
        label: 'Linear Write Formula:'
    },
    gunningFog: {
        id: 'gunning-fog-chart',
        label: 'Gunning Fog:'
    },
    wordCount: {
        id: 'word-count-chart',
        label: 'Word Count:'
    },
    syllableCount: {
        id: 'syllable-count-chart',
        label: 'Syllable Count:'
    }

};

for (let i in charts) {
    charts[i] = new Chart(document.getElementById(charts[i].id), defaultChartSettings(charts[i].label));
}
