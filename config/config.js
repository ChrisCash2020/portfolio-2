import profile from './profile1.png';

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleRight,
  faEnvelope,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: 'Christian',
  links: [
    {
      title: 'Projects',
      link: '#projects',
    },
  ],
};
export const intro = {
  title: "Hey, I'm Christian",
  description: '',
  image: profile.src,
  icons: [
    {
      image: faGithub,
      url: 'https://github.com/ChrisCash2020',
      title: 'GitHub',
      isPrimary: false,
    },
    {
      image: faTwitter,
      url: 'https://www.twitter.com/chriscashdev/',
      title: 'Twitter',
      isPrimary: false,
    },
    {
      image: faEnvelope,
      url: 'mailto:chriscashdev@gmail.com',
      title: 'Email',
      isPrimary: false,
    },
  ],
};

export const about = {
  title: 'Who I am',
  description: [
    `I am a seasoned full-stack web developer passionate about crafting intuitive and visually appealing user interfaces. With a robust skill set encompassing UI design, unit testing, debugging, and maintenance, I bring a comprehensive approach to web development. I specialize in both the Spring/React and MERN stacks, showcasing my versatility and proficiency in developing scalable and high-performance applications. Whether building server-side logic with Spring Boot or creating dynamic and responsive front-end experiences with React, my strength lies in delivering complete and integrated solutions. Explore my portfolio to discover a collection of projects that showcase my ability to tackle diverse challenges. From e-commerce to social media platforms, each project reflects my commitment to innovation and excellence.`,
  ],
};

export const projects = {
  title: 'Projects',
  cards: [
    {
      title: 'Toulouse Exotica',
      description: `Developed a food e-commerce website where actions are separated into specific roles such as admin and customer.
Customers can register/login, update credentials, filter the website's menu, add items to their cart, and checkout.
`,
      icons: [
        {
          icon: faAngleRight,
          code: 'https://github.com/ChrisCash2020/food-ecommerce',
          demo: 'https://toulouse-exotica.netlify.app/',
        },
      ],
      img: 'https://github.com/ChrisCash2020/Images/raw/master/food/demo.gif',
    },
    {
      title: 'Tinder Clone (movieConnect)',
      description:
        'Developed a dating website where users can create a profile, update their profile details, delete their profile, swipe on movies based on genre, and match/unmatch with people that fit their profile and movie preference.',
      icons: [
        {
          icon: faAngleRight,
          code: 'https://github.com/ChrisCash2020/movie-client',
          demo: 'https://movieconnect.netlify.app/',
        },
      ],
      img: 'https://github.com/ChrisCash2020/Images/raw/master/movie/demo.gif',
    },
    {
      title: 'Mortal Kombat Wikipedia',
      description:
        'Developed a Wikipedia website where authenticated users can create, edit, and delete character pages while applying the module-view-controller design pattern.',
      icons: [
        {
          icon: faAngleRight,
          code: 'https://github.com/ChrisCash2020/mk11-client',
          demo: 'https://mkwiki11.netlify.app/',
        },
      ],
      img: 'https://github.com/ChrisCash2020/Images/raw/master/mk11/mk11.gif',
    },
    {
      title: 'Vinyl Emporium',
      description:
        'Developed e-commerce website where customers can browse and buy vinyls of their favorite albums and songs.',
      icons: [
        {
          icon: faAngleRight,
          code: 'https://github.com/ChrisCash2020/MusicShop',
          demo: 'https://vinyl-emporium.netlify.app/',
        },
      ],
      img: 'https://github.com/ChrisCash2020/Images/raw/master/music/demo.gif',
    },
  ],
};

export const contact = {
  title: 'Get in touch',
  icons: [
    {
      image: faGithub,
      url: 'https://github.com/hashirshoaeb',
      title: 'GitHub',
      isPrimary: false,
    },
    {
      image: faTwitter,
      url: 'https://www.twitter.com/hashirshoaeb/',
      title: 'Twitter',
      isPrimary: false,
    },
    {
      image: faEnvelope,
      url: 'https://www.twitter.com/hashirshoaeb/',
      title: 'Email',
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: 'Christian Olowokere | Web Programmer | NodeJs | Reactjs',
  description:
    'Web developer knowledgeable in ui design, testing, debugging, and maintenance.',
  image: profile.src,
};
