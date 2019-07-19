import React from 'react'

class Display extends React.Component{
    render(){
        let display = <h2>00:00:00</h2>;
        if (this.props.time){
            let time = this.props.time;
            let hours = Math.floor(time / 3600);
            time = time % 3600;
            let minutes = Math.floor(time / 60);
            let seconds = Math.floor(time % 60);
            display = <h2>
                        {hours >= 10 ? hours : `0${hours}`}:
                        {minutes >= 10 ? minutes : `0${minutes}`}:
                        {seconds >= 10 ? seconds : `0${seconds}`}
                        </h2>
        }
        return(
            <div>
                {display}
            </div>
        );
    }
}

export default Display;