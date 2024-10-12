
import React, { useState, useEffect } from 'react';
import ListOf from '../../components/ListOf/ListOf';
import Item from '../../components/Item/Item';
import './Contract.css';
import chain from "../../assets/Vector.svg";
import copy from "../../assets/copy.svg";

interface Session {
  id: number;
  date: string;
  timeRange: string;
  topic: string;
  completed: boolean;
}

const Contract: React.FC = () => {
  const [isSessionsOpen, setIsSessionsOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const [lastSession, setLastSession] = useState<Session | null>(null);

  const contractName = "CONTRACT'S NAME";
  const contractHash = "contract-hash";
  const status = "closed";
  const participants = ["Manolo", "Dr. Sergey"];
  const description = "Contract description goes here. This is a placeholder text for the contract's details and terms.";

  const sessions: Session[] = [
    { id: 1, date: "2024-10-26", timeRange: "14:00 a 17:00", topic: "Topic suggestion for session", completed: true },
    { id: 2, date: "2024-10-27", timeRange: "10:00 a 13:00", topic: "Another topic for discussion", completed: false },
  ];

  useEffect(() => {
    if (selectedDate) {
      const foundSession = sessions.filter(session => session.date === selectedDate).pop() || null;
      setLastSession(foundSession);
    }
  }, [selectedDate]);

  // Función para formatear la fecha correctamente sin desplazamientos
  const formatSessionDate = (date: string, timeRange: string) => {
    const [year, month, day] = date.split('-'); // Separamos la fecha manualmente
    const monthsInSpanish = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    const formattedDate = `${parseInt(day)} de ${monthsInSpanish[parseInt(month) - 1]}`;
    return `${formattedDate} de ${timeRange}`;
  };

  return (
    <div className="container">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">{contractName}</h1>
            <div className="flex items-center text-gray-500">
              <div className="hash-div" onClick={() => {}}>
                <img src={copy} alt="copy icon" />
                <span>{contractHash}</span>
              </div>
            </div>
          </div>
          <div className="mates flex justify-center mb-6">
            <div className="joint flex items-center space-x-4">
              {participants.map((participant, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mb-2"></div>
                  <p>{participant}</p>
                </div>
              ))}
              <img className="chain-to" src={chain} alt="chain" />
            </div>
          </div>
          <div className="description bg-gray-100 p-5 rounded mb-6">
            <h2 className="text-xl font-semibold mb-2">Contract description</h2>
            <p>{description}</p>
          </div>
          <div className="status-line mb-6">
            <h3 className="text-lg font-semibold mb-2">Status: <span className="text-red-500">{status}</span></h3>
          </div>

          <div className="date-picker mb-6">
            <label>Select a date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="date-input"
            />
          </div>

          {lastSession && (
            <div className="last-session mb-6">
              <h3 className="text-lg font-semibold mb-2">Last Session on {lastSession.date}</h3>
              <Item
                key={lastSession.id}
                name={formatSessionDate(lastSession.date, lastSession.timeRange)}
                description={lastSession.topic}
                users={[]}
                onClick={() => console.log(`Session ${lastSession.id} clicked`)}
              >
                <div className="flex items-center">
                  <span className={`text-sm ${lastSession.completed ? 'text-green-500' : 'text-gray-500'}`}>
                    {lastSession.completed ? 'Completed' : 'Pending'}
                  </span>
                </div>
              </Item>
            </div>
          )}

          <ListOf
            title="Sessions"
            itemCount={sessions.length}
            isOpen={isSessionsOpen}
            toggleList={() => setIsSessionsOpen(!isSessionsOpen)}
          >
            {sessions.map((session) => (
              <Item
                key={session.id}
                name={formatSessionDate(session.date, session.timeRange)}
                description={session.topic}
                users={[]}
                onClick={() => console.log(`Session ${session.id} clicked`)}
              >
                <div className="flex items-center">
                  <span className={`text-sm ${session.completed ? 'text-green-500' : 'text-gray-500'}`}>
                    {session.completed ? 'Completed' : 'Pending'}
                  </span>
                </div>
              </Item>
            ))}
          </ListOf>
        </div>
      </div>
    </div>
  );
};

export default Contract;
