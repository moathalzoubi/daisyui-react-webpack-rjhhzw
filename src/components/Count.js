import React, { useState, useRef, useEffect } from 'react';

import { Stat } from './Stat';
export const CountDown = (props) => {
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState('00');
  const [hou, sethours] = useState(0);
  const [min, setmin] = useState(0);
  const [sec, setsec] = useState(0);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      sethours(hours);
      setmin(minutes);
      setsec(seconds);

      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer('01:10:10');

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    //deadline.setSeconds(deadline.getSeconds() + 12000);
    console.log(deadline);
    return deadline;
  };
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <>
      <div className="flex  justify-center  ">
        <div className="flex  justify-center  gap-5 text-center auto-cols-max my-5">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': props.days }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': hou }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': min }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ '--value': sec }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </>
  );
};
