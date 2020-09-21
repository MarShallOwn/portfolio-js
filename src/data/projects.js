import tic_tac_toe from '../assets/tic-tac-toe.png';
import hotel_reservation from '../assets/hotel-reservation.png';
import discovery_nursery from '../assets/discovery-nursery.png';
import weather from '../assets/weather.jpg';

const PROJECTS = [
    {
        id: 1,
        title: 'Discovery Nursery',
        description : 'Website special needs children nursery which lets parents keep track of their child\'s report Buit using Flask Python, AJAX and SQL Alchemy',
        link: 'https://github.com/MarShallOwn/Discovery_Python',
        image: discovery_nursery
    },
    {
        id: 2,
        title: 'Hotel Reservation',
        description : 'Website for hotel reservation using Flask Python',
        link: 'https://github.com/MarShallOwn/Hotel-Reservation',
        image: hotel_reservation
    },
    {
        id: 3,
        title: 'Tic-Tac-Toe',
        description: 'tic-tac-toe using React-JS!',
        link: 'https://github.com/MarShallOwn/tic-tac-toe',
        image : tic_tac_toe
    },
    {
        id: 4,
        title: 'Weather App',
        description: 'weather application using APIs in JavaScript',
        link: 'https://github.com/MarShallOwn/weather-app',
        image : weather
    }
];

export default PROJECTS;