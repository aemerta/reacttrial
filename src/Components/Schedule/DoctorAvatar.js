import React, { Component } from 'react';
import images from '../../assets/1.png';
import './schedule.css';


export class DoctorAvatar extends Component {
    render() {

        return (
            <div className="flex">
                <img className="image-sm" src={images} alt="w"></img>
                <h2>{this.props.doctorName}</h2>               
            </div>
        )
    }
}

export default DoctorAvatar
