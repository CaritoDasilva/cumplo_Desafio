import React, { Component } from 'react'
import DateFilter from './DateFilter'
import CoinReport from './CoinReport'
import CardReport from './CardReport'

import { Provider } from 'react-redux'
import store from './store'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class Dashboard extends Component {

    render() {
        return (
            <Provider store={store}>
                <Row>
                    <Col>
                        <DateFilter />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <CoinReport />
                    </Col>
                    <Col md={6}>
                        <CardReport />
                    </Col>
                </Row>
            </Provider>
        )
    }
}

