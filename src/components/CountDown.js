import React,{Component} from 'react';
import Clock from './Clock';

class CountDown extends Component{
    
    state = {deadline: 'February 28, 2021',newDeadline:''};

    UpdateDeadLine = event => {
        this.setState({newDeadline: event.target.value});
    }

    FinalDeadLine = () =>{
        this.setState({deadline: this.state.newDeadline});
    }

    FinalDeadLineKey = event =>{
        if(event.key === 'Enter'){
            this.FinalDeadLine();
        }
    }

    render(){
        return(
            <div>
                <div>CountDown</div>
                <div>{this.state.deadline}</div>
                <Clock deadline={this.state.deadline} />
                <input style={{marginTop: 10}} onKeyPress={this.FinalDeadLineKey} onChange={this.UpdateDeadLine}  placeholder="Enter Date" />
                <button onClick={this.FinalDeadLine}>Click Me</button>
            </div>
        )
    }
}

export default CountDown;