import React from 'react'

import { get } from 'utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

import Wrapper from './Wrapper'

const Contact = ({ contactInfo }) => {
  return (
    <Wrapper>
      <h2>{get(contactInfo, "title", "contact-section.title")}</h2>
      <p> {get(contactInfo, "body", "contact-section.body")} </p>
      <ul className="info">
        <li>
          <a className="info-link" href="mailto:juandastic@gmail.com" target="__blank">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            juandastic@gmail.com
          </a>
        </li>
        <li>
          <a className="info-link" href="https://www.linkedin.com/in/juandastic/" target="__blank">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            Juan David Gómez Escobar
          </a>
        </li>
        <li>
          <a className="info-link" href="https://github.com/juandastic" target="__blank">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            juandastic
          </a>
        </li>
        <li>
          <a className="info-link" href="https://twitter.com/juandastic/" target="__blank">
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            @juandastic
          </a>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Contact
