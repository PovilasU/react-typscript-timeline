import * as React from 'react';

interface IProps{
    time?: string|number;
    title?: string;
    description?: string;
}

const TimelineItem = (data:IProps) => {
    const { time, title, description } = data;
    return (
        <div>
            <p>TimelineItem component {time && time} {title && title} {description && description }</p>
        </div>
    )
}

export default TimelineItem;