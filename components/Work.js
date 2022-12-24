import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
export const Projects = ({ title, cards }) => {
  return (
    <div id='projects' className='bg-primary py-5 px-5'>
      <div className='container'>
        <h1 className='text-light fw-bold'>Projects</h1>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons}
              code={value.code}
              demo={value.demo}
              img={value.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const Card = ({ title, description, icons, img }) => {
  return (
    <div className='card py-3 px-3 mx-sm-4 my-4 card-work flip-card'>
      <div class='flip-card-inner'>
        <div className='flip-card-front d-flex flex-column '>
          <h4 className='text-primary'>{title}</h4>
          <p className='text-dark'>{description}</p>
        </div>
        <div className='flip-card-back'>
          <img className='skills-img' src={img} alt='Avatar' />
        </div>
      </div>
      <br />
      <div className='text-end' style={{ marginTop: 'auto' }}>
        {icons &&
          icons.map((value, index) => (
            <>
              <div className='links'>
                <a
                  href={value.code}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='special'
                >
                  <FontAwesomeIcon
                    className='icon-style mx-3'
                    icon={value.icon}
                    size='2x'
                  />
                  Code
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={value.demo}
                  class='special'
                >
                  <FontAwesomeIcon
                    className='icon-style mx-3'
                    icon={value.icon}
                    size='2x'
                  />
                  Live Demo
                </a>
              </div>
            </>
          ))}
      </div>
    </div>
  )
}
