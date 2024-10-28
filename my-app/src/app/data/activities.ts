export interface Activity {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  fee: string;
  category: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: 'Technical Events',
    image: 'https://firebasestorage.googleapis.com/v0/b/flim-382d5.appspot.com/o/Activities%2FEvent_poster.jpeg?alt=media&token=899f3b04-e281-431e-b6f0-535cb5c5d8ef',
    description: 'The Battle of the Brains Into Competition',
    date: 'January 10, 2025',
    time: '10:00 AM - 4:00 PM',
    venue: 'Main Auditorium',
    fee: '$20',
    category: 'Technical'
  },
  {
    id: 2,
    title: 'Non Technical Events',
    image: 'https://firebasestorage.googleapis.com/v0/b/flim-382d5.appspot.com/o/Activities%2FEvent_poster.jpeg?alt=media&token=899f3b04-e281-431e-b6f0-535cb5c5d8ef',
    description: 'Enhance your Creativity.',
    date: 'January 11, 2025',
    time: '11:00 AM - 5:00 PM',
    venue: 'Exhibition Hall',
    fee: '$15',
    category: 'Non-Technical'
  },
  {
    id: 3,
    title: 'Literary Events',
    image: 'https://firebasestorage.googleapis.com/v0/b/flim-382d5.appspot.com/o/Activities%2FEvent_poster.jpeg?alt=media&token=899f3b04-e281-431e-b6f0-535cb5c5d8ef',
    description: 'Stories worth sharing. Stories worth hearing.',
    date: 'January 12, 2025',
    time: '9:00 AM - 3:00 PM',
    venue: 'Library Conference Room',
    fee: '$10',
    category: 'Literary'
  },
  {
    id: 4,
    title: 'Spot Events',
    image: 'https://firebasestorage.googleapis.com/v0/b/flim-382d5.appspot.com/o/Activities%2FEvent_poster.jpeg?alt=media&token=899f3b04-e281-431e-b6f0-535cb5c5d8ef',
    description: "Don't miss the action. It's going to be epic!",
    date: 'January 10-12, 2025',
    time: 'Various Times',
    venue: 'Multiple Locations',
    fee: '$5 per event',
    category: 'Spot'
  },
  {
    id: 5,
    title: 'Art Exhibitions',
    image: 'https://firebasestorage.googleapis.com/v0/b/flim-382d5.appspot.com/o/Activities%2FEvent_poster.jpeg?alt=media&token=899f3b04-e281-431e-b6f0-535cb5c5d8ef',
    description: 'Photography just got better.',
    date: 'January 10-12, 2025',
    time: '9:00 AM - 6:00 PM',
    venue: 'Art Gallery',
    fee: '$12',
    category: 'Art'
  }
];
