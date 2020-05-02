import React,{Component} from 'react';

class Clock extends Component{
    
    state ={days: 0,hours: 0,minutes: 0,seconds: 0};

    componentWillMount(){
        this.getTimeUntil();
    }

    componentDidMount(){
        this.counterInterval = setInterval( () => this.getTimeUntil() ,1000);
    }

    componentWillUnmount(){
        clearInterval(this.counterInterval);
    }

    getTimeUntil = () =>{
        const datemill = Date.parse(this.props.deadline) - Date.parse(new Date());

        const days = Math.floor((datemill / (60*60*24*1000)));
        const hours   = Math.floor(((datemill / (1000*60*60)) % 24));
        const minutes = Math.floor(((datemill / (1000*60)) % 60));
        const seconds = Math.floor((datemill / 1000) % 60);

        this.setState({days,hours,minutes,seconds});
    }

    render(){
        return(
            <div>
            <div className="date">{this.state.days < 10 ? `0${this.state.days}` : this.state.days } Days</div>
                <div className="date">{this.state.hours < 10 ? `0${this.state.hours}` : this.state.hours} Hours</div>
                <div className="date">{this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes} minutes</div>
                <div className="date">{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds} seconds</div>
                </div>
        )
    }
}

export default Clock;