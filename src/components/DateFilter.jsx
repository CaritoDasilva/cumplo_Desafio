import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const date = new Date()
export default class DateFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateAct: Math.round(Date.now()),
            startDate: new Date(date.getFullYear(), date.getMonth(), 1),
            endDate: new Date()
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);

    }


    componentDidMount() {
        console.log(this.state)
    }


    handleChangeStart(date) {
        console.log(date)
        this.setState({
            startDate: date
        });


    }

    handleChangeEnd(date) {
        console.log(date)
        this.setState({
            endDate: date
        });


    }

    render() {
        const { startDate, endDate } = this.state
        return (
            <div>
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={this.handleChangeStart}
                />
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    onChange={this.handleChangeEnd}
                    minDate={startDate}
                />
            </div>
        )
    }
}

