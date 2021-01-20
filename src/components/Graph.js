import React from 'react';
import Highcharts from 'highcharts';

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                name: 'No. of Issues',
                data: [
                    {
                        comments: 0,
                      y: 8,
                      color: '#5d2ecc'
                    },
                    {
                        comments: 1,
                      y: 7,
                      color: '#9b59b6'
                    },
                    {
                      comments: 2,
                      y: 4,
                      color: '#3498db'
                    },
                    {
                        comments: 3,
                      y: 1,
                      color: '#f1c40f'
                    },
                    {
                        comments: 4,
                      y: 2,
                      color: '#2ecc71'
                    },
                    {
                        comments: 5,
                      y: 1,
                      color: '#f1c40f'
                    },
                    {
                        comments: 6,
                      y: 2,
                      color: '#2ecc71'
                    },
                    {
                        comments: 7,
                      y: 1,
                      color: '#f1c40f'
                    },
                    {
                        comments: 11,
                      y: 1,
                      color: '#f1c40f'
                    },
                    {
                        comments: 12,
                      y: 2,
                      color: '#2ecc71'
                    },
                    {
                        comments: 15,
                      y: 1,
                      color: '#f1c40f'
                    },
                ]
            }]
        }
    }

    highChartsRender() {
        Highcharts.chart({
            chart: {
              type: 'pie',
              renderTo: 'dataset'
            },
            title: {
              verticalAlign: 'middle',
              floating: true,
              text: 'Based on comment number created <br> on issue',
              style: {
                fontSize: '10px',
              }
            },
            plotOptions: {
              pie: {
                dataLabels: {
                    format: '{point.comments}: {point.percentage:.1f} %'
                },
                innerSize: '70%'
              }
            },
            series: this.state.series
        });
    }
    componentDidMount() {
        this.highChartsRender();
    }

   	render() {
       	return (
            <div id="dataset">
            </div>
       	);
   	}
}

export default Graph;