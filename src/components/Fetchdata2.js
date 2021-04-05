import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts'; //import Highcharts, { map } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


class FetchData2 extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
           
        }
        // this.state2 = {
        //     items2 : null
        // }
        //const testmap = new Object();
        
        

    }

    componentDidMount() {

        fetch('https://api.github.com/repositories/19438/issues')
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    items: json, 
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            }); // end of fetching

          this.highChartsRender(); //calling highChartsRender() method

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

filter(){ // Own function
    //const { isLoaded, items } = this.state;
    
            //return <div>Loading...</div>;
           //const map1 = items.map(item => (

           const map1 = this.state.items.map(item => (
                //item.id
               item.comments
                //console.log(item.id,item.comments)
                
            ))
           console.log(map1)
           
           
            
            //return map1 //returning "map1 array" to line no. 57
           //this.setState({item : map1})
            // console.log(items2)
}
    
    render() {
            this.filter()
        // const { isLoaded, items } = this.state;

        // if (!isLoaded)
        //     return <div>Loading...</div>;

        return (
            // <div className="App">
            <div  id="dataset">
                
                    {/* {this.filter()} */}
                
                
            </div>
        );

    }

}

export default  FetchData2;