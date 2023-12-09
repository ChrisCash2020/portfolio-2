import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, icons }) => {
  return (
    <div className='bg-light py-5 px-5'>
      <div className='container'>
        <div className=' row align-items-center'>
          <div className='col-sm-6'>
            <h1 className='text-secondary fw-bold display-3'>{title}</h1>
            <p>{description}</p>
            <div className='text-center'>
              {icons.map((icon, index) =>
                icon.isPrimary ? (
                  <Link key={index} href={icon.url}>
                    <a className='btn btn-outline-secondary my-1 mx-3'>
                      <FontAwesomeIcon
                        className='icon-style mx-3'
                        icon={icon.image}
                        size='1x'
                      />
                      {icon.title}
                    </a>
                  </Link>
                ) : (
                  <Link key={index} href={icon.url}>
                    <a className='btn btn-outline-secondary my-1 mx-3'>
                      <FontAwesomeIcon
                        className='icon-style mx-3'
                        icon={icon.image}
                        size='1x'
                      />
                      {icon.title}
                    </a>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className='col-sm-6 text-center card-image-container'>
            <img
              className='img-fluid my-3 card-image'
              src={image}
              alt='profile of christian olowokere'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const About = ({ title, description }) => {
  return (
    <div id='about' className='bg-white py-5 px-5'>
      <div className='container'>
        <h1 className='text-secondary fw-bold'>{title}</h1>
        <div className='px-sm-5'>
          {description.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
