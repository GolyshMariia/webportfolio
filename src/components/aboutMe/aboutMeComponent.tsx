import React from 'react'
import styles from './aboutMeComponent.module.scss'


type AboutMeComponentProps = {

}

const AboutMeComponent: React.FC<AboutMeComponentProps> = () => {
  return (
    <div className={styles.container}>
  <h1>Header</h1>
  <p>My supercool component</p>
</div>
  )
}

export default AboutMeComponent
