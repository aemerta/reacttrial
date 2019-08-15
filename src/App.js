import React, {Component} from 'react';
import './App.css';
import Calendar from './Components/Calendar/CalendarParent';
import ScheduleParent from './Components/Schedule/ScheduleParent';
import DATA from './assets/psy.json';
import dateFns from 'date-fns';




class App extends Component {
  state = {
    //Calendar
    today : new Date(),
    selectedDate: new Date(),
    currentMonth: new Date(),

    doctorsAvailability: [],
    daysNoDoctor: []

  }

  // Functions for changing the states of Calendar
  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };




  render() {

    const dataBase = DATA;

    //Extracting data from JSON 
    var allSchedule = [];


    for (let i = 0; i < dataBase.length; i++) {
      let doctor = dataBase[i];
      var name = doctor.first_name + ' ' + doctor.last_name;
      var schedule = doctor.availabilities;
      var imgUrl = doctor.img;
        for (let j = 0; j < schedule.length; j++) {
          
          allSchedule.push(schedule[j]);
          
        };
      

    };



    return (
      <div className="App container">
        <h1>Booking System</h1>
        <div className="row">

          <Calendar 
            className="col col-6"
            data={dataBase}
            //passing States of Calendar
            today = {this.state.today}  
            selectedDate = {this.state.selectedDate}
            currentMonth = {this.state.currentMonth}           
            allSchedule = {allSchedule}
            //Functions for Calendar
            onDateClick = {this.onDateClick}
            nextMonth = {this.nextMonth}
            prevMonth = {this.prevMonth}
            />
            

          <ScheduleParent 
            data={dataBase}
            doctorName={name}
            //passing States of Calendar
            today={this.state.today}
            selectedDate={this.state.selectedDate}
            currentMonth={this.state.currentMonth}
            //Props
            allSchedule={allSchedule}
            className="col col-6"/>

        </div>
        
      </div>
    );
  }
  
}

export default App;

