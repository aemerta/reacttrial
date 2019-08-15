import React, { Component } from 'react';
import dateFns from "date-fns";

 //rendering all the dates in the month
export class CalendarDays extends Component {

   

    render() {
        const today = this.props.today;
        const allSchedule = this.props.allSchedule;
        const currentMonth = this.props.currentMonth; 
        const selectedDate = this.props.selectedDate;
        
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const onDateClick = this.props.onDateClick;

        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

//Loop through all the dates 
        while (day <= endDate) {

            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;

                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)  //checking if the date is part of current month
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""  //selected day styling
                            }`}
                        key={day}
                        onClick={() => onDateClick(dateFns.parse(cloneDay))}
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);

            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }      


        return (
            <div className="body">{rows}</div>
        )
    }
}

export default CalendarDays

