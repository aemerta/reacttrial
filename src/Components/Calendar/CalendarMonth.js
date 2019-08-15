import React, { Component } from 'react';
import dateFns from 'date-fns';

//Displaying Current Month And Year. Can be Changed through button

export class CalendarMonth extends Component {
    render() {
    const dateFormat = "MMMM YYYY";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.props.prevMonth}>
                        chevron_left
                    </div>
                </div>

                <div className="col col-center">
                    <span>{dateFns.format(this.props.currentMonth, dateFormat)}</span>
                </div>

                <div className="col col-end" onClick={this.props.nextMonth}>
                    <div className="icon">
                        chevron_right
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarMonth


