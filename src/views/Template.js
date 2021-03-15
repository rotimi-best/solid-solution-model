import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import {
  Route,
  BrowserRouter
} from "react-router-dom";

import ScatterChartWithCustomMarkers from "./scatter & bubble charts/Scatter Chart with Custom Markers";


class Template extends Component {
  
  render() {    
    return (
		<div>
			<Navbar bg="dark" variant="dark">
				<button className="d-lg-none toggle-sidebar"><span className="navbar-toggler-icon"></span></button>
				<Navbar.Brand href="/">МОДЕЛИРОВАНИЯ ЧЕТЫРЕХКОМПОНЕНТНЫХ ТВЕРДЫХ РАСТВОРОВ - In<sub>x</sub>Ga<sub>1-x</sub>As<sub>y</sub>P<sub>1-y</sub></Navbar.Brand><span className="hidden-xs text-muted">Maxima Web</span>
			  </Navbar>		  
			  <BrowserRouter>		  
					<Row>
						
						{/* <Nav to="/" className="flex-sm-column" id="sidebar">
							<ListGroup className="nav nav-sidebar flex-sm-column">
								
								<ListGroup.Item>
									<a href="#scatterCharts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><span>SCATTER & BUBBLE CHARTS</span></a>
								</ListGroup.Item>
								<ListGroup>
									<ListGroup className="sub-menu collapse" id="scatterCharts">
										<ListGroup.Item> <NavLink to="/scatter-chart">Statter Chart</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to="/scatter-chart-with-custom-marker">Scatter Chart with Custom Marker</NavLink></ListGroup.Item>
										<ListGroup.Item> <NavLink to="/bubble-chart">Bubble Chart</NavLink></ListGroup.Item>
									</ListGroup>
								</ListGroup>
								<ListGroup.Item role="separator" className="divider"></ListGroup.Item>
								
							</ListGroup>
						</Nav> */}
						
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content">
									<Route path="/" component={ScatterChartWithCustomMarkers}/>
								</div>
							</Container>
						</Col>					
					</Row>			
			  </BrowserRouter>	
			</div>
    );
  }
}

export default Template;