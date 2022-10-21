var element12 = document.getElementById('children_type_island');

if (element12 !== null) {
    var config12 = {
        type: 'line',
        data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.2,
            maintainAspectRation: true,
            datasets: [
                {
                    label: 'Unguja',
                    backgroundColor: 'rgba(188, 71, 73, 0.4)',
                    borderColor: 'rgba(188, 71, 73, 0.8)',
                    // data: $scope.line_graph_opened_tickets,
                    data: [2,3,14,5,3,4,2,4,3,5,4,3],
                    fill: true,
                    lineTension: 0.2
                },
                {
                    type: 'line',
                    label: 'Pemba',
                    data: [13,8,30,7,12,6,5,30,11,11,22,32],
                    backgroundColor: 'rgba(240, 101, 67,0.1)',
                    borderColor: 'rgba(240, 101, 67,0.5)',
                    fill: true,
                    lineTension: 0.2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: false,
                text: ''
            },
            interaction: {
                mode: 'point',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },

            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'Month',
                    },
                }],
                yAxes: [{
                    ticks: { beginAtZero: true, maximumValue: 50 },
                    display: true,
                    scaleLabel: {
                        display: false,
                        labelString: 'Value'
                    },
                }]
            },
            legend: {
                display: false,
                position: 'bottom'
            },
            animation: { duration: 3 }
        }
    };

    var ctx12 = element12.getContext('2d');
    new Chart(ctx12, config12);
}