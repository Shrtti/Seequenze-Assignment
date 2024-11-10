import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

const Calendar = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(20); // Initialize with a selected date if desired
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    navigate(`/date/${date}`); // Redirect to the desired route with the selected date
    onClose(); // Close the modal when a date is clicked
  };

  return (
    <div className="calendar-modal">
      <div className="calendar-overlay" onClick={onClose}></div>
      <div className="calendar-container">
        <div className="calendar-header">
          <button className="nav-button">{"<"}</button>
          <h2 className="month-year">May, 2024</h2>
          <button className="nav-button">{">"}</button>
        </div>
        <div className="calendar-grid">
          {/* Days of the week */}
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
            <div key={index} className="calendar-day-header">
              {day}
            </div>
          ))}

          {[29, 30].map((day, index) => (
            <div key={index} className="calendar-date previous-month-date">
              {day}
            </div>
          ))}

          {Array.from({ length: 31 }, (_, i) => (
            <div
              key={i}
              className={`calendar-date ${i === selectedDate ? "active-date" : ""}`}
              onClick={() => handleDateClick(i + 1)} // Pass the actual date
            >
              {i + 1}
            </div>
          ))}

          {[1, 2].map((day, index) => (
            <div key={index} className="calendar-date previous-month-date">
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
