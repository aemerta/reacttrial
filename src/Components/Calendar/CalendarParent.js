import React from "react";
import './calendar.css';
import CalendarMonth from "./CalendarMonth";
import CalendarWeek from "./CalendarWeek";
import CalendarDays from "./CalendarDays";


class Calendar extends React.Component {
  

  render() {
    return (
      <div className="calendar">        
        <CalendarMonth
          allSchedule = {this.props.allSchedule}
          today = {this.props.today}
          selectedDate={this.props.selectedDate}
          currentMonth={this.props.currentMonth}
          nextMonth={this.props.nextMonth}
          prevMonth={this.props.prevMonth}/>

        <CalendarWeek
          allSchedule = {this.props.allSchedule}
          selectedDate={this.props.selectedDate}
          currentMonth={this.props.currentMonth} />

        <CalendarDays
          allSchedule = {this.props.allSchedule}
          today = {this.props.today}
          selectedDate={this.props.selectedDate}
          currentMonth={this.props.currentMonth}
          onDateClick = {this.props.onDateClick} />
      </div>
    );
  }
}

export default Calendar;

