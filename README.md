# Countdown Timer in React!

This project was designed to be a coding challenge. It receives an input from user and the clock will count down to zero!.

---

## Getting Started
In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Features:

* Built with React.js Components
* Counts down from the time indicated to 0
* Handles multiple input formats


## Design Philisophy

I decided break down my components into the multiple child components. The `Timer` Component holds both the `Clock` Component and an Input field. The input allows the user to pass down the time as props to the `Clock`. `Clock` will handle all the parsing of the string data, and `Display` will actually be a presentational component that strictly takes the time as a prop.

## Code Samples

```
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
            for(let i = values.length-1; i >= 0; i--){
                sum = sum + parseInt(values[i]) * (60 ** (values.length-1-i));
            }
        }else if (parseInt(str)){
            sum = parseInt(str);
        }
        this.setState({ time: sum })
    }
```
This method handles the string parsing inside `Clock`. In any case that the string isn't properly parsed on submission, time is reset to zero.

```
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

```
`Display` handles all the integer to string display logic and renders it. No need to have state because it relies on the props of `Clock`.
