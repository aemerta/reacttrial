import React, { Component } from 'react';
import dateFns from "date-fns";



//rendering the days in a week (sun,tue,wed....etc)

export class CalendarWeek extends Component {
    render() {
    const dateFormat = "dddd";
    const days = [];
    let startDate = dateFns.startOfWeek(this.props.currentMonth);

    for (let i = 0; i < 7; i++) {
        days.push(
          <div className="col col-center" key={i}>
            {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
          </div>
        );
      }
        return (            
            <div className="days row">{days}</div>    
        );
    }
}

export default CalendarWeek


  