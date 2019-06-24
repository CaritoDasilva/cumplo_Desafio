import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

//Redux
import { connect, Provider } from 'react-redux';
import store from './store'
import { getDates } from '../actions/datesActions';

class CardReport extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    componentDidUpdate(prevState) {
        console.log(this.props)
        this.getAverageValues()
    }
    getAverageValues() {
        const { dollars } = this.props.dates
        console.log(dollars)
        // const minValue = 
    }
    render() {
        return (
            <Provider store={store}>

                <div>
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </div>
            </Provider>

        )
    }
}

const mapStateToProps = state => ({
    dates: state.dates
})

export default connect(mapStateToProps, { getDates })(CardReport)