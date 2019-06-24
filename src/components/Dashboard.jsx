import React, { Component } from 'react'
import DateFilter from './DateFilter'
import CoinReport from './CoinReport'
import CardReport from './CardReport'
import './DateFilter.scss';

import { Provider } from 'react-redux'
import store from './store'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class Dashboard extends Component {

    render() {
        return (
            <Provider store={store}>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>DÓLAR ONLINE</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 8, offset: 1 }}>
                        <h4>¿Quieres informarte sobre las fluctuaciones del dólar en un rango de fechas?</h4>
                    </Col>
                    <h5>Introduce las fechas en las que necesitas conocer y obtén un informe detallado para tomar decisiones informadas.</h5>
                    <Col md={{ span: 8, offset: 1 }}>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DateFilter />
                    </Col>
                </Row>
                <Row className="reportsContainer">
                    <Col md={8}>
                        <CoinReport />
                    </Col>
                    <Col md={4}>
                        <CardReport />
                    </Col>
                </Row>
            </Provider>
        )
    }
}

