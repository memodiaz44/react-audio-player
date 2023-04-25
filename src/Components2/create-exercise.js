import React, { Component } from 'react'
import { MdDescription } from 'react-icons/md';

// import DatePicker from 'react-datepicker'
// import "react-datepicker/dust/react-datepicker.css" 





export default class CreateExercises extends Component {
constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.oncChangeDuration = this.onChangedurantionn.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this) ;
    this.onSubmit = this.onSubmit.bind(this)
    
    this.state = {
        username: "", 
        description: "",
        durantion: 0,
        date: new Date(),
        users: []

    }
}

onChangeUsername(e) {
    this.setState({
        username: e.target.value 
    })
}

onChangeDescription(e) {
    this.setState({
        description: e.target.value 
    })
}

onChangedurantionn(e) {
    this.setState({
        durantion: e.target.value 
    })
}

onChangeDate(date) {
    this.setState({
        date: date 
    })
}

onChangeUsers(e) {
    this.setState({
        users: e.target.value 
    })
}

onSubmit(e) {
    e.preverntDefault();

    const exerscise = {
        username: this.state.username,
        description: this.state.description,
        durantion: this.state.durantion,
        date: this.state.date
    }
    window.location = "/";

}



    render () {
        return(
            <div>
                <h1>Crete New Exerecise</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username</label>
                        <select ref="userInput"
                        required
                        className='form-control'
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                            {
                                this.state.user.map(function(user) {
                                    return <option
                                    key={user}
                                    value={user} ></option>
                                })
                            }
                            
                        </select>

                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input type="text"
                        required
                        className='form-control'
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Duration (in minutes)</label>
                        <input
                        type="text"
                        className='from-control'
                        value={this.state.durantion}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Date: </label>
                        <div>
                            {/* <DatePicker 
                            selected={this.state.date}
                            onChnage={this.onChangeDate}/> */}
                        </div>
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Create Exercise Log" className='btn btn-primary'/>
                    </div>


                </form>
            </div>
        )
    }
}