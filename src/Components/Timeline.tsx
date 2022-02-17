import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import { newEv, EventInterface } from './utils';

const Timeline: React.FC = () => {
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [event, setEvent] = useState<EventInterface>();

  const openModal = (
    val: boolean,
    time: string,
    title: string,
    description: string
  ) => {
    setIsOpen(val);
    setEvent({ time, title, description });
  };

  useEffect(() => {
    setTimeout(() => {
      if (events.length < 5) {
        setEvents([newEv(), ...events]);
      } else {
        let newEvents = [...events];
        newEvents.pop(); //Remove an item from the end of an array
        newEvents.unshift(newEv()); //Remove an item from the end of an array
        setEvents([...newEvents]);
      }
    }, 5000);
  });

  const timelineEvents =
    events &&
    events
      .filter((event: EventInterface, idx: number) => {
        let side = 'right';
        idx % 2 && (side = 'left');
        event.side = side;
        return event;
      })
      .map((event: any, idx: number) => {
        return <TimelineItem event={event} modal={openModal} key={idx} />;
      });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count{count}
      </button>
      {isOpen && event && (
        <div className="modal-container">
          <div className="modal">
            {event.time && (
              <div className="timeline-time-container">
                <time>{event.time}</time>
              </div>
            )}

            {event.title && <h5>{event.title}</h5>}
            {event.description && <p>{event.description}</p>}
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="timeline">{timelineEvents}</div>
    </div>
  );
};
export default Timeline;
