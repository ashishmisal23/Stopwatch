import React, { useState, useEffect } from 'react';

const Stopwatch = () => {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(false);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        let intervalId;
        if (timer) {
            intervalId = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount === 99) {
                        setSecond(prevSecond => {
                            if (prevSecond === 59) {
                                setMinute(prevMinute => {
                                    if (prevMinute === 59) {
                                        setHour(prevHour => prevHour + 1);
                                        return 0;
                                    }
                                    return prevMinute + 1;
                                });
                                return 0;
                            }
                            return prevSecond + 1;
                        });
                        return 0;
                    }
                    return prevCount + 1;
                });
            }, 10);
        }
        return () => clearInterval(intervalId);
    }, [timer]);

    const startTimer = () => {
        setTimer(true);
    };

    const stopTimer = () => {
        setTimer(false);
    };

    const resetTimer = () => {
        setTimer(false);
        setHour(0);
        setMinute(0);
        setSecond(0);
        setCount(0);
        setLaps([]);
    };

    const lapTimer = () => {
        const lapTime = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}.${count < 10 ? '0' + count : count}`;
        setLaps([...laps, lapTime]);
    };

    return (
        <div id='container-main'>

            <h1 style={{ fontSize: "50px", paddingBottom: "20px" }}>Stop Watch</h1>
            <div className="stopwatch-container">
                <div className='container half' id='container'>
                    <div id="time">
                        <span className="digit" id="hr">{hour < 10 ? '0' + hour : hour}</span>
                        <span className="txt">Hr</span>
                        <span className="digit" id="min">{minute < 10 ? '0' + minute : minute}</span>
                        <span className="txt">Min</span>
                        <span className="digit" id="sec">{second < 10 ? '0' + second : second}</span>
                        <span className="txt">Sec</span>
                        <span className="digit" id="count">{count < 10 ? '0' + count : count}</span>
                    </div>
                    <div id="buttons">
                        <button className="btn" id="start" onClick={startTimer}>Start</button>
                        <button className="btn" id="stop" onClick={stopTimer}>Stop</button>
                        <button className="btn" id="reset" onClick={resetTimer}>Reset</button>
                        <button className="btn" id="lap" onClick={lapTimer}>Lap</button>
                    </div>
                </div>

                <div className='container half' id="laps">
                    <h2 align="center">LAPS</h2>
                    <ul>
                        {laps.map((lap, index) => {
                            console.log(lap)
                            return(
                                <li key={index}>{lap}</li>
                            )
                        })}
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Stopwatch;
