//import * as React from 'react'
import React, {useState, useEffect } from 'react'
import TimelineItem from './TimelineItem';
import data from './data.json'

interface Iprops{
    data?:object,
}

const Timeline: React.FC<Iprops> = () => {
    const [event, setEvent] = useState<[]>([]);

   

    console.log(data);
    return (
        <div>
            <p>Timeline</p>
            <TimelineItem> </TimelineItem>
        </div>
    )
}

export default Timeline;