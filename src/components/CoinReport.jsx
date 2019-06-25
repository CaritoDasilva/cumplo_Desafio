import React, { Component } from 'react'

//Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


//Redux
import { connect, Provider } from 'react-redux';
import store from './store'
import { getDates, dollarsValuesAndDates } from '../actions/datesActions';

//Barchart
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';




class CoinReport extends Component {
    componentDidMount() {
        this.getDollarvalues()
    }


    componentDidUpdate(prevState) {
        this.getDollarvalues(prevState)
    }

    async getDollarvalues(prevState) {

        try {
            const { startDate, endDate } = this.props.dates
            const initialDay = startDate.getDate()
            const initialYear = startDate.getFullYear()
            const initialMonth = startDate.getMonth() + 1
            const finalDay = endDate.getDate()
            const finalYear = endDate.getFullYear()
            const finalMonth = endDate.getMonth() + 1
            if (initialDay === finalDay) {
                const url = `https://api.sbif.cl/api-sbifv3/recursos_api/dolar/${initialYear}/${initialMonth}/${initialDay}/05?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json`
            }
            const url = `https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${initialYear}/${initialMonth}/dias_i/${initialDay}/${finalYear}/${finalMonth}/dias_f/${finalDay}?apikey=9c84db4d447c80c74961a72245371245cb7ac15f&formato=json`
            const response = await fetch(url);
            const responseJson = await response.json()
            const _data = []
            const data = responseJson.Dolares
            data.map(dollar => {
                return _data.push({
                    value: parseInt(dollar.Valor),
                    date: dollar.Fecha
                })
            })
            if (prevState === undefined) {
                if (this.props.dates.dollars.length === 0) {
                    return this.props.dollarsValuesAndDates(_data)
                }
            }
            if (prevState.dates.dollars !== this.props.dates.dollars) {
                return null
            }
            return this.props.dollarsValuesAndDates(_data)
        }
        catch (error) {
            throw error
        }
    }

    render() {

        return (
            <Provider store={store}>
                <div className="responsiveBarContainer">
                    <Row>
                        <Col xs={12} md={8}>
                            <BarChart
                                width={500}
                                height={300}
                                data={this.props.dates.dollars}
                                margin={{
                                    top: 5, right: 30, left: 20, bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </Col>
                    </Row>
                </div>
            </Provider>
        )
    }
}

const mapStateToProps = state => ({
    dates: state.dates
})

export default connect(mapStateToProps, { getDates, dollarsValuesAndDates })(CoinReport)
