import quran_record from '../assets/quran-record.png';
import tic_tac_toe from '../assets/tic-tac-toe.png';
import hotel_reservation from '../assets/hotel-reservation.png';
import discovery_nursery from '../assets/discovery-nursery.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Quran Record App',
        description: 'App made using flask python and cloudinary api for cloud storage to store the records',
        link: 'http://marshallown.pythonanywhere.com/',
        image: quran_record
    }
    ,
    {
        id: 2,
        title: 'Discovery Nursery',
        description : 'Website special needs children nursery which lets parents keep track of their child\'s report',
        link: 'https://github.com/MarShallOwn/Hotel-Reservation',
        image: discovery_nursery
    },
    {
        id: 3,
        title: 'Hotel Reservation',
        description : 'Website for hotel reservation using flask python',
        link: 'https://github.com/MarShallOwn/Hotel-Reservatione',
        image: hotel_reservation
    },
    {
        id: 4,
        title: 'Tic-Tac-Toe',
        description: 'tic-tac-toe using React-JS!',
        link: 'https://github.com/MarShallOwn/tic-tac-toe',
        image : tic_tac_toe
    }
];

export default PROJECTS;