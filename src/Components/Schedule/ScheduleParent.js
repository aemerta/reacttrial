import React, { Component } from 'react';
import DoctorAvatar from './DoctorAvatar.js';
import moment from 'moment';
import DoctorSchedule from './DoctorSchedule.js';
import CalendarSchedule from './CalendarSchedule.js';


 

export class ScheduleParent extends Component {
    
    render() {
        const doctorsSchedules = this.props.data; 
        

        return (
            
         <div>
             <DoctorAvatar
             doctorName = {this.props.doctorName}
             data={this.props.data}
             selectedDate = {this.props.selectedDate}
             currentMonth = {this.props.currentMonth}   />

             <DoctorSchedule
             doctorName = {this.props.doctorName}
             data={this.props.data}
             selectedDate = {this.props.selectedDate}
             currentMonth = {this.props.currentMonth} />

             <CalendarSchedule
              data={this.props.data}
              allSchedule = {this.props.allSchedule}
              today = {this.props.today}
              selectedDate={this.props.selectedDate}
              currentMonth={this.props.currentMonth}
              onDateClick = {this.props.onDateClick} />
         </div>
                 
           
        )
    }
}

export default ScheduleParent

