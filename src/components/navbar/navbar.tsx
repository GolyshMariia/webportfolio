import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.container}>
        <div>
            <ul className={styles.links}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="first">CV</Link></li>
      <li><Link to="example">About Me</Link></li>
      <li><Link to="example">Work</Link></li>
      </ul>
    </div>
    </div>
    
  )
}

export default Navbar
