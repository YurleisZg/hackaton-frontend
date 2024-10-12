import React, { useState } from 'react';
import './CourseCard.css';

interface CourseCardProps {
  courseName: string;
  teacherName: string;
  teacherAvatar: string;
  price: number;
  university: string;
  rating: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseName,
  teacherName,
  teacherAvatar,
  price,
  university,
  rating,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [timeEntries, setTimeEntries] = useState<string[]>([]);

  const handleAddTime = () => {
    if (startTime && endTime && selectedDate) {
      const entry = `${formatDate(selectedDate)} ${startTime} hasta ${endTime}`;
      setTimeEntries([...timeEntries, entry]);
      setStartTime('');
      setEndTime('');
      setSelectedDate('');
    }
  };

  const formatDate = (date: string): string => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return new Date(date).toLocaleDateString('es-ES', options);
  };

  return (
    <div className="course-card">
      <div className="course-header">
        <div className="teacher-avatar">
          <img src={teacherAvatar} alt={teacherName} />
        </div>
        <div className="course-info">
          <h2 className="course-name">{courseName.toUpperCase()}</h2>
          <p className="teacher-name">{teacherName}</p>
          <p className="course-price">${price}</p>
        </div>
        <div className="university-info">
          <p className="university-name">{university}</p>
          <p className="course-rating">{rating}</p>
          <button className="contract-button">
            <span>Contratar</span>
          </button>
        </div>
      </div>
      <div className="course-body">
        <div className="time-entries">
          {timeEntries.map((entry, index) => (
            <div key={index} className="time-entry">
              {entry}
            </div>
          ))}
        </div>
        <div className="time-selector">
          <div className="date-picker">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="time-picker">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <span>hasta</span>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <button onClick={handleAddTime} className="add-time-button">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;