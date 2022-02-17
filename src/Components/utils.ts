export const eventsArr = [
  {
    time: '',
    title: 'Most immediate',
    description: 'Right foot, lets stomp.',
    side: '',
  },
  {
    time: '',
    title: 'Yet Another',
    description: 'Left foot, lets stomp.',
    side: '',
  },
  {
    time: '',
    title: 'No rush',
    description: 'Turn to the right.',
    side: '',
  },
  {
    time: '',
    title: 'Important',
    description: 'Turn to the left.',
    side: '',
  },
  {
    time: '',
    title: 'Reminder',
    description: 'Clap your hands.',
    side: '',
  },
];

 export interface EventInterface{
   time: string,
   title: string,
   description: string,
   side?:string
}


export const newEv= ():EventInterface => {
  let today:Date = new Date();
  let time:string =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  let randomEvent:EventInterface = eventsArr[Math.floor(Math.random() * 5)];
  let newEvent:EventInterface = {
    time: time,
    title: randomEvent.title,
    description: randomEvent.description,
    side: 'left',
  };
  newEvent.time = time;
  return newEvent;
};
