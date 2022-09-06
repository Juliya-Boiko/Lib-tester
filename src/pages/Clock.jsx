import { useState, useEffect } from "react";
import styled from "styled-components";

const ClockContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 7em;
  line-height: 150px;
  color: white;
  background-color: black;
`;

const ClockBackground = styled.div`
  background: linear-gradient(to bottom right, #0263e1, #eb1836);
   border-radius: 22px;
`;

const ClockBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 4px;
  padding: 0px 20px;
  border-radius: 20px;      
  background-color: black;
`;

const ClockDelimeter = styled.span`
  margin: 0 6px;
`;

const Clock = ({ value }) => {
  return (
    <ClockBackground>
      <ClockBlock>
        <div>{value.hours}</div><ClockDelimeter>:</ClockDelimeter> 
        <div>{value.minutes}</div><ClockDelimeter>:</ClockDelimeter>
        <div>{value.seconds}</div>
      </ClockBlock>
    </ClockBackground>
  );
};

export const DigitalClock = () => { 
  const [date, setDate] = useState(new Date());

  useEffect(() => { 

    const interval = setInterval(() => {
      const update = new Date();

      if (update.getSeconds() !== date.getSeconds()) {
        setDate(update);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    }

  }, [date]);

  const formatSegment = (segment) => {
    return segment < 10 ? `0${segment}` : segment;
  };

  const getHours = (hours) => {
    return hours % 12 === 0 ? 12 : hours % 12;
  };

  const getTime = () => {
    const hours = getHours(date.getHours());
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const dataTime = {
      hours: formatSegment(hours),
      minutes: formatSegment(minutes),
      seconds: formatSegment(seconds)
    }

    return dataTime;
  };

  return (
    <ClockContainer id="timer" >
     <Clock value={getTime()} />
    </ClockContainer>
  );
};