import imgDot from '../src/img/proyect-img-dot.jpg'
import imgLesa from '../src/img/proyect-img-lesa.jpg'
import imgTodo from '../src/img/proyect-img-todo.jpg'
import imgMovieFlix from '../src/img/proyect-img-movieflix.jpg'
import imgOSP from '../src/img/proyect-img-sylabus.jpg'
import imgAhorro from '../src/img/proyect-img-ahorro.jpg'
import imgCoral from '../src/img/proyect-img-coral.jpg'
import ImgMJ from '../src/img/hobbies-mj.png'
import ImgMiley from '../src/img/hobbies-miley.jpg'
import ImgEspacio from '../src/img/hobbies-espacio.jpg'
import ImgSocc from '../src/img/hobbies-soccer.jpg'
import ImgNfl from '../src/img/hobbies-nfl.jpg'
import ImgNba from '../src/img/hobbies-nba.jpg'
import ImgBox from '../src/img/hobbies-boxing.jpg'
import ImgTB from '../src/img/hobbies-tampa.jpg'
import ImgAfa from '../src/img/hobbies-afa.jpg'
import ImgRiver from '../src/img/hobbies-river.jpg'
import ImgLA from '../src/img/hobbies-lakers.jpg'
import ImgValo from '../src/img/hobbies-valo.jpg'
import ImgF23 from '../src/img/hobbies-fifa23.jpg'
import ImgBtf from '../src/img/hobbies-btf.jpg'
import ImgLol from '../src/img/hobbies-lol.jpg'
import ImgTheWeeknd from '../src/img/hobbie-theweeknd.jpg'

export const dataSkills = [
  'HTML',
  'CSS',
  'JSX',
  'REACT',
  'NEXT',
  'LARAVEL',
  'PHP',
  'GIT',
  'JAVASCRIPT',
  'SCRUM',
  'MYSQL',
  'SHOPINCLOUD',
  'WORDPRESS',
  'SHOPIFY -',
]

export const proyects = [
  {
    id: 1,
    name: 'Coral Bim Solutions',
    tech: 'WORDPRESS',
    link: 'https://coralbimsolutions.com/',
    image: imgCoral,
  },
  {
    id: 3,
    name: 'MovieFlix',
    tech: 'REACT',
    link: 'https://hartoy-movieflix-llprznlf0-hartoy.vercel.app/',
    image: imgMovieFlix,
  },
  {
    id: 4,
    name: 'DOT',
    tech: 'HTML - CSS - JS - HANDLEBARS',
    link: 'https://dot-hotels.com/portal/es-es/p19/DOTHotels',
    image: imgDot,
  },
  {
    id: 6,
    name: 'Ahorro Direct',
    tech: 'Wordpress',
    link: 'https://ahorrodirect.com/',
    image: imgAhorro,
  },
  {
    id: 7,
    name: 'LESA',
    tech: 'REACT',
    link: 'https://lesa-prac-u7mu.vercel.app/',
    image: imgLesa,
  },
  {
    id: 8,
    name: 'OSP',
    tech: 'REACT',
    link: 'https://osptest.vercel.app/',
    image: imgOSP,
  },
  {
    id: 9,
    name: 'Todo',
    tech: 'HTML - CSS - JS',
    link: 'https://todo-list-hartoy.vercel.app/',
    image: imgTodo,
  },
]

export const personalData = [
  {
    birthday: '19/12/91',
    nacionalidad: 'ARG - ESP',
    localidad: 'ARG - Buenos Aires - Capital Federal',
    email: 'hartoyy@hotmail.com',
    num: '1556926173',
    idioma: 'Esp nativo - Ingles B2',
  },
]

export const socialsLinks = [
  {
    linkedin: 'https://www.linkedin.com/in/ignacio-hardoy-14b575a0/',
    github: 'https://github.com/hartoy',
    ig: 'https://www.instagram.com/nachohardoy/',
  },
]

export const hobbiesImages = {
  equiposFavoritos: [
    { src: ImgAfa, alt: 'Afa Image', tooltipId: 'afa', tooltipContent: 'Seleccion Argentina' },
    { src: ImgRiver, alt: 'River Image', tooltipId: 'carp', tooltipContent: 'River Plate' },
    { src: ImgTB, alt: 'TB Image', tooltipId: 'tampa', tooltipContent: 'Buccaneers' },
    { src: ImgLA, alt: 'LA Image', tooltipId: 'lakers', tooltipContent: 'Lakers' },
  ],
  deportesFavoritos: [
    { src: ImgSocc, alt: 'Soccer Image', tooltipId: 'futbol', tooltipContent: 'Futbol' },
    { src: ImgNfl, alt: 'NFL Image', tooltipId: 'nfl', tooltipContent: 'NFL' },
    { src: ImgNba, alt: 'NBA Image', tooltipId: 'nba', tooltipContent: 'NBA' },
    { src: ImgBox, alt: 'Box Image', tooltipId: 'boxing', tooltipContent: 'Boxing' },
  ],
  artistasFavoritos: [
    { src: ImgTheWeeknd, alt: 'The Weeknd Image', tooltipId: 'tw', tooltipContent: 'The Weeknd' },
    { src: ImgMJ, alt: 'Michael Jackson Image', tooltipId: 'mj', tooltipContent: 'Michael Jackson' },
    { src: ImgMiley, alt: 'Miley Cyrus Image', tooltipId: 'miley', tooltipContent: 'Miley Cyrus' },
    {
      src: ImgEspacio,
      alt: 'Los Del Espacio Image',
      tooltipId: 'space',
      tooltipContent: 'Los Del Espacio',
    },
  ],
  juegosFavoritos: [
    { src: ImgValo, alt: 'Valorant Image', tooltipId: 'valo', tooltipContent: 'Valorant' },
    { src: ImgF23, alt: 'FIFA 23 Image', tooltipId: 'fifa23', tooltipContent: 'FIFA' },
    { src: ImgBtf, alt: 'Battlefield Image', tooltipId: 'btf', tooltipContent: 'Battlefield' },
    {
      src: ImgLol,
      alt: 'League of Legends Image',
      tooltipId: 'lol',
      tooltipContent: 'League of Legends',
    },
  ],
}
