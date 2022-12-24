import React, { Fragment } from 'react'
import { Nav } from '../components/Navbar'
import { Intro, About } from '../components/Intro'
import { Projects } from '../components/Work'
import { Footer } from '../components/Footer'
import { about, intro, navigation, projects, SEO } from '../config/config'
import { Header } from '../components/Header'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import react from '../config/react.png'
import tys from '../config/ts.png'
import html from '../config/html.png'
import css from '../config/css1.png'
import js from '../config/js.png'
import node from '../config/nodeJs.png'
import express from '../config/express.png'
import socket from '../config/socketio.png'
import firebase from '../config/firebase.png'
import mysql from '../config/mysql.png'
import jwt from '../config/jwt.png'

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        icons={intro.icons}
      />
      <About title={about.title} description={about.description} />

      <div className=' container px-2 d-flex flex-column'>
        <h1 className='text-primary fw-bold'>Skills</h1>

        <Tabs className='skills-tabs' defaultActiveKey='first'>
          <Tab
            tabClassName='skills-tab lead'
            eventKey='first'
            title='Front-End'
          >
            <ul className='skills py-4'>
              <li>
                <img alt='' src={html.src} />
              </li>
              <li>
                <img alt='' src={css.src} />
              </li>
              <li>
                <img alt='' src={tys.src} />
              </li>
              <li>
                <img alt='' src={js.src} />
              </li>
              <li>
                <img
                  style={{ width: '60px', height: '60px' }}
                  alt=''
                  src={react.src}
                />
              </li>
            </ul>
          </Tab>
          <Tab
            tabClassName='skills-tab lead'
            eventKey='second'
            title='Back-End'
          >
            <ul className='skills py-4'>
              <li>
                <img alt='' src={node.src} />
              </li>
              <li>
                <img alt='' src={express.src} />
              </li>
              <li>
                <img alt='' src={mysql.src} />
              </li>
              <li>
                <img alt='' src={jwt.src} />
              </li>
              <li>
                <img alt='' src={socket.src} />
              </li>
              <li>
                <img alt='' src={firebase.src} />
              </li>
            </ul>
          </Tab>
        </Tabs>
      </div>

      <Projects title={projects.title} cards={projects.cards} />

      <Footer />
    </Fragment>
  )
}
