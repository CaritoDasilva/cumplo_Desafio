import React, { Component } from 'react'
import DateFilter from './DateFilter';
import { Provider } from 'react-redux'
import store from './store'
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        console.log(props)

    }
    render() {
        return (
            <Provider store={store}>
                <div>
                    <DateFilter />
                </div>
            </Provider>
        )
    }
}
