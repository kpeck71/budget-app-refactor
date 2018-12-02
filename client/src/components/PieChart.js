import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
  constructor(props){
     super(props);
     this.state = {
       chartData: props.chartData
     }
   }

   static defaultProps = {
     displayTitle:true,
     displayLegend: true,
     legendPosition:'right',
   }

   render(){
     return (
       <div className="chart">
         <Pie
           data={this.props.chartData}
           options={{
             title:{
               display:this.props.displayTitle,
               text:'Spending Types',
               fontSize:25
             },
             legend:{
               display:this.props.displayLegend,
               position:this.props.legendPosition
             }
           }}
         />
         </div>
     )
   }
 }


export default PieChart;
