import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: 'c\'est un humoriste',
    date: dateToday,
    student: 'Paul Mirabell',
    major: 'Scientifique'
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Anakin',
    major: 'Scientifique'
  },
  {
    title: 'DI6 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Bernard',
    major: 'Geo'
  },

];
