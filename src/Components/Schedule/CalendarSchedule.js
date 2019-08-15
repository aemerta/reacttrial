import React, { Component } from 'react'
import moment from 'moment';
import dateFns from 'date-fns';

export class CalendarSchedule extends Component {
    render() {
        const today = this.props.today;
        const currentMonth = this.props.currentMonth; 
        const selectedDate = this.props.selectedDate;

        const allSchedule = this.props.allSchedule;
        const printAllSchedule = [];
        const pastSchedule = [];

        for (let i = 0; i < allSchedule.length; i++) {

            if (allSchedule[i] > today) {
                const deleteSchedule = allSchedule[i]
                pastSchedule.push(
                    <li key={i}>{deleteSchedule}</li>
                )
            } else {

                const pushAllSchedule = moment.unix(allSchedule[i]).format('llll');
                printAllSchedule.push(
                    <li key={i}>{pushAllSchedule}</li>
                );

            }



        }

            console.log(today);
            console.log(pastSchedule);
            console.log(printAllSchedule);
        
        return (
            <div className="flex">
                <ul>
                    {printAllSchedule}
                </ul>
                <ul>
                    {pastSchedule}
                </ul>
            
            </div>
        )
    }
}

export default CalendarSchedule
