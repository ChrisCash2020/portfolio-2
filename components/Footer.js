import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Contact = ({ title, description, icons }) => {
  return (
    <div id='contact' className='bg-white py-5 px-5'>
      <div className='container'>
        <h1 className='text-primary fw-bold'>{title}</h1>
        <div className='px-sm-5'>
          <p>{description}</p>
          <div className=''>
            {icons.map((icon, index) =>
              icon.isPrimary ? (
                <Link key={index} href={icon.url}>
                  <a className='btn btn-primary my-1 mx-3 links'>
                    <FontAwesomeIcon
                      className='icon-style mx-3'
                      icon={icon.image}
                      size='2x'
                    />
                    {icon.title}
                  </a>
                </Link>
              ) : (
                <Link key={index} href={icon.url}>
                  <a className='btn btn-outline-primary my-1 mx-3'>
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
      </div>
    </div>
  )
}

export const Footer = () => {
  return (
    <footer className='bg-secondary text-center py-2 px-5'>
      <div className='container text-muted'>
        <small>
          &copy; 2021{' '}
          <Link href='https://github.com/hashirshoaeb'>
            <a>hashirshoaeb</a>
          </Link>
          . Open sourced with love under{' '}
          <Link href='https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE'>
            <a>MIT</a>
          </Link>{' '}
          License
        </small>
      </div>
    </footer>
  )
}
