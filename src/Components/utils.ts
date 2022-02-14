{
  /* dance moves for song:  "Mr C The Slide Man - Cha-Cha Slide"  
        https://www.youtube.com/watch?v=wZv62ShoStY&ab_channel=MrCTheSlideManVEVO"
       :)
      */
}

const danceMoves = [
  'Right foot, lets stomp.',
  'Left foot, lets stomp.',
  'Turn to the right.',
  'Turn to the left.',
  'Clap your hands.',
];

const titles = [
  'Most immediate',
  'Yet Another',
  'No rush',
  'Important',
  'Reminder',
];

const randomItem = (arr:any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
export const randomEvent = () => {
  let today = new Date();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  let randomEvent = {
    time: time,
    title: randomItem(titles),
    description: randomItem(danceMoves),
  };
  randomEvent.time = time;
  return randomEvent;
};
