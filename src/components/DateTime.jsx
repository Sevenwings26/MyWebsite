import React, { useEffect, useState } from 'react';
import '../assets/css/Hero.css'

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
      <span className="text-black bg-orange-900 p-1 text-xs md:text-2xl mb-4">{date}</span>, <br />
      <span className="time text-orange-900 text-bold mt-2 text-xs md:text-2xl animate-pulse">{time} -</span>  
      (<span className="timezone md:text-sm text-white bold mt-2">{timeZone}</span>)
    </div>
  );
};

export default DateTime;
