import React from 'react';

interface Props {
  modal: (
    val: boolean,
    time: string,
    title: string,
    description: string
  ) => void;
  time: string;
  title: string;
  description: string;
  side: string;
}

const TimelineItem: React.FC<Props> = ({
  modal,
  time,
  title,
  description,
  side,
}) => {
  return (
    <div>
      <div className={`timeline-item-${side}`}>
        <time>{time}</time>
        <p>{title}</p>
        <p>{description}</p>
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
