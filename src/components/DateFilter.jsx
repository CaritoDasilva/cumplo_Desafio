import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './DateFilter.scss';
import Form from 'react-bootstrap/Form';


//Redux
import { connect, Provider } from 'react-redux';
import { changeDatePickerStart, changeDatePickerEnd } from '../actions/datesActions';
import store from './store'


class DateFilter extends Component {

    render() {
        const { startDate, endDate } = this.props.dates
        return (
            <Provider store={store}>
                <div className="filterDateContainer">
                    <Form>
                        <Form.Group>
                            <Form.Label className="fontLabel">Desde:</Form.Label>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={startDate}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                maxDate={endDate}
                                onChange={this.props.changeDatePickerStart}
                                className="filterDate"
                            />
                            <Form.Label className="fontLabel">Hasta:</Form.Label>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={endDate}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                onChange={this.props.changeDatePickerEnd}
                                minDate={startDate}
                                className="filterDate"
                            />
                        </Form.Group>
                    </Form>
                </div>
            </Provider>
        )
    }
}

const mapStateToProps = state => ({
    dates: state.dates
})

export default connect(mapStateToProps, { changeDatePickerStart, changeDatePickerEnd })(DateFilter)