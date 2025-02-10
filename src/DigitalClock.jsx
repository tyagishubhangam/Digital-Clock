import React, {useState, useEffect} from 'react';

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date())
      }, 1000);
    
      return () => {
        clearInterval(intervalId);
      }
    }, []);

    function getTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours >= 12 ? "PM": "AM";

        hours = hours % 12;
        return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${meridian}`
    }

    function formatTime(num){
        return num<10 ? "0"+num:num ;
    }



    return(
        <div className="clock-container">
            <div className="clock">
                <span id="time">{getTime()}</span>
            </div>

        </div>
    )
    
}

export default DigitalClock;