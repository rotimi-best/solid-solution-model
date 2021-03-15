import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './spinner.css'
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const RunApp = ({ isLoading, handleLoading }) => {

  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      {isLoading ? <div className="spinner-grow" /> : (
        <Button variant="dark" onClick={handleLoading}>Запустить</Button>
      )}
    </div>
  )
}
const CustomLabels = () => {

  return (
    <React.Fragment>
      <div className="top-element-label">
        <span>GaAs</span>
        <span>InAs</span>
      </div>
      <div className="lower-element-label">
        <span>GaP</span>
        <span>Inp</span>
      </div>
    </React.Fragment>
  )
}

const Hidder = ({ backgroundColor = '#32373a', position = 'left'}) => {

	return (
		<div
			style={{
				backgroundColor,
				position: 'absolute',
				height: 20, width: 100, top:525,
				zIndex: 200,
				right: position === 'left' ? 'unset' : 30
		}} />
	)
}

const TempratureDrawer = () => {
  const height = 270

	return (
		<div>
			<div
				style={{
					background: 'rgba(0,0,0,0)',
					position: 'absolute',
					height: height,
					lineHeight: `${height}px`,
          left: 355,
					width: 250,
					top: 170,
					zIndex: 200,
          borderRadius: '60%',
          textAlign: 'left',
          border: '2px solid orange',
          color: 'orange'
				}}
			>903<sub>o</sub>C</div>
		</div>
	)
}

const TempratureDrawer2 = () => {
  const height = 180

	return (
		<div>
			<div
				style={{
					background: 'rgba(0,0,0,0)',
					position: 'absolute',
					height,
					lineHeight: `${height}px`,
          left: 400,
					width: height - 20,
					top: 220,
					zIndex: 200,
          borderRadius: '60%',
          textAlign: 'right',
          border: '2px solid blue',
          color: 'blue'
				}}
			>773<sub>o</sub>C</div>
		</div>
	)
}
 
class ScatterChartWithCustomMarkers extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
    this.state = {
      built: false,
      loading: true,
    }
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}

  handleLoading = () => {
    this.setState({
      isLoading: true
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
        built: true,
      })
    }, 2000);
  }
	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
      width: 774,
      height: 400,
			axisX: {
				title: "X"
			},
			axisY: {
				title: "Y",
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "line",
				name: "Раствор 1",
				markerType: "triangle",
				showInLegend: true,
				toolTipContent: "<span style=\"color:#4F81BC \">{name}</span><br>X: {x}<br>Y: {y}",
				dataPoints: [
					{ x: 1.0, y: 0 },
					{ x: 0.9, y: 0.2 },
					{ x: 0.8, y: 0.4 },
					{ x: 0.6, y: 0.85 },
					{ x: 0.58, y: 0.9 },
				]
			},
			{
				type: "scatter",
				name: "Раствор 2",
				showInLegend: true,
				markerType: "cross",
				toolTipContent: "<span style=\"color:#C0504E \">{name}</span><br>X: {x}<br>Y: {y}",
				dataPoints: [
					{ x: 0.7, y: 0.6 },
					{ x: 0.70, y: 0.65 },
					{ x: 0.6, y: 0.8 },
					{ x: 0.0, y: 0.0 },
					{ x: 0.4, y: 0.3 },
				]
			}]
		}

    if (this.state.isLoading || !this.state.built) {
      return <RunApp {...this.state} handleLoading={this.handleLoading} />
    }
		
		return (
		<div>
			<h1 style={{ textAlign: 'center', marginBottom: 30}}>Твердый раствор - In<sub>x</sub>Ga<sub>1-x</sub>As<sub>y</sub>P<sub>1-y</sub></h1>
      <CustomLabels/>
      <TempratureDrawer />
      <TempratureDrawer2 />
			<Hidder backgroundColor="#fff" position="left"/>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			<Hidder backgroundColor="#fff" position="right"/>
		</div>
		);
	}
}

export default ScatterChartWithCustomMarkers;