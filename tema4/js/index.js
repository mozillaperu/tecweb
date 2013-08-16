$(function () {
        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Lenguajes de Programación más usados en el Mundo',
                x: -20 //center
            },
            subtitle: {
                text: 'Recurso: www.tiobe.com',
                x: -20
            },
            xAxis: {
                categories: ['Agosto 2013', 'Agosto 2012']
            },
            yAxis: {
                title: {
                    text: 'Porcentaje'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '%'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Java',
                data: [15.98, 15.98 + 0.37]
            }, {
                name: 'C',
                data: [15.97, 15.97 + 2.96]
            }, {
                name: 'C++',
                data: [9.37, 9.37 - 0.04]
            },{
                name: 'Objective - C',
                data: [8.08, 8.08 + 1.46]
            },{
                name: 'PHP',
                data: [6.69, 5.52]
            },{
                name: 'C#',
                data: [6.12, 6.12 + 0.47]
            },{
                name: 'Visual Basic',
                data: [3.87, 3.87 + 1.46]
            },{
                name: 'Python',
                data: [3.60, 3.60 + 0.27]
            },{
                name: 'Javascript',
                data: [2.09, 2.09 - 0.73]
            },{
                name: 'Ruby',
                data: [2.07, 2.07 - 0.38]
            }]
        });
    });
    
