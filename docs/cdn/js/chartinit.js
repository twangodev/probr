/**
 * Updates the chart
 * @param {object} chart
 * @param {object} dataLabels
 * @param {object} data
 * @param {string} color
 */
function updateChartData(chart, dataLabels, data, color) {
    if (color === '') {
        color = '#FFFFFF'
    } else {
        color = colors[color]
    }
    chart.data.labels = dataLabels;
    chart.data.datasets[0].data = data;
    chart.data.datasets[0].backgroundColor = color
    chart.data.datasets[0].borderColor = color + 'BF'
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
        label: 'FRE'
    },
    fleschKincaidGradeChart: {
        id: 'flesch-kincaid-grade-chart',
        label: 'FKG'
    },
    colemanLiauIndex: {
        id: 'coleman-liau-index-chart',
        label: 'CLI'
    },
    automatedReadabilityIndex: {
        id: 'automated-readability-index-chart',
        label: 'ARI'
    },
    daleChallReadability: {
        id: 'dale-chall-readability-chart',
        label: 'DCR'
    },
    difficultWords: {
        id: 'difficult-words-chart',
        label: 'DW'
    },
    linsearWriteFormula: {
        id: 'linsear-write-formula-chart',
        label: 'LWF'
    },
    gunningFog: {
        id: 'gunning-fog-chart',
        label: 'GF'
    },
    wordCount: {
        id: 'word-count-chart',
        label: 'WC'
    },
    syllableCount: {
        id: 'syllable-count-chart',
        label: 'SC'
    }

};

for (let i in charts) {
    charts[i] = new Chart(document.getElementById(charts[i].id), defaultChartSettings(charts[i].label));
}
