import React, { useEffect, useState } from 'react';
import '../assets/css/Hero.css'
import { FaCalendarDays, FaClock } from "react-icons/fa6";

const DateTime = ({ dateTime }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [timeZone, setTimeZone] = useState('');

  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).formatToParts(new Date()).find(part => part.type === 'timeZoneName').value);

    const updateDateTime = () => {
      const now = new Date();
      const dateOptions = { timeZone: userTimezone, year: 'numeric', month: 'short', day: 'numeric' };
      const timeOptions = { timeZone: userTimezone, hour: 'numeric', minute: 'numeric', hour12: true };

      setDate(new Intl.DateTimeFormat('en-US', dateOptions).format(now));
      setTime(new Intl.DateTimeFormat('en-US', timeOptions).format(now));
    };

    updateDateTime(); // Initialize on component mount

    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className={dateTime}>
      <span className="w-24 md:w-44 flex flex-row justify-between items-center text-white p-1 text-xs md:text-2xl"> <FaCalendarDays /> {date}</span>, <br />
      <span className="w-28 md:w-56 flex flex-row justify-between items-center time text-white text-xs md:text-2xl animate-pulse"><FaClock /> {time} - {timeZone} 
      </span>  
      (<span className="timezone md:text-sm text-white bold mt-2"></span>)
    </div>
  );
};

export default DateTime;
