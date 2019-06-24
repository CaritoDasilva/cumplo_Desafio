import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

//Redux
import { connect, Provider } from 'react-redux';
import store from './store'
import { getDates, setAverageDollar } from '../actions/datesActions';

class CardReport extends Component {


    componentDidUpdate(prevProps, prevState) {

        if (this.props.dates.dollars.length === 0) {
            return null
        }
        if (this.props.dates.dollarAverages !== prevProps.dates.dollarAverages) {
            return null
        }
        if (Object.values(this.props.dates.dollarAverages).length === 0) {
            const getDollarData = this.getAverageValues()
            console.log(this.props)
            return this.props.setAverageDollar(getDollarData)
        }
        if (Object.values(prevProps.dates.dollarAverages).length === 0) {
            return null
        }


        if (this.props.dates.dollars.length !== prevProps.dates.dollars.length) {

            const getDollarData = this.getAverageValues()
            return this.props.setAverageDollar(getDollarData)
            console.log(this.props)


        }
        return null



    }




    getAverageValues() {

        const { dollars } = this.props.dates
        console.log(dollars)
        const dollarsValue = dollars.map(dollar => dollar.value)
        const dollarsValueOrder = dollarsValue.sort()
        const minValueDollar = dollarsValueOrder[0]
        const maxValueDollar = dollarsValueOrder[dollarsValueOrder.length - 1]
        const dollarProm = Math.round((dollarsValueOrder.reduce((a, b) => a + b)) / dollarsValueOrder.length)
        const dollarAverages = {
            minValueDollar: minValueDollar,
            maxValueDollar: maxValueDollar,
            dollarProm: dollarProm
        }
        return dollarAverages
    }


    render() {
        console.log(this.props)

        return (
            <Provider store={store}>

                <div>
                    <Card>
                        <Card.Body>
                            <h3>Máx. Valor:</h3>
                            <h5>{this.props.dates.dollarAverages.maxValueDollar}</h5>
                            <h3>Min. Valor:</h3>
                            <h5>{this.props.dates.dollarAverages.minValueDollar}</h5>
                            <h3>Valor Promedio:</h3>
                            <h5>{this.props.dates.dollarAverages.dollarProm}</h5>
                        </Card.Body>
                    </Card>
                </div>
            </Provider>

        )
    }
}

const mapStateToProps = state => ({
    dates: state.dates
})

export default connect(mapStateToProps, { getDates, setAverageDollar })(CardReport)