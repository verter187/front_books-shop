import React from 'react' 
import s from './Header.module.sass'

export default function Header() {
     
  return (
    <header id="home">
       <nav id="nav-wrap">
         
          <ul id="nav" className="nav">
            <li className={s.current}>
              <a href="#hodme">
                Home
              </a>
            </li>

            <li>
              <a href="#about">
                About
              </a>
            </li>

            <li>
              <a href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
    </header>
  )
}
