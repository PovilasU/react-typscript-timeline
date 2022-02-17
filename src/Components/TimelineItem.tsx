import React from 'react';

interface Props {
  modal: (
    val: boolean,
    time: string,
    title: string,
    description: string
  ) => void;
  event: { time: string; title: string; description: string; side: string };
}

const TimelineItem: React.FC<Props> = ({ modal, event }) => {
  const { time, title, description, side } = event;
  return (
    <div className={`timeline-item-${side}`}>
      <div className="timeline-item-content">
        {time && (
          <div className="timeline-time-container">
            <time>{time}</time>
          </div>
        )}

        {title && <h5>{title}</h5>}
        {description && <p>{description}</p>}
        <span className="circle" />

        <button
          onClick={() => {
            modal(true, time, title, description);
          }}
        >
          Open event
        </button>
      </div>
    </div>
  );
};

export default TimelineItem;
