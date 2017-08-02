import React from 'react'
import './clock.scss'

class Clock extends React.Component {
    state = {
        time: '0'
    }

    componentDidMount() {
        this.updateCurrentTime();
        setInterval(this.updateCurrentTime, 1000);
    }
    
    updateCurrentTime = () => {
        var currentTime = new Date();
        currentTime = currentTime.getHours()
            + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();
        var newState = {
            time: currentTime
        }
        this.setState(newState);
    }

    render() {
        return (
            <div className="clock">
                {this.state.time}
            </div>
        )
    }
}

export default Clock
