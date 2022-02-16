import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import { eventsArr } from './utils';

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<
    Array<{
      time: string;
      title: string;
      description: string;
      side: string;
    }>
  >([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [event, setEvent] = useState<{
    time: string;
    title: string;
    description: string;
  }>();

  const openModal = (
    val: boolean,
    time: string,
    title: string,
    description: string
  ) => {
    setIsOpen(val);
    setEvent({ time, title, description });
  };

  const timelineEvents = events.map((item, idx) => {
    return (
      <TimelineItem
        time={item.time}
        title={item.title}
        description={item.description}
        side={item.side}
        modal={(
          val: boolean,
          time: string,
          title: string,
          description: string
        ) => {
          openModal(val, time, title, description);
        }}
        key={idx}
      />
    );
  });

  let today = new Date();
  let time1 =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  useEffect(() => {
    let side = 'left';
    setTimeout(() => {
      if (events.length < 5) {
        if (events.length % 2) {
          side = 'right';
        }
        let newEvent = eventsArr[events.length];
        newEvent.time = time1;
        newEvent.side = side;
        let newEvents = [...events];
        newEvents.unshift(newEvent);
        setEvents([...newEvents]);
      } else {
        if (events[4].side === 'left') {
          side = 'right';
        }
        let newEvent = eventsArr[Math.floor(Math.random() * 4)]; //get random event from eventsArr
        newEvent.time = time1;
        newEvent.side = side;
        let newEvents = [...events];
        newEvents.pop();
        newEvents.unshift(newEvent);
        setEvents([...newEvents]);
      }
    }, 2000);
  });

  return (
    <div>
      {isOpen && event && (
        <div className="modal-container">
          <div className="modal">
            Modal
            <p>
              <time>{event.time}</time>
            </p>
            <p>{event.title}</p>
            <p>{event.description}</p>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close event
            </button>
          </div>
        </div>
      )}
      {timelineEvents && timelineEvents}
    </div>
  );
};
export default Timeline;
