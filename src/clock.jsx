import React from 'react';
import Display from './display';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: 0
        }
        this.formatTime = this.formatTime.bind(this);
        this.updateTime = this.updateTime.bind(this);
    }
    componentDidMount(){
        this.formatTime(this.props.time);

        this.intervalID = setInterval(this.updateTime,1000);
    }
    componentDidUpdate(prevProps,prevState){
        if (this.props.time !== prevProps.time){
            this.formatTime(this.props.time);
        }
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    formatTime(str){
        let values = [];
        let sum = 0;
        let currentString = "";
        //checks if it's formatted with colons or string notation
        if (str.includes("h") || str.includes("m") || str.includes("s")){
            currentString = str;
            if (str.includes("h")){
                values = currentString.split("h");
                sum = parseInt(values[0]) * 3600;
                currentString = values[1];
            }
            if (str.includes("m")){
                values = currentString.split("m");
                sum = sum + parseInt(values[0]) * 60;
                currentString = values[1];
            }
            if (str.includes("s")){
                values = currentString.split("s");
                sum = sum + parseInt(values[0]);
            }
        }else if (str.includes(":")){
            values = str.split(":")
            console.table(values);
            for(let i = values.length-1; i >= 0; i--){
                sum = sum + parseInt(values[i]) * (60 ** (values.length-1-i));
            }
        }else if (parseInt(str)){
            sum = parseInt(str);
        }
        this.setState({ time: sum })
    }

    updateTime(){
        if (this.state.time === 0){
            clearInterval(this.state.intervalID);
        }else{
            this.setState({time:this.state.time-1});
        }
    }

    render(){
        return(
            <div>
                <Display time={this.state.time} />
            </div>
        );
    }
}


export default Clock;