import React from 'react';
import Clock from './clock';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time:"0",
            input:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(){
        return e => this.setState({
            input: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            time:this.state.input
        })
    }

    render(){
        return(
                <div>
                    <Clock time={this.state.time} />
                    <p>Enter time and press enter to begin!</p>
                    <p>EG: 1h2m30s or 00:00:10 or 120</p>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.input} onChange={this.update()} />
                    </form>
                </div>
        );
    }
}

export default Timer;